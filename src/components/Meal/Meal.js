import React from 'react';

const Meal = (props) => {
    // console.log(props);
    const { strMeal, strMealThumb, strInstructions } =
      props.meal;
    return (
      <div onClick={() => props.onHandleClick(strMeal)} className="col">
        <div className="card">
          <img src={strMealThumb} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{strMeal}</h5>
            <p className="card-text">
              <b>Istruction : </b>
              {strInstructions.slice(0, 200)}
            </p>
          </div>
        </div>
      </div>
    );
};

export default Meal;