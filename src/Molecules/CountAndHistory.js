import React from 'react';
import Label from '../Atoms/Label'
import Button from '../Atoms/Button'

const GetIdea = (props) => {
  return(
    <div className="p-3">
      <div className="d-flex justify-content-center">
        <div className="p-3">
          <Label text="Counter : " count={props.data}/>
        </div>
        <div className="p-3">
          <Button text="History" onClick={props.data}/>
        </div>
      </div>
    </div>
  )
}

export default GetIdea