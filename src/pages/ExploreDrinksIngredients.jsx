import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';
import { fetchAllIngredients } from '../services/theCockTailDbAPI';

const ExploreDrinksIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  const getAllIngredients = async () => {
    const LAST_CARD = 12;
    const allIngredients = await fetchAllIngredients();
    return allIngredients.splice(0, LAST_CARD);
  };

  useEffect(() => {
    getAllIngredients().then((result) => setIngredients(result));
  }, []);

  return (
    <div>
      <Header title="Explore Ingredients" />
      <section className="exploreDrinksIngredientsSection">
        {ingredients.map(
          ({ strIngredient1, index }) => (
            <IngredientsCard
              // [TODO]: Mudar o valor da key
              key={ index }
              index={ index }
              // [Q]: De onde vem a imagem ?
              // cardImg={ cardImg }
              drinkName={ strIngredient1 }
            />
          ),
        )}
      </section>
      <Footer />
    </div>
  );
};

export default ExploreDrinksIngredients;
