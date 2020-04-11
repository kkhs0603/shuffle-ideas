import React from 'react';

const Label = (props) => {
  return(
    <label style={{fontSize:props.size}}>
      {props.text}
      {props.count}
    </label>
  )
}

export default Label