import React, { useEffect, useState } from 'react';
import {
  Link,
  useLocation,
// useParams
} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getMealsByIngredient } from '../services/theMealsDbAPI';

const FoodsByMainIngredient = () => {
  const { state: { ingredientName } } = useLocation();
  const [filteredResults, setFilteredResults] = useState([]);
  const filteredFoods = async () => {
    const results = await getMealsByIngredient(ingredientName);
    return results;
  };
  useEffect(() => {
    filteredFoods().then((results) => setFilteredResults(results));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const { id } = useParams;
  return (
    <div className="foodsByMainIngredientContainer">
      <Header />
      <div className="filteredResultsContainer">
        {filteredResults.map((element, index) => (
          <Link
            data-testid={ `${index}-recipe-card` }
            key={ index }
            to={ `/foods/${element.idMeal}` }
          >
            <div className="filteredResultContainer">
              <img
                data-testid={ `${index}-card-img` }
                src={ element.strMealThumb }
                alt={ element.strMeal }
              />
              <span data-testid={ `${index}-card-name` }>{element.strMeal}</span>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FoodsByMainIngredient;
