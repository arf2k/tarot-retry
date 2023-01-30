import React from "react";
import "../../styles/InfoModal.styles.scss";

const InfoModal = ({ card, show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="bg" onClick={onClose}>
      <div className="modal-content">
        <h1 className="card-name"> {card.name} </h1>

        <p> Card Number : {card.number}</p>
        <ul>
          Fortune Telling :<li>{card.fortune_telling[0]}</li>
          <li>{card.fortune_telling[1]}</li>
          {card.fortune_telling[2] ? <li>{card.fortune_telling[2]}</li> : null}
        </ul>
        <ul>
          Meanings:
          <ul>
            Light:
            <li>{card.meanings.light[0]}</li>
            <li>{card.meanings.light[1]}</li>
            <li>{card.meanings.light[2]}</li>
            <li>{card.meanings.light[3]}</li>
            {/* <li>{card.meanings.light[4]}</li>
            <li>{card.meanings.light[5]}</li>
            <li>{card.meanings.light[6]}</li>
            <li>{card.meanings.light[7]}</li> */}
          </ul>
          Dark:
          <ul>
            <li>{card.meanings.shadow[0]}</li>
            <li>{card.meanings.shadow[1]}</li>
            <li>{card.meanings.shadow[2]}</li>
            <li>{card.meanings.shadow[3]}</li>
            {/* <li>{card.meanings.shadow[4]}</li>
            <li>{card.meanings.shadow[5]}</li>
            <li>{card.meanings.shadow[6]}</li>
            <li>{card.meanings.shadow[7]}</li> */}
          </ul>
        </ul>
        <button onClick={onClose}>Close </button>
      </div>
    </div>
  );
};

export default InfoModal;
