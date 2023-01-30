import React, { useState } from "react";
import "../../styles/Signup.styles.scss";
import FormInput from "../form-input/FormInput";
import CustomButton from "../my-button/MyButton";
import { auth, createUserProfileDocument } from "../firebase/Firebase.utils";

const Signup = () => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredentials;

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      createUserProfileDocument(user, { displayName });

      setCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const { displayName, email, password, confirmPassword } = userCredentials;
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span> Sign up with your email and password</span>
      <form className="sign-up-form">
        <FormInput
          type="text"
          name="displayName"
          label="Name"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="Password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit" onClick={submitHandler}>
          {" "}
          SIGN UP{" "}
        </CustomButton>
      </form>
    </div>
  );
};

export default Signup;
