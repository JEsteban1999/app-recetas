import React from 'react';
import RecipeItem from './RecipeItem';

interface RecipeListProps {
    recipes: any[];
    onSelectRecipe: (recipe: any) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, onSelectRecipe }) => {
    return (
        <div className="w-1/2 p-4">
            {recipes.map((recipeData, index) => (
                <RecipeItem key={index} recipe={recipeData.recipe} onSelectRecipe={onSelectRecipe} />
            ))}
        </div>
    );
};

export default RecipeList;
