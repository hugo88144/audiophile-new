import { useState } from "react";
import CartSummery from "./CartSummery";
import GoBack from "./GoBack";

import iconCash from "../assets/checkout/icon-cash-on-delivery.svg";
import iconCreditCard from "../assets/checkout/icon-order-confirmation.svg";

function CheckOut() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="goBack">
        <GoBack />
      </div>
      <div className="checkoutContainer">
        <div className="checkout__box">
          <div className="checkout__title">CHECKOUT</div>

          <div className="checkout__BillingDetails">
            <div className="checkout__BillingDetails-title">
              BILLING DETAILS
            </div>
            <div className="checkout__BillingDetails-Container">
              <div className="checkout__BillingDetails-Container-name">
                <label>Name</label>
                <input type="text" placeholder="Alexei Ward" />
              </div>
              <div className="checkout__BillingDetails-Container-email">
                <label>Email Address</label>
                <input type="text" placeholder="alexei@mail.com" />
              </div>
              <div className="checkout__BillingDetails-Container-phone">
                <label>Phone Number</label>
                <input type="text" placeholder="+1 202-555-0136" />
              </div>
            </div>
          </div>

          <div className="checkout__ShippingInfo">
            <div className="checkout__ShippingInfo-title">SHIPPING INFO</div>
            <div className="checkout__ShippingInfo-Container">
              <div className="checkout__ShippingInfo-Container-address">
                <label>Address</label>
                <input type="text" placeholder="1137 Williams Avenue" />
              </div>
              <div className="checkout__ShippingInfo-Container-zipcode">
                <label>Zip Code</label>
                <input type="text" placeholder="10001" />
              </div>
              <div className="checkout__ShippingInfo-Container-city">
                <label>City</label>
                <input type="text" placeholder="New York" />
              </div>
              <div className="checkout__ShippingInfo-Container-country">
                <label>Country</label>
                <input type="text" placeholder="United States" />
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
                  onClick={handleClick}
                  checked={isActive}
                />
                <label>e-Money</label>
              </div>
              <div className="checkout__PaymentDetails-Container-method-options-input">
                <input
                  type="radio"
                  value="cash-on-delivery"
                  onClick={handleClick}
                  checked={!isActive}
                />
                <label>Cash on Delivery</label>
              </div>

              {isActive ? (
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
                  <img src={iconCash} className="cash__icon" />
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
      </div>
    </>
  );
}

export default CheckOut;
