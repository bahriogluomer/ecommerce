import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CategoryCard from "../components/CategoryCard";
import {
  faChevronRight,
  faListCheck,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FaSpinner } from "react-icons/fa";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import BrandsBanner from "../components/BrandsBanner";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMoreProducts,
  fetchProducts,
  setPageCount,
} from "../store/actions/productActions";
import { useHistory, useLocation, useParams } from "react-router";
import BackToTopButton from "../components/BackToTopButton";

export default function ShoppingPage() {
  const { genderParams, categoryParams } = useParams();
  console.log("gender:", genderParams, " category:", categoryParams);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const categories = useSelector((store) => store.global.categories);
  const products = useSelector((store) => store.product.productList);
  const totalProductCount = useSelector(
    (store) => store.product.totalProductCount
  );
  const fetchState = useSelector((store) => store.product.fetchState);

  const topRatedCategories = categories
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const limit = 25;
  const offset = (page - 1) * limit;

  function replaceTurkishCharacters(text) {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ı/g, "i")
      .replace(/ö/g, "o")
      .replace(/ş/g, "s");
  }

  useEffect(() => {
    for (const cat of categories) {
      if (genderParams) {
        if (
          genderParams + ":" + replaceTurkishCharacters(categoryParams) ==
          cat.code
        ) {
          console.log(
            genderParams + ":" + replaceTurkishCharacters(categoryParams)
          );
          setCategory(cat.id);
          console.log("category:", cat.id);
          break;
        }
      }
    }
  }, [genderParams, categoryParams, categories, category]);

  const handleScrollForBackToTop = () => {
    const scrollY = window.scrollY;

    if (scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollForBackToTop);
    return () => {
      window.removeEventListener("scroll", handleScrollForBackToTop);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      if (!hasMore) {
        return;
      }

      const nextPage = page + 1;

      setPage(nextPage);

      setTimeout(() => {
        setHasMore(true);
        dispatch(
          fetchMoreProducts(
            filter,
            sort,
            category,
            nextPage,
            limit,
            (nextPage - 1) * limit
          )
        );
        if (nextPage * limit >= totalProductCount) {
          setHasMore(false);
        }
        history.push(
          location.pathname +
            "?" +
            (filter ? "filter=" + filter + "&" : "") +
            (sort ? "sort=" + sort + "&" : "") +
            (category ? "category=" + category : "") +
            (nextPage ? "&page=" + nextPage : "")
        );
      }, 0);
    }
  };

  useEffect(() => {
    const newPage = 1; // Set page to 1
    const newOffset = (newPage - 1) * limit;
    setHasMore(true);

    setPage(newPage); // Update the page state

    // Use a callback to ensure state is updated before dispatch
    setTimeout(() => {
      dispatch(
        fetchProducts(filter, sort, category, newPage, limit, newOffset)
      );
      dispatch(setPageCount(Math.ceil(totalProductCount / limit)));
      history.push(
        location.pathname +
          "?" +
          (filter ? "filter=" + filter + "&" : "") +
          (sort ? "sort=" + sort + "&" : "") +
          (category ? "category=" + category : "") +
          (newPage ? "&page=" + newPage : "")
      );
    }, 0);
  }, [category, limit]);

  // console.log("category", category);

  const handleFilter = () => {
    dispatch(fetchProducts(filter, sort, category, page, limit));
    history.push(
      location.pathname +
        "?" +
        (filter ? "filter=" + filter + "&" : "") +
        (sort ? "sort=" + sort + "&" : "") +
        (category ? "category=" + category : "") +
        (page ? "&page=" + page : "")
    );
  };

  // console.log("current filter:", filter);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    handleFilter();
  };

  return (
    <div>
      {showBackToTop && <BackToTopButton />}
      <section className="bg-lightgray1">
        <div className="m-auto flex flex-col py-8 px-8">
          <div className="flex justify-between px-2">
            <h3 className="font-bold text-2xl text-dark-text-color">Shop</h3>
            <div className="flex items-center gap-2 pr-2">
              <p className="font-bold text-sm text-dark-text-color ">Home</p>
              <FontAwesomeIcon
                icon={faChevronRight}
                size="sm"
                className="text-disabledtext"
              />
              <p className="font-bold text-sm text-disabledtext">Shop</p>
            </div>
          </div>
        </div>
      </section>
      <section id="categories" className="bg-lightgray1  ">
        <div className="mx-auto max-w-[1440px] p-6 flex justify-between items-center sm:flex-col sm:justify-center sm:items-center sm:gap-2">
          {topRatedCategories.map((category, id) => (
            <CategoryCard
              key={id}
              backgroundImage={category.img}
              title={category.title}
              rating={category.rating}
              gender={category.gender}
            />
          ))}
        </div>
      </section>
      <section>
        <div className="m-auto max-w-[1440px] p-6 flex justify-between flex-wrap items-center sm:flex-col sm:gap-2">
          <h6 className="font-bold text-base text-secondary">
            Showing all {totalProductCount} results
          </h6>
          <div className="flex items-center gap-3">
            <h6 className="font-bold text-base text-secondary">Views:</h6>
            <button className="w-12 h-12 flex justify-center items-center border rounded-md">
              <FontAwesomeIcon icon={faTableCellsLarge} size="lg" />
            </button>
            <button className="w-12 h-12 flex justify-center items-center border rounded-md">
              <FontAwesomeIcon icon={faListCheck} size="lg" />
            </button>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap gap-4 items-center justify-center"
            >
              <select
                name="category"
                className="w-56 border rounded-md bg-lightgray1 focus:outline-none px-6 py-2.5"
                onChange={(e) => setCategory(e.target.value)}
                defaultValue=""
              >
                <option disabled value="">
                  Select Category
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.code}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Search"
                name="filter"
                onChange={(e) => setFilter(e.target.value)}
                className="w-56 border rounded-md bg-lightgray1 focus:outline-none px-6 py-2.5"
              />
              <select
                name="sort"
                defaultValue="sort"
                className="w-56 px-6 py-2.5 bg-lightgray1 border rounded-md focus:outline-none"
                onChange={(e) => setSort(e.target.value)}
              >
                <option disabled value="sort">
                  Sort
                </option>
                <option
                  value="price:asc"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Price Ascending
                </option>
                <option
                  value="price:desc"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Price Descending
                </option>
                <option
                  value="rating:asc"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Rating Ascending
                </option>
                <option
                  value="rating:desc"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                >
                  Rating Descending
                </option>
              </select>
              <button className="bg-primary font-semibold px-6 py-2.5 text-white rounded-md ">
                Filter
              </button>
            </form>
          </div>
        </div>
      </section>
      <section id="products">
        {fetchState === "loading" ? (
          <div className="flex items-center justify-center h-screen text-secondary">
            <FaSpinner className="animate-spin mr-2 text-4xl" />
            Loading...
          </div>
        ) : products.length > 0 ? (
          <div className="mx-auto max-w-[1440px] grid grid-cols-5 gap-x-0.5 gap-y-8 my-20 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
            {products.map((product, id) => (
              <ProductCard
                key={id}
                img={product.images[0].url}
                title={product.name}
                description={product.description}
                stock={product.stock}
                price={product.price}
                rating={product.rating}
                id={product.id}
                name={product.name}
                category={product.category_id}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center text-secondary my-52 md:my-36">
            No Products Found
          </div>
        )}
        {fetchState === "loading more products" && (
          <div className="flex items-center justify-center h-16 my-10 text-secondary">
            <FaSpinner className="animate-spin mr-2 text-4xl" />
            Loading...
          </div>
        )}
        {hasMore == false && (
          <div className="text-center my-10">You have reached the end</div>
        )}
      </section>
      <section
        id="brands-banner"
        className="bg-lightgray1 flex items-center justify-center"
      >
        <BrandsBanner />
      </section>
    </div>
  );
}
