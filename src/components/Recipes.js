import React, { useState } from "react";
import style from "../components/Recipes.module.css";

const Recipes = ({ title, calories, image, ingredients, index }) => {
  return (
    //custom css for each component
    <div className={style.recipes}>
      <h1>{title}</h1>
      <p>
        Calories: {""}
        {Math.round(calories)}
      </p>
      <img className={style.images} src={image} alt="recipe picture" />
      <div>
        <ul>
          {ingredients.map(ingredient => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Recipes;
