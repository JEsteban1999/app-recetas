import React from 'react';

interface RecipeItemProps {
    recipe: any;
    onSelectRecipe: (recipe: any) => void;
}

const RecipeItem: React.FC<RecipeItemProps> = ({ recipe, onSelectRecipe }) => {
    return (
        <div
            className="p-4 bg-white rounded shadow mb-4 cursor-pointer"
            onClick={() => onSelectRecipe(recipe)}
        >
            <h2 className="text-2xl font-bold text-center">{recipe.label}</h2>
            <div className='flex justify-center items-center mt-2'>
                <img src={recipe.image} alt={recipe.label} className="w-fit h-fit object-cover mt-2 rounded" />
            </div>
            <p className="mt-2 text-center">Source: {recipe.source}</p>
        </div>
    );
};

export default RecipeItem;
