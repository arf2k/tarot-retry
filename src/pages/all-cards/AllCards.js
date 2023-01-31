// import React, { useState, useEffect } from "react";
// import CardInfo from "../../tarot-card-json";
// import SingleCard from "../../components/single-card/SingleCard";
// import "../../styles/AllCards.styles.scss";
// import SearchBar from "../../components/search-bar/SearchBar";
// import { connect } from "react-redux";
// import { renderCardsAction } from "../../redux/Actions/renderCardsAction";

// // const AllCards = () => {
// //   const [searchTerm, setSearchTerm] = useState("");

// const renderCards = () => {
//   return CardInfo.filter((card) =>
//     card.name.toLowerCase().includes(searchTerm.toLowerCase())
//   ).map((card) => <SingleCard key={card.name} card={card} />);
// };

// //   const searchHandler = (e) => {
// //     setSearchTerm(e.target.value);
// //   };

// //   return (
// //     <>
// //       <h1>Card Exploration</h1>
// //       <SearchBar searchTerm={searchTerm} searchHandler={searchHandler} />
// //       <div className="all-cards-container">{renderCards()}</div>
// //     </>
// //   );
// // };

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardInfo from "../../tarot-card-json"
import SingleCard from "../../components/single-card/SingleCard";
import "../../styles/AllCards.styles.scss";
import SearchBar from "../../components/search-bar/SearchBar";
import { renderCardsAction } from "../../redux/Actions/renderCardsAction";

// const AllCards = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const renderTarotCards = (CardInfo) => {
//     if (!CardInfo) return null
//     else
//     console.log(CardInfo)
//     return CardInfo.filter((card) =>
//       card.name.toLowerCase().includes(searchTerm.toLowerCase())
//     ).map((card) => <SingleCard key={card.name} card={card} />);
//   };

//   const searchHandler = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   React.useEffect(() => {
//     renderCards(CardInfo);
//   }, []);

//   return (
//     <>
//       <h1>Card Exploration</h1>
//       <SearchBar searchTerm={searchTerm} searchHandler={searchHandler} />
//       <div className="all-cards-container">{renderTarotCards()}</div>
//     </>
//   );
// };

// const mapStateToProps = (state) => ({
//   cardInfo: state.renderCardsReducer.cardInfo,
// });

// const mapDispatchToProps = (dispatch) => ({
//   renderCards: (cardInfo) => dispatch(renderCardsAction(cardInfo)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(AllCards);

const AllCards = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   if (!props.render) {
  //     props.renderCards(CardInfo);
  //   }
  // }, [props.render]);

  const renderCards = (cardInfo) => {
    if(!props.render.cardInfo[0]) return null
    else
    return props.render.cardInfo[0].filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    ).map((card) => <SingleCard key={card.name} card={card} />);
  };

  // const renderCards = () => {
  //   console.log(props)
  //   return CardInfo.filter((card) =>
  //     card.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   ).map((card) => <SingleCard key={card.name} card={card} />);
  // };


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


const mapStateToProps = (state) => {
  return {
    cardInfo: state.cardInfo,
    render: state.render,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    renderCards: (cardInfo) => {
      dispatch(renderCardsAction(cardInfo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCards);



