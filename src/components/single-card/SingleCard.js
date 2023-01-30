import React, { useState } from "react";
import "../../styles/SingleCard.styles.scss";
import InfoModal from "../info-modal/InfoModal";

const SingleCard = ({ card }) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className="card-container">
        <h1> {card.name} </h1>
        <div className={"card-img"}>
          <img
            className="card-img"
            alt={card.name}
            src={process.env.PUBLIC_URL + `${card.img}`}
            onClick={() => showModal(card.name)}
            on
          />
        </div>
      </div>
      <InfoModal card={card} show={show} onClose={onClose} />
      <></>
    </>
  );
};

export default SingleCard;
