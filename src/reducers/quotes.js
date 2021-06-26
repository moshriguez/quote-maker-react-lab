export default function quotesReducer(state = [], action) {
  let index
  let newState

  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]
  
    case "REMOVE_QUOTE":
      index = state.findIndex(quote => quote.id === action.quoteId)
      return [...state.slice(0, index), ...state.slice(index + 1)]
    
    case "UPVOTE_QUOTE":
      newState = [...state]
      return newState.map(quote => {
        if (quote.id === action.quoteId) {
          quote.votes += 1
          return quote
        } else {
          return quote
        }
      })

    case "DOWNVOTE_QUOTE":
      newState = [...state]
      return newState.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          quote.votes -= 1
          return quote
        } else {
          return quote
        }
      })


    default:
      return state;
  }
}
