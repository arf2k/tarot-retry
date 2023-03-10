import React, {useEffect} from "react";
import EmptyDeck from "../../components/empty-deck/EmptyDeck"
import { FisherYatesShuffle } from "../../util/ShuffleAlgo"
import CardInfo from "../../tarot-card-json";
 import { useDispatch } from "react-redux";
import { shuffleThree } from "../../redux/Actions/shuffleCardsAction";
import {Link} from "react-router-dom"


const Homepage = () => {
     
     const dispatch = useDispatch()
     const shuffleThrees = () => {
          const shuffled = FisherYatesShuffle(CardInfo);
          let three = [shuffled[0], shuffled[1], shuffled[2]];
          dispatch(shuffleThree([three]));
        };
    

        useEffect(() => {
          const timer = setTimeout(() => shuffleThrees(), 3000);
          return () => clearTimeout(timer);
        }, []);
     
     return (
          <>
          <h1>Homepage</h1>
          {/* //{currentUser? <h1>Hi {currentUser.displayName}!!</h1> : null} */}
          
          <h1>FUN LANDING STUFF</h1>
          <nav>
               <ul>
                    <li>
                    <Link to="/allcards">Explore Cards</Link>
                    </li>
                 <li>                      
                    <Link to="/readings">Shuffle</Link>
                    </li>
                    </ul>

          </nav>
          {/* <EmptyDeck/> */}

          </>
     )
}

export default Homepage