import React from 'react';
import './RoundedLabels.css';

const RoundedLabels = ({ info, background }) => {
  return (
    <div className={'label-container'}>
      {info.map((text, i) => {
        return (
          <div
            key={text || i}
            className={'rounded-label'}
            style={{ background }}
          >
            {text}
          </div>
        );
      })}
    </div>
  );
};

export default RoundedLabels;
