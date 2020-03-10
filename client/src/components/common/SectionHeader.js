import React from 'react';
import classnames from 'classnames';

const SectionHeader = ({ header, text, btnContent, btnLight = false }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center py-5">
          <h1 className="display-4">{header}</h1>
          <p className="lead">{text}</p>
          <a
            href="/"
            className={classnames('btn', {
              'btn-outline-secondary': !btnLight,
              'btn-outline-light': btnLight
            })}
          >
            {btnContent}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
