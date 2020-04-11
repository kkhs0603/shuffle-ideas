import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from './Pages/MainPage';
import ResultPage from './Pages/ResultPage'

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/result">
              <ResultPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </div>
    </Router>
    </>
  );
}




export default App;
