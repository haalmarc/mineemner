import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SubjectListItem from './SubjectListItem';

function Subjects({ handleFavorite }) {
  const allSubjects = useSelector(state => state.subjectsReducer)
  const [searchValue, setSearchValue] = useState('');
  const [subjectlist, setSubjectlist] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    setSubjectlist(filteredList.map((sub) => (
      <SubjectListItem key={sub.code} sub={sub} handleFavorite={handleFavorite} addFavorite={true} />
    )))
    filteredList.length > 0 ? setNoResults(false) : setNoResults(true);
  }, [filteredList, handleFavorite]);

  function updateFilteredList(filterValue) {
    setFilteredList(allSubjects.data.filter((sub) => sub.code.toUpperCase().includes(filterValue) || sub.norwegian_name.toUpperCase().includes(filterValue)));
  }

  useEffect(() => {
    if (searchValue.length % 3 === 0 && searchValue.length > 0) {
      updateFilteredList(searchValue);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allSubjects.fetchingData]);

  function handleSearch(e) {
    const inputValue = e.target.value.toUpperCase();
    setSearchValue(inputValue);
    if (inputValue.length % 3 === 0 && inputValue.length > 0) {
      updateFilteredList(inputValue);
    }
  }

  return (
    <div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" aria-label="Search" aria-describedby="basic-addon2" 
          name="search"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Søk etter emnekode eller emnenavn ..."
        />
      </div>
      <hr />
      {noResults ? 'Ditt søk ga ingen nye resultater' : ''}
      <p>
        {allSubjects.fetchingData ? 'Henter flere emner ...' : ''}
      </p>
      {subjectlist}
    </div>
  );
}

export default Subjects;
