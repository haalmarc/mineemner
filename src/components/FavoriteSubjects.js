import React, { useState, useEffect } from 'react';
import SubjectListItem from './SubjectListItem';

function FavoriteSubjects({ handleFavorite, favoriteList }) {
  const [subjectlist, setSubjectlist] = useState([]);

  useEffect(() => {
    setSubjectlist(favoriteList.map((sub) => (
      <SubjectListItem key={sub.code} sub={sub} handleFavorite={handleFavorite} addFavorite={false} />
    )))
  }, [favoriteList, handleFavorite]);

  return (
    <div>
      <h3>Mine favoritter</h3>
      {favoriteList.length === 0 ? 'Velg dine favorittemner.' : ''}
      {subjectlist}
      <hr />
    </div>
  );
}

export default FavoriteSubjects;
