import React, { useState } from "react";
import CardInfo from "../../tarot-card-json";
import SingleCard from "../../components/single-card/SingleCard";
import "../../styles/AllCards.styles.scss";
import SearchBar from "../../components/search-bar/SearchBar";

const AllCards = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const renderCards = () => {
    return CardInfo.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).map((card) => <SingleCard key={card.name} card={card} />);
  };

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <h1>Card Exploration</h1>
      <SearchBar searchTerm={searchTerm} searchHandler={searchHandler} />
      <div className="all-cards-container">{renderCards()}</div>
    </>
  );
};

export default AllCards;
