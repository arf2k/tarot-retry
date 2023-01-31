import React from "react";
import ShuffleOneCard from "../../components/shuffle-one/ShuffleOneCard";
//import SavedOne from "../../component/saved-cards/SavedOne";

const ReadingsSingle = ({ history, showShuffled }) => {
  return (
    <>
      <h1>Single Card Shuffle</h1>
      <ShuffleOneCard />
     {/* <SavedOne /> */}
    </>
  );
};

export default ReadingsSingle;
