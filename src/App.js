
// import AllCards from './pages/all-cards/AllCards';

// const App = () => {
//   return (
//     <>
//       <h1>Alex's Tarot App</h1>
//       <AllCards/>
//     </>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllCards from './pages/all-cards/AllCards';
import HomePage from './pages/homepage/Homepage';
//import SignIn from './components/sign-in/SignIn';
//import SignUp from './components/sign-up/SignUp';

const App = () => {
  return (
    <Router>
      <h1>Alex's Tarot App</h1>
        <Route exact path="/" component={HomePage} />
        <Route path="/all-cards" component={AllCards} />
    </Router>
  );
};

export default App;