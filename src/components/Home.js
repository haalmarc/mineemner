import React, { useEffect, useState } from 'react';
import Subjects from './Subjects';
import { useDispatch } from 'react-redux';
import { fetchSubjects } from '../actions/fetchSubjects';
import { fetchResourcesData } from '../actions/fetchResourcesData';
import FavoriteSubjects from './FavoriteSubjects';

function Home() {
  const dispatch = useDispatch();
  const [favoriteList, setFavoriteList] = useState(
    JSON.parse(localStorage.getItem('localFavoriteList')) || []
  );

  useEffect(() => {
    localStorage.setItem('localFavoriteList', JSON.stringify(favoriteList));
  }, [favoriteList]);

  useEffect(() => {
    dispatch(fetchSubjects())
    dispatch(fetchResourcesData())
  }, [dispatch]);

  function addFavorite(sub) {
    const tempList = [];
    if (!favoriteList.some((item) => item.code === sub.code)) {
      tempList.push(...favoriteList, sub);
      setFavoriteList(tempList);
    }
  }

  function removeFavorite(chosenSub) {
    const tempList = favoriteList.filter((sub) => chosenSub !== sub);
    setFavoriteList(tempList);
  }

  return (
    <div className="container mt-5">
      <h1>Mine emner</h1>
      <h5>Fant en nyttig nettside for et vanskelig emne? Del den med dine medstudenter!</h5>
      <br />
      <FavoriteSubjects favoriteList={favoriteList} handleFavorite={removeFavorite} />
      <Subjects handleFavorite={addFavorite} />
    </div>
  );
}

export default Home;
