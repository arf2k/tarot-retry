
import ShuffleActionTypes from "./shuffleCardsTypes";

export const shuffleOne = (card) => ({
     type: ShuffleActionTypes.SHUFFLE_ONE,
     payload: card,
});

export const shuffleThree = (cards) => ({
     type: ShuffleActionTypes.SHUFFLE_THREE,
     payload: cards
});



export const addOne = (savedCards) => ({
     type: ShuffleActionTypes.ADD_ONE,
     payload: savedCards
})


export const addThree = (savedCards) => ({
     type: ShuffleActionTypes.ADD_THREE,
     payload: savedCards
})