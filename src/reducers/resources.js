const initialState = {
    fetchingData: true,
    error: null,
    data: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'REQUEST_RESOURCES_DATA':
        return {
          ...state,
          fetchingData: true,
        };
  
      case 'RESOURCES_DATA_FETCHED_SUCCESSFULLY':
        return {
          fetchingData: false,
          error: null,
          data: action.payload,
        };
      case 'RESOURCES_DATA_FETCH_ERROR':
        return {
          fetchingData: false,
          error: action.error,
          data: null,
        };
      default:
        return state;
    }
  };
  