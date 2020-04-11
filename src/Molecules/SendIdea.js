import React from 'react';
import TextInput from '../Atoms/TextInput'
import Button from '../Atoms/Button'

const SendIdea = () => {
  return(
    <div className="p-3">
      <div class="input-group d-flex justify-content-center">
        <TextInput/>
        <div class="input-group-append">
          <Button text="Send"/>
        </div>
      </div>
    </div>
  )
}


export default SendIdea