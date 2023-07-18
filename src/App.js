import "./styles.css";
import { useState } from "react";
// Q. Create a Form in react with these fields
// email -  should be proper email
// phone - 10 digit number
// gender - male/female/other - dropdown
// password - minimum 6 characters, should contain at least - 1 upper case, 1 lower case, 1 number, 1 special character

// you need to add some other form validations
// 1. onclick on submit button it will check for validations if form is not valid then it will show a red 2. color message below to that input box (this field is mandatory)  also border should also become red.
// 3. once this field get valid it should revert back to it's orignal form from red color
// 4. whenever you blur out from an input field it should check for the validation of that particular input field.
// Example - https://imgur.com/WmHn5k6.png
export default function App() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("Male");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const isEmailValid = () => {
    const emailRgex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(emailRgex)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email"
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        email: null
      }));
    }
  };

  const isPhoneValid = () => {
    if (phone.length === 10) {
      setErrors((prev) => ({
        ...prev,
        phone: null
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        phone: "Please enter a valid phone number"
      }));
    }
  };
  console.log("errrr", errors);
  const isPasswordValid = () => {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{6,}$/;
    if (password.match(passRegex)) {
      setErrors((prev) => ({
        ...prev,
        password: null
      }));
    } else {
      setErrors((prev) => ({
        ...prev,
        password:
          "Please enter a valid password which has atleast 1 upper case, 1 lower case, 1 number, 1 special character and minimumlength should be 6"
      }));
    }
  };

  const onSubmitHandler = () => {
    isEmailValid();
    isPasswordValid();
    isPhoneValid();
  };

  return (
    <div className="App">
      <div class="field">
        <input
          onBlur={isEmailValid}
          type="string"
          onChange={(e) => setEmail(e.target.value)}
          className={errors?.email ? "error" : ""}
        />
        <label
          style={{
            transform: !email ? "translateY(20px) " : ""
          }}
        >
          Email
        </label>
      </div>
      {errors?.email ? <div className="errorText">{errors.email}</div> : null}
      <div className="field">
        <input
          id="phone"
          onBlur={isPhoneValid}
          type="number"
          onChange={(e) => setPhone(e.target.value)}
          className={errors?.phone ? "error" : ""}
        />
        <label
          id="phone"
          style={{
            transform: !phone ? "translateY(20px) " : ""
          }}
        >
          Phone
        </label>
      </div>
      {errors?.phone ? <div className="errorText">{errors.phone}</div> : null}
      <div className="field">
        <input
          onBlur={isPasswordValid}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className={errors?.password ? "error" : ""}
        />
        <label>Password</label>
      </div>
      {errors?.password ? (
        <div className="errorText">{errors.password}</div>
      ) : null}
      gender
      <select
        onChange={(e) => {
          setGender(e.target.value);
        }}
      >
        <option value="Male">Male</option>
        <option value="Female">FeMale</option>
        <option value="Other">Other</option>
      </select>
      <button onClick={onSubmitHandler} type="submit">
        Submit
      </button>
    </div>
  );
}
