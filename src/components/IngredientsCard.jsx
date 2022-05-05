import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateIngredientsFilter } from '../actions';
import { getDrinksByIngredient } from '../services/theCockTailDbAPI';
import { getMealsByIngredient } from '../services/theMealsDbAPI';

const IngredientsCard = ({ cardIndex, ingredientName, drinkName, cardImg }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectToFoods = async () => {
    const results = await getMealsByIngredient(ingredientName);
    dispatch(updateIngredientsFilter(results));
    return navigate('/foods');
  };
  const redirectToDrinks = async () => {
    const results = await getDrinksByIngredient(drinkName);
    dispatch(updateIngredientsFilter(results));
    return ('/drinks');
  };
  return (
    <button
      type="button"
      onClick={ async () => (drinkName && redirectToDrinks())
        || (ingredientName && redirectToFoods()) }
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
    </button>
  );
};

IngredientsCard.propTypes = {
  key: PropTypes.string,
  index: PropTypes.string,
  cardName: PropTypes.string,
  cardIngredient: PropTypes.string,
}.isRequired;

export default IngredientsCard;
