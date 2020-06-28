import firebase from 'firebase';

const requestResourcesData = () => ({
  type: 'REQUEST_RESOURCES_DATA',
});

const resourcesDataFetchedSuccessfully = (payload) => ({
  type: 'RESOURCES_DATA_FETCHED_SUCCESSFULLY',
  payload,
});

// eslint-disable-next-line no-unused-vars
const resourcesDataFetchError = (error) => ({
  type: 'RESOURCES_DATA_FETCH_ERROR',
  error,
});

export function fetchResourcesData() {
  return (dispatch) => {
    dispatch(requestResourcesData());
    firebase.database().ref('resources').on('value', (snapshot) => {
      const values = snapshot.val();
      dispatch(resourcesDataFetchedSuccessfully(values));
    });
  };
}
