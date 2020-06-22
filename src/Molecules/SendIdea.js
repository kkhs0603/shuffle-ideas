import React from 'react';
import TextInput from '../Atoms/TextInput'
import Button from '../Atoms/Button'

const SendIdea = (props) => {
  //console.log(props)
  return(
    <div className="p-3">
      <div className="input-group d-flex justify-content-center">
        <TextInput/>
        <div className="input-group-append">
          <Button text="Send" onClick={props.onClick}/>
        </div>
      </div>
    </div>
  )
}


export default SendIdea