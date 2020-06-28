import React from 'react';
import Home from './components/Home';
import SubjectInfo from './components/SubjectInfo';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/subjects/:id" component={SubjectInfo}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
