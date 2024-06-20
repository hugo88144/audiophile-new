import CartSummery from "./CartSummery";
import GoBack from "./GoBack";

function CheckOut() {
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
                <input type="radio" id="e-money" value="e-money" checked />
                <label>e-Money</label>
              </div>
              <div className="checkout__PaymentDetails-Container-method-options-input">
                <input type="radio" />
                <label>Cash on Delivery</label>
              </div>

              <div className="checkout__PaymentDetails-Container-number">
                <label>e-Money Number</label>
                <input type="text" placeholder="238521993" />
              </div>

              <div className="checkout__PaymentDetails-Container-pin">
                <label>e-Money PIN</label>
                <input type="text" placeholder="6891" />
              </div>
            </div>
          </div>
        </div>
        <CartSummery />
      </div>
    </>
  );
}

export default CheckOut;
