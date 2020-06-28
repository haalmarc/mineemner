const initialState = {
    fetchingData: true,
    updating: null,
    error: null,
    data: null,
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'REQUEST_SUBJECTS_DATA':
        return {
          ...state,
          fetchingData: true,
        };
      case 'SUBJECTS_DATA_FETCHED_SUCCESSFULLY':
        return {
          fetchingData: false,
          error: null,
          data: action.payload,
        };
      case 'SUBJECTS_DATA_FETCH_ERROR':
        return {
          fetchingData: false,
          error: action.error,
          data: null,
        };
      default:
        return state;
    }
  };
  