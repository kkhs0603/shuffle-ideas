const ideas = (state = [], action) => {
  switch(action.type) {
    case 'CREATE_IDEA':
      const idea = { body: action.body }
      const length = state.length
      const id = ( length === 0) ? 1 : state[length - 1].id + 1;
      return [...state, {id, ...idea}]
    case 'GET_IDEAS':
      return state.filter(idea => idea.id !== action.id)
    case 'DELETE_ALL_IDEAS':
      return []
    default:
      return state
  }
}

export default ideas