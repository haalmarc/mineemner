import React from 'react';

function Resource({ res }) {
  return (
    <div className="card">
      <div className="card-header">
        {res.tema}
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{res.desc}</p>
            <footer className="blockquote-footer"><a href={`https://${res.link}`}>{res.link}</a></footer>
          </blockquote>
        </div>
    </div>
  );
}

export default Resource;
