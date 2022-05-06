import React, { useEffect, useState } from 'react';
import {
  Link,
  useLocation,
  // useParams
} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getDrinksByIngredient } from '../services/theCockTailDbAPI';

const DrinksByMainIngredient = () => {
  const { state: { ingredientName } } = useLocation();
  const [filteredResults, setFilteredResults] = useState([]);
  const filteredDrinks = async () => {
    const results = await getDrinksByIngredient(ingredientName);
    console.log(ingredientName, results);
    return results;
  };
  useEffect(() => {
    filteredDrinks().then((results) => setFilteredResults(results));
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
            to={ `/drinks/${element.idDrink}` }
          >
            <div className="filteredResultContainer">
              <img
                data-testid={ `${index}-card-img` }
                src={ element.strDrinkThumb }
                alt={ element.strDrink }
              />
              <span data-testid={ `${index}-card-name` }>{element.strDrink}</span>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default DrinksByMainIngredient;
