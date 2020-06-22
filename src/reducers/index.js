import { ADD_WORDS, CREATE_IDEA } from '../Actions'
const ideas = (state = [], action) => {
  switch(action.type) {
    case CREATE_IDEA:
      return []
    case ADD_WORDS:
      return []
    default:
      return state
  }
}

export default ideas