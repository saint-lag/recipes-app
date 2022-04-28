import React from 'react';
import PropTypes from 'prop-types';

const IngredientsCard = ({ index, ingredientName, drinkName }) => (
  <div
    className="ingredientCardDivContainer"
    data-testid={ `${index}-ingredient-card` }
  >
    <img
      src="https://placekitten.com/150/150"
      alt={ ingredientName }
      data-testid={ `${index}-card-img` }
    />
    <h3
      data-testid={ `${index}-card-name` }
    >
      {ingredientName || drinkName}
    </h3>
  </div>
);

IngredientsCard.propTypes = {
  key: PropTypes.string,
  index: PropTypes.string,
  cardName: PropTypes.string,
  cardIngredient: PropTypes.string,
}.isRequired;

export default IngredientsCard;
