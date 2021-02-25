import React from 'react';
import RoundedLabels from './RoundedLabels';
import './ResultCard.css';

const ResultCard = ({ result }) => {
  const {
    Name: name,
    Description: description,
    Categories: categories,
  } = result;
  const allCategories = categories.map(({ Name: name }) => name);

  return (
    <div className="card">
      <div className={'title'}>{name}</div>
      <div className={'card-body'}>
        <div className="information-row">
          <i>{description}</i>
        </div>
        <div className="information-row">
          {<RoundedLabels info={allCategories} background={'#FED766'} />}
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
