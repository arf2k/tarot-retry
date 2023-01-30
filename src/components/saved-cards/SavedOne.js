import React, {useState, useEffect} from "react";
import SingleCard from "../single-card/SingleCard";
import { useSelector } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import "../../styles/SavedThree.styles.scss"


const SavedOne = ({state}) => {

     const saved = useSelector((state => state.firestore.ordered))
     // const [showSavedCards, setShowSavedCards] = useState(false)

const [savedCards, setSavedCards] = useState()

     const renderSavedOne = () => {
          if(savedCards){
               // return savedCards.map(card => <SingleCard card={card}/>)
               console.log(savedCards.single_shuffle)

               return savedCards.single_shuffle.map(card => <SingleCard card={card}/>)

          }
        
     }
     
     useEffect(() => {
        if(saved){
             setSavedCards(saved)
        }
     }, [saved])



//   const showSaved = (e) => {
//      setShowSavedCards(true)
//      renderSavedOne()
//    }

// const [items, setItems] = useState([]);
// useEffect(()=> {
// setItems(saved)
// }, [])




return(
     <>
        {/* {saved ? (
        <button onClick={() => showSaved}>See saved</button>
      ) : null}  */}

      <h1>Saved Cards</h1>
      {savedCards? <div className="saved-container">{renderSavedOne()}</div> : null }
   </>
)

}

export default firestoreConnect([
     { collection: "single_shuffle" }
])(SavedOne)