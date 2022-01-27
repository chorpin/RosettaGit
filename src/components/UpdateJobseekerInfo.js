import classes from "./JobseekerInfo.module.css";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
function UpdateJobseekerInfo(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log("The fucking id:", id);

  const nameInputRef = useRef();
  const dateInputRef = useRef();
  const phoneInputRef = useRef();
  const emailInputRef = useRef();
  const addressStreetInputRef = useRef();
  const addressStateInputRef = useRef();
  const addressZipcodeInputRef = useRef();

  function callbackOnClick(id) {
    return (e) => {
      e.preventDefault();
      // Fetch and Update

      const nameInputValue = nameInputRef.current.value;
      const dateInputValue = dateInputRef.current.value;
      const phoneInputValue = phoneInputRef.current.value;
      const emailInputValue = emailInputRef.current.value;
      const addressStreetInputValue = addressStreetInputRef.current.value;
      const addressStateInputValue = addressStateInputRef.current.value;
      const addressZipcodeInputValue = addressZipcodeInputRef.current.value;
      const submitData = {
        name: nameInputValue,
        date: dateInputValue,
        phone: phoneInputValue,
        email: emailInputValue,
        addressStreet: addressStreetInputValue,
        addressState: addressStateInputValue,
        addressZipcode: addressZipcodeInputValue,
      };

      fetch(`https://ptolemy-whisper.herokuapp.com/api/v1/jobseeker/${id}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(submitData),
      })
        .then((response) => response.json())
        .then(() => {
          navigate("/");
        });

      console.log("id", id);
    };
  }
  return (
    <form className={classes.expenseContainer} onSubmit={callbackOnClick(id)}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" required ref={nameInputRef} />

      <label htmlFor="date">Date of Birth</label>
      <input type="date" id="date" required ref={dateInputRef} />

      <label htmlFor="phone">Enter your phone number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="888-888-8888"
        required
        ref={phoneInputRef}
      />

      <label htmlFor="email">Enter your email:</label>
      <input type="email" id="email" required ref={emailInputRef} />

      <label htmlFor="address">Enter your address:</label>
      <input
        type="text"
        autoComplete="address-line1"
        placeholder="street name"
        ref={addressStreetInputRef}
      />
      <input
        type="text"
        autoComplete="address-level1"
        placeholder="CA"
        ref={addressStateInputRef}
      />
      <input
        type="text"
        autoComplete="postal-code"
        placeholder="zip: 12345"
        ref={addressZipcodeInputRef}
      />

      <input className="submitButton" type="submit" value="Update" />
    </form>
  );
}

export default UpdateJobseekerInfo;
