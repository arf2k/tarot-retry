import React from "react";
import "../../styles/EmptyDeck.styles.scss";

const EmptyDeck = () => {
  return (
    <>
    <div className="empty-deck-container">

      <div className="empty-card-front"></div>
      <div className="empty-card-front"></div>
      <div className="empty-card-front"></div>
    
      {/* <div className="empty-card-back"></div>
      <div className="empty-card-back"></div>
      <div className="empty-card-back"></div> */}
    </div>

    </>
  );
};

export default EmptyDeck;
