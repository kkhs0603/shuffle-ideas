import React from 'react';

const Label = (props) => {
  return(
    <div>
      <label style={{fontSize:props.size}}>
        {props.text}
        {props.count}
      </label>
    </div>
  )
}

export default Label