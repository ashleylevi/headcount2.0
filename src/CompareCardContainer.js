import React from 'react';
import Card from './Card.js';
import CompareCard from './CompareCard.js';
import PropTypes from 'prop-types'
import './CompareCardContainer.css';

const CompareCardContainer = (props) => {
  let card1;
  let card2;
  let middleCard;

  if(props.compareCard1 !== null) {
    card1= <Card cardInfo={props.compareCard1} />
  }
  if(props.compareCard2 !== null) {
    card2= <Card cardInfo={props.compareCard2} />
  }
  if(props.compareCard1 !== null && props.compareCard2 !== null) {
    let object = props.compareCards(props.compareCard1.location, props.compareCard2.location)
    middleCard= <CompareCard cardInfo={object} />
  }



 

  return (
    <div className="compare-cards">{card1}{middleCard}{card2}</div>
  )
}

CompareCardContainer.propTypes = {
  data: PropTypes.object,
  compareCard1: PropTypes.object,
  compareCard2: PropTypes.object,
  compareCards: PropTypes.func
}



export default CompareCardContainer;