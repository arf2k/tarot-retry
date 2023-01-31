import { shuffleOne, shuffleThree} from "../Actions/shuffleCardsAction"
import ShuffleActionTypes from "../Actions/shuffleCardsTypes"

const INITIAL_STATE = {
     shuffle : [],
     saved: []
}

const shuffleReducer = (state = INITIAL_STATE, action) => {
     switch(action.type) {
          case ShuffleActionTypes.SHUFFLE_ONE:
               return {
                    ...state,
                    shuffle: shuffleOne(action.payload) 
                    }
               case ShuffleActionTypes.SHUFFLE_THREE: 
               return {
                    ...state,
                   shuffle: shuffleThree(action.payload)
               }
               case ShuffleActionTypes.ADD_ONE:
                    return {
                         ...state,
                         saved: [...state.saved, action.payload ]
                    }
               case ShuffleActionTypes.ADD_THREE:
                    return {
                         ...state,
                         saved: [...state.saved, action.payload ]
                    }

               default:
                    return state;
     }
}


export default shuffleReducer;