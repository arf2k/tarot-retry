import React, { useState } from "react";
import { FisherYatesShuffle } from "../shuffle-algo/ShuffleAlgo";
import CardInfo from "../../tarot-card-json";
import ShuffleThreeCards from "../shuffle-three-cards/ShuffleThreeCards";
import "../../styles/ShuffleShow.styles.scss";
import EmptyDeck from "../empty-deck/EmptyDeck";
import { useDispatch } from "react-redux";
import { shuffleThree } from "../../redux/shuffle/shuffleActions";
import { withRouter } from "react-router-dom";
import MyButton from "../my-button/MyButton";

const ShuffleShow = ({ history }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

 const shuffleThrees = () => {
    const shuffled = FisherYatesShuffle(CardInfo);
    let three = [shuffled[0], shuffled[1], shuffled[2]];
    dispatch(shuffleThree([three]));
    setShow(true);
  };

  return (
    <>
      <div className="button-div">
        <MyButton id="three" onClick={shuffleThrees} isShuffle>
          Shuffle Three
        </MyButton>

        <MyButton id="one" onClick={() => history.push("/single")} isShuffle>
          Shuffle One
        </MyButton>
      </div>
      <div className="shufflers">
        {!show ? <EmptyDeck /> : null}
        <div className="shuffle-three-container">
          <ShuffleThreeCards show={show} />
        </div>
      </div>
    </>
  );
};

export default withRouter(ShuffleShow);
