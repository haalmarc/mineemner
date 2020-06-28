import firebase from 'firebase';

const requestResourceUpdate = () => ({
  type: 'REQUEST_RESOURCE_UPDATE',
});

const resourceUpdateSuccess = () => ({
  type: 'RESOURCE_UPDATE_SUCCESS',
});

const resourceUpdateError = (error) => ({
  type: 'RESOURCE_UPDATE_ERROR',
  error,
});

export function resourceUpdate(subject, id, object) {
  return (dispatch) => {
    dispatch(requestResourceUpdate());

    let resourceKey = id;
    if (id === 'new') {
      resourceKey = firebase.database().ref().child(`/resources/${subject}`).push().key;
    }

    const updates = {};

    updates[`/resources/${subject}/${resourceKey}`] = object;

    firebase.database().ref().update(updates)
      .then(() => {
        dispatch(resourceUpdateSuccess());
      })
      .catch((err) => {
        dispatch(resourceUpdateError(err.message));
      });
  };
}
