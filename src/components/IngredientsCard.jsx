import React from 'react';
import PropTypes from 'prop-types';
import { fetchDrinksByMainIngredient } from '../services/theCockTailDbAPI';
import { fetchMealsByMainIngredient } from '../services/theMealsDbAPI';

const IngredientsCard = ({ index, ingredientName, drinkName, cardImg }) => (
  <div
    className="ingredientCardDivContainer"
    data-testid={ `${index}-ingredient-card` }
  >
    <h3
      data-testid={ `${index}-card-name` }
    >
      {ingredientName || drinkName}
    </h3>
    <a
      href={ () => (drinkName && fetchDrinksByMainIngredient(drinkName))
      || (ingredientName && fetchMealsByMainIngredient(ingredientName)) }
    >
      <img
        src={ cardImg }
        alt={ ingredientName }
        data-testid={ `${index}-card-img` }
      />
    </a>
  </div>
);

IngredientsCard.propTypes = {
  key: PropTypes.string,
  index: PropTypes.string,
  cardName: PropTypes.string,
  cardIngredient: PropTypes.string,
}.isRequired;

export default IngredientsCard;
