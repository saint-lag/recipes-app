import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { getDrinksByIngredient } from '../services/theCockTailDbAPI';

const IngredientsCard = ({
  cardIndex,
  ingredientName,
  drinkName,
  cardImg,
  ingredientId,
}) => {
  const ingredientType = ingredientName ? 'food' : 'drink';

  /* const filteredDrinks = async () => {
    const results = await getDrinksByIngredient(drinkName);
    return results;
  }; */

  return (
    <Link
      type="button"
      to={ `${
        ingredientType === 'food'
          ? `/foods/ingredient/${ingredientId}`
          : `/drinks/ingredient/${drinkName}`
      }` }
      state={ { filteredResults: ingredientType === 'food'
        ? ingredientName : drinkName } }
      className="ingredientCardDivContainer"
      data-testid={ `${cardIndex}-ingredient-card` }
    >
      <h3 data-testid={ `${cardIndex}-card-name` }>
        {ingredientName || drinkName}
      </h3>
      <img
        src={ cardImg }
        alt={ ingredientName }
        data-testid={ `${cardIndex}-card-img` }
      />
    </Link>
  );
};

IngredientsCard.propTypes = {
  key: PropTypes.string,
  index: PropTypes.string,
  cardName: PropTypes.string,
  cardIngredient: PropTypes.string,
}.isRequired;

export default IngredientsCard;
