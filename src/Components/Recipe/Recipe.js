import React from 'react';
import "./Recipe.css"

const Recipe = (recipe) => {
    const { image, label } = recipe.recipe
    return (
        <div className='col-md-6 col-xl-4 py-4'>
            <div className="card recipe-card p-2">
                <img src={image} className="card-img-top card-img" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{label}</h5>
                </div>
            </div>
        </div>
    );
};

export default Recipe;