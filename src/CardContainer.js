import React from 'react';
import Card from './Card.js';
import PropTypes from 'prop-types';
import './CardContainer.css';

const CardContainer = (props) => {
  const cards = Object.keys(props.data).map((currCard) => {
    return <Card cardInfo={props.data[currCard]} displaySelected={props.displaySelected} campareCard1={props.compareCard1} campareCard2={props.compareCard2} updateSelectedCards={props.updateSelectedCards} selectedCards={props.selectedCards} />

  })

  return(
    <div className="card-container">
      { cards }
    </div>
  )
}

CardContainer.propTypes = {
  data: PropTypes.object.isRequired
}

export default CardContainer;