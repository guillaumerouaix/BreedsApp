const AllBreeds = (state = ['loading breeds'], action) => {
    switch (action.type) {
      case 'GET_ALL_BREEDS_SUCCESS':
        return action.payload.data
      case 'GET_ALL_BREEDS_FAIL':
        console.log('error init')
        break;
      default:
        return state
    }
  }
  export default AllBreeds