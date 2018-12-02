import React from 'react';
import Card from './Card.js';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = (props) => {
  const cards = Object.keys(props.data).map((currCard) => {
    let className = 'card-wrapper';
    if (props.compareCard1 && props.data[currCard].location === props.compareCard1.location) {
        className = 'card-wrapper selected'
      }

      if (props.compareCard2 && props.data[currCard].location === props.compareCard2.location) {
        className = 'card-wrapper selected'
      }
    
    return <Card cardInfo={props.data[currCard]} displaySelected={props.displaySelected} compareCard1={props.compareCard1} compareCard2={props.compareCard2} border={className} />

  })

  return(
    <div className="card-container">
      { cards }
    </div>
  )
}

CardContainer.propTypes = {
  data: PropTypes.object,
  displaySelected: PropTypes.func,
  compareCard1: PropTypes.object,
  compareCard2: PropTypes.object
}

export default CardContainer;