import React from 'react';

const SectionBody = ({ image, header, text, check1, check2, positionLeft }) => {
  const imgContent = (
    <div className="col-md-6">
      <img
        src={image}
        alt=""
        className="ml-auto mb-3 img-fluid rounded-circle"
      />
    </div>
  );

  const textContent = (
    <div className="col-md-6">
      <h3>{header}</h3>
      <p>{text}</p>
      <div className="d-flex">
        <div className="p-4 align-self-start">
          <i className="fas fa-check fa-2x"></i>
        </div>
        <div className="p-4 align-self-end">{check1}</div>
      </div>
      <div className="d-flex">
        <div className="p-4 align-self-start">
          <i className="fas fa-check fa-2x"></i>
        </div>
        <div className="p-4 align-self-end">{check2}</div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        {positionLeft ? imgContent : textContent}
        {positionLeft ? textContent : imgContent}
      </div>
    </div>
  );
};

export default SectionBody;
