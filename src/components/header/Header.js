import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Header.styles.scss";
//import { auth } from "../firebase/Firebase.utils";
// import { connect } from "react-redux"

const Header = ({ currentUser }) => {
  return (
    <div className="header-container">
      <div className="options-container">
        <Link className="page-option" to="/">
          HOME
        </Link>
        <Link className="page-option" to="/allcards">
          ALL CARDS
        </Link>
        <Link className="page-option" to="/readings">
          READINGS
        </Link>
        {/* {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {" "}
            SIGN OUT{" "}
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link> */}
        )}
      </div>
    </div>
  );
};


// const mapStateToProps = (state) => {
// console.log(state)
// }

export default (Header);
