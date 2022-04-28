import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import IngredientsCard from '../components/IngredientsCard';
import { fetchAllIngredients } from '../services/theMealsDbAPI';

const ExploreFoodsIngredients = () => {
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
      <section className="exploreFoodsIngredientsSection">
        {ingredients.map(
          ({ strIngredient, strDescription, idIngredient, index }) => (
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
          ),
        )}
      </section>
      <Footer />
    </div>
  );
};

/* idIngredient: "1"
strDescription: "The chicken is a type of domesticated fowl, a subspecies of the red junglefowl (Gallus gallus). It is one of the most common and widespread domestic animals, with a total population of more than 19 billion as of 2011. There are more chickens in the world than any other bird or domesticated fowl. Humans keep chickens primarily as a source of food (consuming both their meat and eggs) and, less commonly, as pets. Originally raised for cockfighting or for special ceremonies, chickens were not kept for food until the Hellenistic period (4th–2nd centuries BC).\r\n\r\nGenetic studies have pointed to multiple maternal origins in South Asia, Southeast Asia, and East Asia, but with the clade found in the Americas, Europe, the Middle East and Africa originating in the Indian subcontinent. From ancient India, the domesticated chicken spread to Lydia in western Asia Minor, and to Greece by the 5th century BC. Fowl had been known in Egypt since the mid-15th century BC, with the \"bird that gives birth every day\" having come to Egypt from the land between Syria and Shinar, Babylonia, according to the annals of Thutmose III."
strIngredient: "Chicken"
*/

export default ExploreFoodsIngredients;
