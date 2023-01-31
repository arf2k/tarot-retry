import { renderCardsAction } from "../Actions/renderCardsAction";
import CardInfo from "../../tarot-card-json";

const initialState = {
     cardInfo: [CardInfo],
     render: false
   
}

   
   const renderCardsReducer = (state = initialState, action) => {
     switch (action.type){
          case "RENDER_CARDS":
          console.log("cards rendered")
          return {
               ...state, render: true,
     cardInfo: action.payload
          }
          default:
return state; 

     }
   }

   export default renderCardsReducer