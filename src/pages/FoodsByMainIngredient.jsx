import React, { useEffect, useState } from 'react';
// import {
// useLocation,
// useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getMealsByIngredient } from '../services/theMealsDbAPI';

const FoodsByMainIngredient = () => {
  // const { state: { ingredientName } } = useLocation();
  const [filteredResults, setFilteredResults] = useState([]);
  const filteredFoods = async () => {
    console.log('ingredientName: salmon');
    const results = await getMealsByIngredient('salmon');
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
        {filteredResults.forEach((element) => {
          <div className="filteredResultContainer">
            {console.log(Object.keys(element))}
          </div>;
        })}
      </div>
      <Footer />
    </div>
  );
};

export default FoodsByMainIngredient;
