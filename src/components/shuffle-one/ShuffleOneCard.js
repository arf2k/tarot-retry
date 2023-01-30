import React, { useState } from "react";
import SingleCard from "../single-card/SingleCard";
import { useDispatch, useSelector } from "react-redux";
import CardInfo from "../../tarot-card-json";
import { FisherYatesShuffle } from "../shuffle-algo/ShuffleAlgo";
import { shuffleOne } from "../../redux/shuffle/shuffleActions";
import MyButton from "../my-button/MyButton";
import { createSingleCardFirestoreEntry } from "../../redux/save/saveDBActions";

const ShuffleOneCard = () => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const showShuffled = () => {
    const arr = CardInfo;
    const shuffled = FisherYatesShuffle(arr);
    const card = shuffled[0];
    dispatch(shuffleOne(card));
    setShow(true);
  };

  const { shuffle } = useSelector((state) => state.shuffle);
  const card = shuffle.payload;

  const renderOne = () => {
    if (card) {
      return <SingleCard card={card} />;
    }
  };

  const createEntry = () => {
    dispatch(createSingleCardFirestoreEntry(card));
  };

  return (
    <>
      <MyButton id="shuffle-one" isShuffle onClick={showShuffled}>
        Shuffle One
      </MyButton>
      {show ? (
        <MyButton id="save" onClick={createEntry}>
          Save Card
        </MyButton>
      ) : null}
      {shuffle ? renderOne() : null}
    </>
  );
};

export default ShuffleOneCard;
