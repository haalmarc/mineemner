import React from 'react';
import {
  Link,
} from "react-router-dom";

function SubjectListItem({ sub, handleFavorite, addFavorite }) {
  return (
    <div>
        <Link to={`/subjects/${sub.code}`} style={{ textDecoration: 'none' }}>
            <h3 className="d-inline">{sub.code} - {sub.norwegian_name} - {sub.credit}</h3>
        </Link>
        <button type="button" className={`btn btn-sm ml-3 ${addFavorite ? 'btn-success' : 'btn-danger'}`} onClick={() => handleFavorite(sub)}>
          {addFavorite ? 'Legg til i favoritter' : 'Fjern favoritt'}
        </button>
    </div>
  );
}

export default SubjectListItem;
