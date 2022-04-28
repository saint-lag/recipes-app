import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';

const ExploreDrinksIngredients = () => {
  const LAST_CARD = 12;
  const allIngredients = fetchAllIngredients();
  const ingredients = allIngredients.splice(0, LAST_CARD);
  return (
    <div>
      <Header title="Explore Ingredients" />
      <section className="exploreDrinksIngredientsSection">
        {ingredients.map(({ strIngredient, idIngredient, strDescription, index }) => (
          <IngredientsCard
            // [TODO]: Mudar o valor da key
            key={ index }
            index={ index }
            // [Q]: De onde vem a imagem ?
            // cardImg={ cardImg }
            ingredientName={ strIngredient }
            ingredientId={ idIngredient }
            ingredientDescription={ strDescription }
          />
        ))}
      </section>
      <Footer />
    </div>
  );
};

export default ExploreDrinksIngredients;
