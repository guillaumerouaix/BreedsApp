const FavoritesBreeds = (state = [], action) => {
    switch (action.type) {
      case 'ADD_BREED':
        if(state.find(({text}) => text  === action.text)){
            return state.filter(({text}) => text !== action.text)
        }
        else{
          return [
            ...state,
            {
              text: action.text
            }
          ]
        }

      case 'REMOVE_BREED':
        return state.filter(item => item !== action.breed)

      default:
        return state
    }
  }
  export default FavoritesBreeds