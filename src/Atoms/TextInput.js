import React ,{ useState } from 'react';


const TextInput = () => {
  const [values, setValues] = useState({
    idea: "",
  });
  console.log(values)
  function handleInputChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  }
  return(
    <input style={style} onChange={handleInputChange} type="text" name="idea"></input>
  )
}
const style = {
  width: '180px'
}

export default TextInput