import { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddressForm from "../components/AddressForm";
import { axiosInstance } from "../axios/axiosInstance";
import { getCities, getDistrictsByCityCode } from "turkey-neighbourhoods";
import OrderSummaryBox from "../components/OrderSummaryBox";
import AddressCard from "../components/AddressCard";
import CreateCardForm from "../components/CreateCardForm";
import CreditCard from "../components/CreditCard";

import { faClose, faPlus } from "@fortawesome/free-solid-svg-icons";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CreateOrder() {
  const [page, setPage] = useState("address");
  const [paymentReceipt, setPaymentReceipt] = useState(true);
  const token = localStorage.getItem("token");
  const [addressFormOpen, setAddressFormOpen] = useState(false);
  const [cardFormOpen, setCardFormOpen] = useState(false);
  const [allAddress, setAllAddress] = useState([]);
  const [addressEdit, setAddressEdit] = useState({});
  const [cardEdit, setCardEdit] = useState({});
  const [allCards, setAllCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedShippingAddress, setSelectedShippingAddress] = useState({});

  const handlePage = (page) => {
    setPage(page);
  };
  const handleReceiptCheck = () => {
    setPaymentReceipt(!paymentReceipt);
  };
  const handleAddressForm = () => {
    setAddressFormOpen(!addressFormOpen);
  };
  const handleAddressGoBack = () => {
    setAddressFormOpen(!addressFormOpen);
    setAddressEdit({});
  };
  const handleCardForm = () => {
    setCardFormOpen(!cardFormOpen);
  };
  const handleCardGoBack = () => {
    setCardFormOpen(!cardFormOpen);
    setCardEdit({});
  };

  const handleAddressEdit = (element) => {
    if (element.target.id) {
      for (const addr of allAddress) {
        if (addr.id == element.target.id) {
          let cityCode = getCities().find((o) => o.name == addr.city)?.code;
          let districtCode = getDistrictsByCityCode(cityCode).indexOf(
            getDistrictsByCityCode(cityCode).find((o) => o == addr.district)
          );
          setAddressEdit({ ...addr, city: cityCode, district: districtCode });
          break;
        }
      }
    }
    handleAddressForm();
  };
  const handleAddressDelete = (id) => {
    axiosInstance
      .delete("/user/address/" + id, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => setAddressEdit({}))
      .then(() => getAddress())
      .catch((err) => console.error(err));
  };

  const handleCardDelete = (id) => {
    axiosInstance
      .delete("/user/card/" + id, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => setCardEdit({}))
      .then(() => getCard())
      .catch((err) => console.error(err));
  };
  const handleCardEdit = (element) => {
    if (element.target.id) {
      for (const car of allCards) {
        if (car.id == element.target.id) {
          const expireMonthTwoDigit =
            car.expire_month < 10 ? "0" + car.expire_month : car.expire_month;
          setCardEdit({ ...car, expire_month: expireMonthTwoDigit });
          break;
        }
      }
    }
    handleCardForm();
  };
  const handleAddressSubmit = (formData) => {
    formData = {
      ...formData,
      district: getDistrictsByCityCode(formData.city)[formData.district],
    };
    for (const city of getCities()) {
      if (city.code === formData.city) {
        formData = { ...formData, city: city.name };
        break;
      }
    }
    axiosInstance
      .post("/user/address", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => getAddress())
      .then(() => setAddressFormOpen(false))
      .catch((err) => console.error(err));
  };
  const handleCardSubmit = (formData) => {
    delete formData.cvv;
    axiosInstance
      .post("/user/card", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => getCard())
      .then(() => setCardFormOpen(false))
      .catch((err) => console.error(err));
  };
  const handleAddressEditSubmit = (formData) => {
    formData = {
      ...formData,
      district: getDistrictsByCityCode(formData.city)[formData.district],
    };
    for (const city of getCities()) {
      if (city.code === formData.city) {
        formData = { ...formData, city: city.name };
        break;
      }
    }
    axiosInstance
      .put("/user/address/", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => getAddress())
      .then(() => setAddressFormOpen(false))
      .then(() => setAddressEdit({}))
      .catch((err) => console.error(err));
  };
  const handleCardEditSubmit = (formData) => {
    delete formData.cvv;
    axiosInstance
      .put("/user/card/", formData, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => getCard())
      .then(() => setCardFormOpen(false))
      .then(() => setCardEdit({}))
      .catch((err) => console.error(err));
  };
  const getAddress = () => {
    axiosInstance
      .get("/user/address", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => setAllAddress(res.data))
      .catch((err) => console.error(err));
  };
  const getCard = () => {
    axiosInstance
      .get("/user/card", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => setAllCards(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAddress();
    setSelectedShippingAddress(allAddress[0]);
    getCard();
  }, []);

  const handleCardRadio = (event) => {
    const cardId = event.target.value;
    for (const card of allCards) {
      if (cardId == card.id) {
        setSelectedCard(card);
        break;
      }
    }
  };

  const handleShippingAddressRadio = (event) => {
    const addressId = event.target.value;
    for (const address of allAddress) {
      if (addressId == address.id) {
        setSelectedShippingAddress(address);
        break;
      }
    }
  };

  return (
    <div className="w-screen text-darkgray font-semibold">
      <div className="flex max-w-[1440px] gap-10 mt-6 mb-12 mx-auto md:flex-col md:gap-6">
        <div className="basis-[60%]">
          <div className="flex mb-3">
            <div
              onClick={() => handlePage("address")}
              className={
                "basis-[50%] border-b-4 px-3 py-2 cursor-pointer" +
                " " +
                (page === "address"
                  ? "border-secondary text-primary  bg-primary bg-opacity-5"
                  : "")
              }
            >
              <h2 className="text-2xl">Shipping Address</h2>
              <p className="text-gray-400 text-sm">
                {selectedShippingAddress?.title
                  ? selectedShippingAddress.title
                  : allAddress[0]?.title
                  ? allAddress[0].title
                  : ""}
              </p>
              <p className="text-gray-400 text-sm">
                {selectedShippingAddress?.address
                  ? selectedShippingAddress.address
                  : allAddress[0]?.address
                  ? allAddress[0].address
                  : ""}
              </p>
              <p className="text-gray-400 text-sm">
                {selectedShippingAddress?.city
                  ? selectedShippingAddress.city + "/"
                  : allAddress[0]?.city
                  ? allAddress[0].city + "/"
                  : ""}
                {selectedShippingAddress?.district
                  ? selectedShippingAddress.district
                  : allAddress[0]?.district
                  ? allAddress[0].district
                  : ""}
              </p>
            </div>
            <div
              onClick={() => handlePage("payment")}
              className={
                "basis-[50%] border-b-4 px-3 py-2 cursor-pointer" +
                " " +
                (page === "payment"
                  ? "border-secondary text-primary  bg-primary bg-opacity-5"
                  : "")
              }
            >
              <h2 className="text-2xl">Payment Details</h2>
              <p className="text-sm text-gray-400 mt-4">
                Choose a payment method
              </p>
            </div>
          </div>
          <div>
            {page === "address" ? (
              addressFormOpen ? (
                <div>
                  <div className="flex justify-end">
                    <button
                      onClick={handleAddressGoBack}
                      className="flex items-center gap-2"
                    >
                      <FontAwesomeIcon icon={faClose} size="lg" />
                    </button>
                  </div>
                  <AddressForm
                    submitFn={handleAddressSubmit}
                    editFn={handleAddressEditSubmit}
                    initialData={addressEdit}
                  />
                </div>
              ) : (
                <div className="flex flex-col px-3">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl">Shipping Address</h2>
                    <div className="flex items-center">
                      <Checkbox
                        {...label}
                        checked={paymentReceipt}
                        onClick={handleReceiptCheck}
                        size="small"
                      />
                      <p className="text-sm">
                        Send receipt to the same address
                      </p>
                    </div>
                  </div>
                  <div
                    onChange={handleShippingAddressRadio}
                    className="w-full flex flex-wrap gap-y-10 gap-x-[10%] md:justify-center"
                  >
                    <div
                      onClick={handleAddressForm}
                      className="w-[45%] md:w-[80%] min-w-[300px] cursor-pointer flex flex-col justify-center items-center rounded border border-gray-300  mt-4 py-3"
                    >
                      <div className="text-center">
                        <FontAwesomeIcon
                          icon={faPlus}
                          size="lg"
                          className="text-primary"
                        />
                        <p>Create A New Address</p>
                      </div>
                    </div>
                    {allAddress.map((item, index) => {
                      return (
                        <AddressCard
                          item={item}
                          type="shipping"
                          key={index}
                          handleEdit={handleAddressEdit}
                          handleDelete={handleAddressDelete}
                          selectedShippingAddress={selectedShippingAddress}
                        />
                      );
                    })}
                  </div>
                  {!paymentReceipt && (
                    <>
                      <div className="flex items-center justify-between pt-5">
                        <h2 className="text-xl">Receipt Address</h2>
                      </div>
                      <div className="w-full flex flex-wrap gap-y-10 gap-x-[10%]">
                        <div
                          onClick={handleAddressForm}
                          className="w-[45%] md:w-[80%] min-w-[300px] cursor-pointer flex flex-col justify-center items-center rounded border border-gray-300 mt-4 py-3"
                        >
                          <div className="text-center">
                            <FontAwesomeIcon
                              icon={faPlus}
                              size="lg"
                              className="text-primary"
                            />
                            <p>Create A New Address</p>
                          </div>
                        </div>
                        {allAddress.map((item, index) => {
                          return (
                            <AddressCard
                              item={item}
                              type="receipt"
                              key={index}
                              handleEdit={handleAddressEdit}
                              handleDelete={handleAddressDelete}
                            />
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              )
            ) : (
              <div className="px-3">
                <div className="flex justify-between items-center mb-3">
                  <h2>Card Details</h2>
                  {!cardFormOpen ? (
                    <button
                      onClick={handleCardForm}
                      className="hover:text-primary"
                    >
                      Add new card <FontAwesomeIcon icon={faPlus} size="lg" />
                    </button>
                  ) : (
                    <button onClick={handleCardGoBack}>
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faClose} size="lg" />
                      </div>
                    </button>
                  )}
                </div>
                <div>
                  {cardFormOpen ? (
                    <CreateCardForm
                      submitFn={handleCardSubmit}
                      editFn={handleCardEditSubmit}
                      initialData={cardEdit}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div
                  onChange={handleCardRadio}
                  className="w-full flex flex-wrap md:justify-center gap-y-10 gap-x-[10%]"
                >
                  {allCards.map((item, index) => {
                    return (
                      <CreditCard
                        key={index}
                        data={item}
                        handleEdit={handleCardEdit}
                        handleDelete={handleCardDelete}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="basis-[40%]">
          <OrderSummaryBox />
          <button
            className="w-full bg-primary text-white font-semibold px-6 py-2.5 rounded-md disabled:bg-gray-300"
            disabled={!selectedCard || !selectedShippingAddress}
          >
            Complete Order
          </button>
        </div>
      </div>
    </div>
  );
}
