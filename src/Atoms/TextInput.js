import React ,{ useState } from 'react';
import {useSelector} from "react-redux";

const TextInput = () => {
  const [values, setValues] = useState({
    idea: "",
  });
  //console.log(values)
  
  function handleInputChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
    const userState = useSelector(state => {console.log(state); return state});
  console.log(userState)
  }
  return(
    <input style={style} onChange={handleInputChange} type="text" name="idea"></input>
  )
}
const style = {
  width: '180px'
}

export default TextInput