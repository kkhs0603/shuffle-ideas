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
import firebase from "firebase";

require('dotenv').config()

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId:process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};


const App = () => {
  firebase.initializeApp(firebaseConfig);
  return (
    <div className="p-5">
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
    </div>
  );
}




export default App;
