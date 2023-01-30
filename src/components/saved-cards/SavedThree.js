import React from "react";
import { useSelector } from "react-redux";
import SingleCard from "../single-card/SingleCard";
import "../../styles/SavedThree.styles.scss";

const SavedThree = () => {
  const saved = useSelector((state) => state.shuffle.saved);

  let nestedArrs = saved.map((nested) =>
    nested.map((element) => element[0].map((nest) => nest))
  );

  let deeperNest = nestedArrs.map((nest) => nest[0]);
  let evenDeeper = deeperNest.map((deep) => deep);
  let deepest = evenDeeper.map((deepest) => deepest);
  let deeperiest = deepest.map((card) => card);

  const renderSaved = () => {
    if (saved) {
      return deeperiest.map((cardy) =>
        cardy.map((card) => <SingleCard card={card} />)
      );
    }
  };

  return (
    <>
      <div className="saved-container">{renderSaved()}</div>
    </>
  );
};

export default SavedThree;
