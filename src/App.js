import React from 'react';
import AllCards from './pages/all-cards/AllCards';
import Header from "./components/header/Header";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/Homepage';


const App = () => {
  return (
    <div>
    <h1>Alex's Tarot App</h1>
    {/* <Header/> */}
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/allcards" element={<AllCards/>} />
</Routes>
</Router>

      </div>
  );
};

export default App;
// import AllCards from './pages/all-cards/AllCards';
// import HomePage from './pages/homepage/Homepage';
// //import SignIn from './components/sign-in/SignIn';
// //import SignUp from './components/sign-up/SignUp';

// const App = () => {
//   return (
//     <>
// <h1>Alex's Tarot App</h1>
//     <Routes>
//         <Route path="/" element={<HomePage/>} />
//         <Route path="/allcards" element={<AllCards/>} />
//     </Routes>
//   </>
//   )
// };

// export default App;