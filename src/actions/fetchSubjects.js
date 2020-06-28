
import axios from 'axios';

const requestSubjectsData = () => ({
  type: 'REQUEST_SUBJECTS_DATA',
});

const subjectsDataFetchedSuccessfully = (payload) => ({
  type: 'SUBJECTS_DATA_FETCHED_SUCCESSFULLY',
  payload,
});

// eslint-disable-next-line no-unused-vars
const subjectsFetchError = (error) => ({
  type: 'SUBJECTS_DATA_FETCH_ERROR',
  error,
});

let tempList = [];
let url = 'https://grades.no/api/v2/courses/?limit=300';

// eslint-disable-next-line import/prefer-default-export
export function fetchSubjects() {
  return (dispatch) => {
    dispatch(requestSubjectsData());
    axios.get(url)
      .then(res => {
        const data = res.data;
        if (!tempList.includes(...data.results)) {
          tempList.push(...data.results)
        };
        dispatch(subjectsDataFetchedSuccessfully(tempList));
        if (data.next !== null) {
          url = data.next
          dispatch(fetchSubjects());
        }
      })
  };
}
