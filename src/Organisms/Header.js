import React from 'react';
import Label from '../Atoms/Label'

const Header = (props) => {
  return(
    <div className="d-flex justify-content-center">
      <Label text={props.text} size={40}></Label>
    </div>
  )
}

export default Header