import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListPage from "../pages/ProductListPage";
import AboutPage from "../pages/AboutPage";
import TeamPage from "../pages/TeamPage";
import ContactPage from "../pages/ContactPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import SignUpPage from "../pages/SignUpPage";

export default function PageBody() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/products">
          <ProductListPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/team">
          <TeamPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/product">
          <ProductDetailPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>

        <Route path="*">
          <h2 className="text-red-400 text-center">404 - Page not found</h2>
        </Route>
      </Switch>
    </>
  );
}
