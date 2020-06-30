import { ADD_WORDS, CREATE_IDEA ,INPUT_WORD} from '../Actions'
const initialState = {
  inputValue: "",
};
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_IDEA:
      return []
    case INPUT_WORD:
      return {newWord:action.newWord}
    case ADD_WORDS:
      return {...state}
    default:
      return state
  }
}

export default reducer