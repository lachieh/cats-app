const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'X':
      return { ...state }

    default:
      return state
  }
}
