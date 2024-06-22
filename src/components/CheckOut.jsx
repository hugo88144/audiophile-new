import { useState } from "react";
import CartSummery from "./CartSummery";
import GoBack from "./GoBack";

import iconCash from "../assets/checkout/icon-cash-on-delivery.svg";

function CheckOut() {
  // Initialize state for form data and validation errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
    paymentMethod: "e-money",
    eMoneyNumber: "",
    eMoneyPIN: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    address: false,
    zipCode: false,
    city: false,
    country: false,
    eMoneyNumber: false,
    eMoneyPIN: false,
  });

  // Handle changes to the payment method
  const handlePaymentChange = (event) => {
    setFormData({
      ...formData,
      paymentMethod: event.target.value,
    });
  };

  // Handle form submission and validate inputs
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validate email for the presence of "@"
    const emailValid = formData.email.includes("@");

    // Validate phone number against UK phone number format using regex
    const phoneNumberValid =
      /^[+]*[0-9]{1,4}[ ]?[(]?[0-9]{1,3}[)]?[0-9 ]{5,10}$/.test(
        formData.phoneNumber
      );

    // Create a new object to track validation errors
    const newValidationErrors = {
      name: !formData.name,
      email: !emailValid,
      phoneNumber: !phoneNumberValid,
      address: !formData.address,
      zipCode: !formData.zipCode,
      city: !formData.city,
      country: !formData.country,
      eMoneyNumber:
        formData.paymentMethod === "e-money" && !formData.eMoneyNumber,
      eMoneyPIN: formData.paymentMethod === "e-money" && !formData.eMoneyPIN,
    };

    // Update the validation errors state
    setValidationErrors(newValidationErrors);

    // Check if any errors exist, if so, do not proceed with form submission
    if (Object.values(newValidationErrors).some((error) => error)) {
      console.log("Form has errors");
      return;
    }

    // Log the form data if no errors are found
    console.log("Form submitted with data:", formData);
  };

  // Handle changes to input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Update the form data state with new values
    setFormData({
      ...formData,
      [name]: value,
    });
    // Reset the validation error for the changed field
    setValidationErrors({
      ...validationErrors,
      [name]: false,
    });
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
                  {/* Display error message if validation fails for name */}
                  <label className="">
                    Name{" "}
                    {validationErrors.name && (
                      <span>This field is required</span>
                    )}
                  </label>
                  <input
                    type="text"
                    placeholder="Alexei Ward"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={validationErrors.name ? "inputInvalid" : ""}
                  />
                </div>
                <div className="checkout__BillingDetails-Container-email">
                  {/* Display error message if validation fails for email */}
                  <label>
                    Email Address{" "}
                    {validationErrors.email && (
                      <span>
                        {formData.email
                          ? "wrong email format"
                          : "This field is required"}
                      </span>
                    )}
                  </label>
                  <input
                    type="text"
                    placeholder="alexei@mail.com"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={validationErrors.email ? "inputInvalid" : ""}
                  />
                </div>
                <div className="checkout__BillingDetails-Container-phone">
                  {/* Display error message if validation fails for phone number */}
                  <label>
                    Phone Number{" "}
                    {validationErrors.phoneNumber && (
                      <span>
                        {formData.phoneNumber
                          ? "Invalid UK phone format"
                          : "This field is required"}
                      </span>
                    )}
                  </label>
                  <input
                    type="text"
                    placeholder="+44 20 1234 5678"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className={
                      validationErrors.phoneNumber ? "inputInvalid" : ""
                    }
                  />
                </div>
              </div>
            </div>

            <div className="checkout__ShippingInfo">
              <div className="checkout__ShippingInfo-title">SHIPPING INFO</div>
              <div className="checkout__ShippingInfo-Container">
                <div className="checkout__ShippingInfo-Container-address">
                  {/* Display error message if validation fails for address */}
                  <label>
                    Address{" "}
                    {validationErrors.address && (
                      <span>This field is required</span>
                    )}
                  </label>
                  <input
                    type="text"
                    placeholder="1137 Williams Avenue"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={validationErrors.address ? "inputInvalid" : ""}
                  />
                </div>
                <div className="checkout__ShippingInfo-Container-zipcode">
                  {/* Display error message if validation fails for zip code */}
                  <label>
                    Zip Code{" "}
                    {validationErrors.zipCode && (
                      <span>This field is required</span>
                    )}
                  </label>
                  <input
                    type="text"
                    placeholder="10001"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className={validationErrors.zipCode ? "inputInvalid" : ""}
                  />
                </div>
                <div className="checkout__ShippingInfo-Container-city">
                  {/* Display error message if validation fails for city */}
                  <label>
                    City{" "}
                    {validationErrors.city && (
                      <span>This field is required</span>
                    )}
                  </label>
                  <input
                    type="text"
                    placeholder="New York"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={validationErrors.city ? "inputInvalid" : ""}
                  />
                </div>
                <div className="checkout__ShippingInfo-Container-country">
                  {/* Display error message if validation fails for country */}
                  <label>
                    Country{" "}
                    {validationErrors.country && (
                      <span>This field is required</span>
                    )}
                  </label>
                  <input
                    type="text"
                    placeholder="United States"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={validationErrors.country ? "inputInvalid" : ""}
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
                    name="paymentMethod"
                    onChange={handlePaymentChange}
                    checked={formData.paymentMethod === "e-money"}
                  />
                  <label htmlFor="e-money">e-Money</label>
                </div>
                <div className="checkout__PaymentDetails-Container-method-options-input">
                  <input
                    type="radio"
                    id="cash-on-delivery"
                    value="cash-on-delivery"
                    name="paymentMethod"
                    onChange={handlePaymentChange}
                    checked={formData.paymentMethod === "cash-on-delivery"}
                  />
                  <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                </div>

                {formData.paymentMethod === "e-money" ? (
                  <>
                    <div className="checkout__PaymentDetails-Container-number">
                      {/* Display error message if validation fails for eMoney number */}
                      <label>
                        e-Money Number{" "}
                        {validationErrors.eMoneyNumber && (
                          <span>This field is required</span>
                        )}
                      </label>
                      <input
                        type="text"
                        placeholder="238521993"
                        name="eMoneyNumber"
                        value={formData.eMoneyNumber}
                        onChange={handleInputChange}
                        className={
                          validationErrors.eMoneyNumber ? "inputInvalid" : ""
                        }
                      />
                    </div>
                    <div className="checkout__PaymentDetails-Container-pin">
                      {/* Display error message if validation fails for eMoney PIN */}
                      <label>
                        e-Money PIN{" "}
                        {validationErrors.eMoneyPIN && (
                          <span>This field is required</span>
                        )}
                      </label>
                      <input
                        type="text"
                        placeholder="6891"
                        name="eMoneyPIN"
                        value={formData.eMoneyPIN}
                        onChange={handleInputChange}
                        className={
                          validationErrors.eMoneyPIN ? "inputInvalid" : ""
                        }
                      />
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
