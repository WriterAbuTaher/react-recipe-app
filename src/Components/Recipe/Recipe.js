import React from 'react';
import "./Recipe.css"

const Recipe = (recipe) => {
    // console.log(recipe);
    const { image, label } = recipe.recipe
    return (
        <div className='col-6'>
            <div className="card recipe-card">
                <img src={image} className="card-img-top card-img" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{label}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
};

export default Recipe;