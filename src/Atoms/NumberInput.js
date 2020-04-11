import React from 'react';

const NumberInput = () => {
  return(
    <input style={style} type="number" max={10} min={1} defaultValue={1}></input>
  )
}

const style = {
  width: '180px'
}

export default NumberInput