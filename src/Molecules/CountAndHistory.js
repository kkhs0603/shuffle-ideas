import React from 'react';
import Label from '../Atoms/Label'
import Button from '../Atoms/Button'

const GetIdea = () => {
  return(
    <div className="p-3">
      <div class="d-flex justify-content-center">
        <div className="p-3">
          <Label text="Counter : " count="1"/>
        </div>
        <div className="p-3">
          <Button text="History"/>
        </div>
      </div>
    </div>
  )
}

export default GetIdea