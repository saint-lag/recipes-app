import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';
import { getAllMealIngredients } from '../services/theMealsDbAPI';

const ExploreFoodsIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const getAllIngredients = async () => {
    const MAXIMUM_RENDER = 12;
    const allIngredients = await getAllMealIngredients();
    return allIngredients.splice(0, MAXIMUM_RENDER);
  };

  useEffect(() => {
    getAllIngredients().then((result) => setIngredients(result));
  }, []);

  return (
    <div>
      <Header title="Explore Ingredients" />
      <section className="exploreFoodsIngredientsSection">
        {ingredients.map(
          ({ strIngredient, strDescription, idIngredient }, index) => (
            <IngredientsCard
              key={ index }
              cardIndex={ index }
              cardImg={ `https://www.themealdb.com/images/ingredients/${strIngredient}-small.png` }
              ingredientName={ strIngredient }
              ingredientId={ idIngredient }
              ingredientDescription={ strDescription }
            />
          ),
        )}
      </section>
      <Footer />
    </div>
  );
};

export default ExploreFoodsIngredients;
