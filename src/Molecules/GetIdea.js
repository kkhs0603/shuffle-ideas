import React from 'react';
import NumerInput from '../Atoms/NumberInput';
import Button from '../Atoms/Button'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

const GetIdea = withRouter((props) => {
  const handleToAboutPage = () => {
    props.history.push("/result");
  }
  return(
    <div className="p-3">
      <div class="input-group d-flex justify-content-center">
        <NumerInput/>
        <div class="input-group-append">
          <Button text="Get" onClick={handleToAboutPage}/>
        </div>
      </div>
    </div>
  )
})

export default GetIdea