import React, { useState, useEffect } from 'react';
import {
  useParams,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import ResModal from './ResModal';
import Resource from './Resource';
import { useDispatch } from 'react-redux';
import { fetchSubjects } from '../actions/fetchSubjects';
import { fetchResourcesData } from '../actions/fetchResourcesData';

function SubjectInfo() {
  const dispatch = useDispatch();
  const allSubjects = useSelector(state => state.subjectsReducer)
  const allResources = useSelector(state => state.resources)
  const [subject, setSubject] = useState({});  
  const [showSubjectInfo, setShowSubjectInfo] = useState(false);
  const [resourceList, setResourceList] = useState([]);
  const [resourceDisplay, setResourceDisplay] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    if (allSubjects.data === null) {
      dispatch(fetchSubjects())
      dispatch(fetchResourcesData())
    }
  }, [dispatch, allSubjects.data]);

  useEffect(() => {
    if (allSubjects.data !== null) {
      const currentSub = allSubjects.data.find((sub) => sub.code === id)
      setSubject(currentSub);
    }
  }, [id, allSubjects.data, allSubjects.fetchingData]);

  useEffect(() => {
    if (allResources.data !== null && allResources.data !== undefined) {
      const resourceObject = allResources.data[id];
      if (resourceObject !== null && resourceObject !== undefined) {
        setResourceList(Object.keys(resourceObject).map((key) => resourceObject[key]));
      }
    }
  }, [id, allResources.data]);

  useEffect(() => {
    setResourceDisplay(resourceList.map((res, index) => (
      <Resource key={index} res={res} />
    )))
  }, [resourceList]);

  function makeNewlines (string) {
    if (string !== undefined) {
      return string.split('\n').map((textPart, index) => <p key={index}>{textPart}</p>)
    }
  }

  if (subject === undefined) {
    return 'Laster...'
  }

  return (
    <div>
      <h2>Emnebeskrivelse</h2>
      <div>
        <h3>{subject.code} - {subject.norwegian_name} - {subject.credit}</h3>
        <ResModal />
        <button className="btn btn-secondary mt-2" type="button" onClick={() => setShowSubjectInfo(!showSubjectInfo)}>Vis Emnebeskrivelse</button>
        <hr />
        {showSubjectInfo ? (<div>
          <h4>Innhold</h4>
          {subject.content !== '' ? makeNewlines(subject.content) : 'Ikke lagt til innhold'}
          <h4>Læringsform</h4>
          {subject.learning_form !== '' ? makeNewlines(subject.learning_form) : 'Ikke lagt til innhold'}
          <h4>Læringsmål</h4>
          {subject.learning_goal !== '' ? makeNewlines(subject.learning_goal) : 'Ikke lagt til innhold'}
          <hr />
        </div>)
        : ''}
        <h4>Ressurser</h4>
        {resourceDisplay}
      </div>
    </div>
  );
}

export default SubjectInfo;
