import { useState } from "react";
import CartSummery from "./CartSummery";
import GoBack from "./GoBack";

import iconCash from "../assets/checkout/icon-cash-on-delivery.svg";
// import iconCreditCard from "../assets/checkout/icon-order-confirmation.svg";

function CheckOut() {
  const [paymentMethod, setPaymentMethod] = useState("e-money");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [isNameInvalid, setIsNameInvalid] = useState(false);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      console.log("Name field is empty");
      setIsNameInvalid(true);
      return;
    }
    const formData = {
      name,
      email,
      phoneNumber,
      address,
      zipCode,
      city,
      country,
      paymentMethod,
    };
    console.log("Form submitted with data:", formData);
  };

  return (
    <>
      <div className="goBack">
        <GoBack />
      </div>
      <div className="checkoutContainer">
        <form onSubmit={handleFormSubmit} className="form">
          <div className="checkout__box">
            <div className="checkout__title">CHECKOUT</div>

            <div className="checkout__BillingDetails">
              <div className="checkout__BillingDetails-title">
                BILLING DETAILS
              </div>
              <div className="checkout__BillingDetails-Container">
                <div className="checkout__BillingDetails-Container-name">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Alexei Ward"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={isNameInvalid ? "input-invalid" : ""}
                  />
                </div>
                <div className="checkout__BillingDetails-Container-email">
                  <label>Email Address</label>
                  <input
                    type="text"
                    placeholder="alexei@mail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="checkout__BillingDetails-Container-phone">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    placeholder="+1 202-555-0136"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="checkout__ShippingInfo">
              <div className="checkout__ShippingInfo-title">SHIPPING INFO</div>
              <div className="checkout__ShippingInfo-Container">
                <div className="checkout__ShippingInfo-Container-address">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="1137 Williams Avenue"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="checkout__ShippingInfo-Container-zipcode">
                  <label>Zip Code</label>
                  <input
                    type="text"
                    placeholder="10001"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </div>
                <div className="checkout__ShippingInfo-Container-city">
                  <label>City</label>
                  <input
                    type="text"
                    placeholder="New York"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="checkout__ShippingInfo-Container-country">
                  <label>Country</label>
                  <input
                    type="text"
                    placeholder="United States"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="checkout__PaymentDetails">
              <div className="checkout__PaymentDetails-title">
                PAYMENT DETAILS
              </div>
              <div className="checkout__PaymentDetails-Container">
                <label>Payment Method</label>

                <div className="checkout__PaymentDetails-Container-method-options-input">
                  <input
                    type="radio"
                    id="e-money"
                    value="e-money"
                    onChange={handlePaymentChange}
                    checked={paymentMethod === "e-money"}
                  />
                  <label htmlFor="e-money">e-Money</label>
                </div>
                <div className="checkout__PaymentDetails-Container-method-options-input">
                  <input
                    type="radio"
                    id="cash-on-delivery"
                    value="cash-on-delivery"
                    onChange={handlePaymentChange}
                    checked={paymentMethod === "cash-on-delivery"}
                  />
                  <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                </div>

                {paymentMethod === "e-money" ? (
                  <>
                    <div className="checkout__PaymentDetails-Container-number">
                      <label>e-Money Number</label>
                      <input type="text" placeholder="238521993" />
                    </div>
                    <div className="checkout__PaymentDetails-Container-pin">
                      <label>e-Money PIN</label>
                      <input type="text" placeholder="6891" />
                    </div>
                  </>
                ) : (
                  <div className="cash">
                    <img
                      src={iconCash}
                      className="cash__icon"
                      alt="Cash Icon"
                    />
                    <p className="cash__text">
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <CartSummery />
        </form>
      </div>
    </>
  );
}

export default CheckOut;
