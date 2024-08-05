import React, { useEffect } from 'react';

interface RecipeDetailProps {
    recipe: any;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
    useEffect(() => {
        window.scrollTo({top: 150, behavior: 'smooth'});
    }, [recipe])
    return (
        <div className="flex-col w-1/2 p-4 mt-4 h-min bg-white rounded shadow ml-4">
            <h2 className="text-4xl font-bold mb-4 text-center">{recipe.label}</h2>
            <div className='flex justify-center items-center'>
                <img src={recipe.image} alt={recipe.label} className="w-fit h-fit object-cover mb-4 rounded" />
            </div>
            <p><strong>Source:</strong> {recipe.source}</p>
            <p><strong>Calories:</strong> {Math.round(recipe.calories)}</p>
            <p><strong>Ingredients:</strong></p>
            <ul className="list-disc pl-5">
                {recipe.ingredientLines.map((ingredient: string, index: number) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeDetail;
