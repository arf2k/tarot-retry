import CardInfo from "../../tarot-card-json";


export const renderCardsAction = (cardInfo) => {
      cardInfo = CardInfo
     return {
     type: "RENDER_CARDS",
     payload: cardInfo,
     };
     };
     
     