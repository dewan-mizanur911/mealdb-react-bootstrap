import React, { useEffect, useState } from 'react';
import Aside from '../Aside/Aside';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
  const [mealName, setMealName] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
            .then(res => res.json())
          .then(data => {
            setMeals(data.meals);
            setSearchedItems(data.meals);
          });
    }, []);
  
  
    const onHandleClick = name => {
      const meal = [...mealName, name];
      // console.log(meal.length);
        setMealName(meal);
  }
  const onSearch = event => {
    const searchedText = event.target.value;
    // console.log(meals);
    const newMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchedText.toLowerCase()));
    setSearchedItems(newMeals);
  }
  
  return (
    <>
      <div className="input-group mb-3">
          <input onChange={onSearch} type="text" className="search-input mx-auto w-75" placeholder="Meal name" />
      </div>
      <div className="container-fluid row">
        <div className="col-md-10 border-end border-2">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {searchedItems.map((meal) => (
              <Meal
                key={meal.idMeal}
                meal={meal}
                onHandleClick={onHandleClick}
              ></Meal>
            ))}
          </div>
        </div>
        <div className="col-md-2">
          <Aside key={mealName} aside={mealName}></Aside>
        </div>
      </div>
      </>
    );
};

export default Meals;