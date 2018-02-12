import Redux from 'redux'
const initialState = {
  price: 0,
  count: 0,
}

// reducer
export const Reducer = (state = {price:0,count:0,total:0}, action) => {
  if (!state) {
    state = initialState
    return state
  }

  switch(action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.amount,
        price: action.price,
        total: action.price * (state.count + action.amount)
      }
    default:
      return state
  }
}

// actionCreator & action
export const addAction = (amount) => {
  return {
    type:"INCREMENT",
    price:100,
    amount:1
  }
}
