import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { updateIngredientsFilter } from '../actions';
import { fetchDrinksByMainIngredient } from '../services/theCockTailDbAPI';
import { fetchMealsByMainIngredient } from '../services/theMealsDbAPI';

const IngredientsCard = ({ cardIndex, ingredientName, drinkName, cardImg }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectToFoods = async () => {
    const results = await fetchMealsByMainIngredient(ingredientName);
    dispatch(updateIngredientsFilter(results));
    return navigate('/foods');
  };
  const redirectToDrinks = async () => {
    const results = await fetchDrinksByMainIngredient(drinkName);
    dispatch(updateIngredientsFilter(results));
    return ('/drinks');
  };
  return (
    <div
      className="ingredientCardDivContainer"
      data-testid={ `${cardIndex}-ingredient-card` }
    >
      <button
        type="button"
        onClick={ async () => (drinkName && redirectToDrinks())
          || (ingredientName && redirectToFoods()) }
      >
        <h3 data-testid={ `${cardIndex}-card-name` }>{ingredientName || drinkName}</h3>
        <img
          src={ cardImg }
          alt={ ingredientName }
          data-testid={ `${cardIndex}-card-img` }
        />
      </button>
    </div>
  );
};

IngredientsCard.propTypes = {
  key: PropTypes.string,
  index: PropTypes.string,
  cardName: PropTypes.string,
  cardIngredient: PropTypes.string,
}.isRequired;

export default IngredientsCard;
