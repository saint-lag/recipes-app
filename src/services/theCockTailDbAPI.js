// const { drinks } = await (await fetch(`${baseURL}`)).json();
const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1';

export const getDrinksByIngredient = async (ingredient) => {
  const { drinks } = await (await fetch(`${baseURL}/filter.php?i=${ingredient}`)).json();
  return drinks;
};

export const getDrinkByName = async (drink) => {
  const { drinks } = await (await fetch(`${baseURL}/search.php?s=${drink}`)).json();
  return drinks[0];
};

export const getDrinksByFirstLetter = async (letter) => {
  const { drinks } = await (await fetch(`${baseURL}/search.php?f=${letter}`)).json();
  console.log(drinks);
};

export const getDrinkRecipeById = async (id) => {
  const { drinks } = await (await fetch(`${baseURL}/lookup.php?i=${id}`)).json();
  return drinks[0];
};

export const fetchAllCocktail = async () => {
  const limiterArray = 12;
  const { drinks } = await (await fetch(`${baseURL}/search.php?s=`)).json();
  return drinks.slice(0, limiterArray);
};

export const getSurpriseDrink = async () => {
  const { drinks } = await (await fetch(`${baseURL}/random.php`)).json();
  return drinks[0];
};

export const fetchCocktailByCategory = async (category) => {
  const limiterArray = 12;
  const { drinks } = await (await fetch(`${baseURL}/filter.php?c=${category}`)).json();
  return drinks.slice(0, limiterArray);
};

export const fetchCategoryCocktail = async () => {
  const limiterArray = 5;
  const { drinks } = await (await fetch(`${baseURL}/list.php?c=list`)).json();
  return drinks.slice(0, limiterArray);
};

export const getAllDrinkIngredients = async () => {
  const { drinks } = await (await fetch(`${baseURL}/list.php?i=list`)).json();
  return drinks;
};
