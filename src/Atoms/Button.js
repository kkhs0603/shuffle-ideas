import React from 'react';

const Button = (props) => {
  //console.log(props)
  return(
    <button onClick={props.onClick} className="btn btn-outline-secondary" style={style}>{props.text}</button>
  )
}

const style = {
  width: '100px'
}

export default Button