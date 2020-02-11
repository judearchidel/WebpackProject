import React from 'react';
import classes from './PizzaImage.css';
import Pizza from '../assets/pizza.jpg';

const pizzaImage = (props) => (
    <div className={classes.PizzaImage}>
    <img src={Pizza} className={classes.Pizzaimg}/></div>
);

export default pizzaImage;