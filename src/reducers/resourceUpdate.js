const initialState = {
    updating: false,
    error: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'REQUEST_RESOURCE_UPDATE':
        return {
          ...state,
          updating: true,
        };
  
      case 'RESOURCE_UPDATE_SUCCESS':
        return {
          ...state,
          updating: false,
        };
      case 'RESOURCE_UPDATE_ERROR':
        return {
          updating: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  