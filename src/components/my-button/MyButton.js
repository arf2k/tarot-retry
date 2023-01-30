import React from "react";
import "../../styles/MyButton.styles.scss";

const MyButton = ({ children, GoogleSignIn, isShuffle, ...otherProps }) => {
  return (
    <button
      className={`${isShuffle ? "shuffle" : ""} || ${
        GoogleSignIn ? "google-sign-in" : ""
      } my-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default MyButton;
