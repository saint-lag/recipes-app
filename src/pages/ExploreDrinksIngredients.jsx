import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';
import { getAllDrinkIngredients } from '../services/theCockTailDbAPI';

const ExploreDrinksIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const getAllIngredients = async () => {
    const LAST_CARD = 12;
    const allIngredients = await getAllDrinkIngredients();
    return allIngredients.splice(0, LAST_CARD);
  };

  useEffect(() => {
    getAllIngredients().then((result) => setIngredients(result));
  }, []);

  return (
    <div>
      <Header title="Explore Ingredients" />
      <section className="exploreDrinksIngredientsSection">
        {ingredients.map(({ strIngredient1 }, index) => (
          <IngredientsCard
            // [TODO]: Mudar o valor da key
            key={ index }
            cardIndex={ index }
            cardImg={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-small.png` }
            drinkName={ strIngredient1 }
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default ExploreDrinksIngredients;
