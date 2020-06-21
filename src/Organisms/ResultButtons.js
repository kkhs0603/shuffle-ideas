import React from 'react';
import Button from '../Atoms/Button'
import {
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";

const ResultButtons = withRouter((props) => {
  const handleToMainPage = () => {
    props.history.push("/");
  }
  const handleReShuffle = () => {
    console.log('shuffle')
  }
  return(
    <div className="d-flex justify-content-center p-3">
      <div className="p-2">
        <Button text="Got it" onClick={handleToMainPage}/>
      </div>
      <div className="p-2">
        <Button text="ReShuffle" onClick={handleReShuffle}/>
      </div>
    </div>
  )
})

export default ResultButtons