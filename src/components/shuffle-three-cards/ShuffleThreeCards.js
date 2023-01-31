import React from "react";
import SingleCard from "../single-card/SingleCard";
import { useSelector, useDispatch } from "react-redux";
//import { withRouter } from "react-router";
import EmptyDeck from "../empty-deck/EmptyDeck";
//import { createThreeCardFirestoreEntry } from "../../redux/save/saveDBActions";
import { useNavigate } from "react-router-dom";

const ShuffleThreeCards = ({ show, history }) => {
  const { shuffle } = useSelector((state) => state.shuffle);
  const cards = shuffle.payload;

  // const saved = useSelector((state) => state.shuffle.saved);

  // const dispatch = useDispatch();
  const renderThree = () => {
    if (!show) {
      return null;
    } else {
      return cards[0].map((card) => <SingleCard card={card} />);
    }
  };

  // const createTripleEntry = () => {
  //   dispatch(createThreeCardFirestoreEntry(cards));
  // };
const navigate = useNavigate()
 
  return (
    <>
      {shuffle ? renderThree() : <EmptyDeck />}
      {/* {cards ? <button onClick={createTripleEntry}>Save?</button> : null} */}

      {/* {saved.length > 0 ? (
        <button onClick={() => navigate("/triple")}>See saved</button>
      ) : null} */}
    </>
  );
};

export default (ShuffleThreeCards);
