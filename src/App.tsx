import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);

  const fetchRecipes = async (query: string) => {
    const apiKey = '4b8c882d6f354e987647346008594d62';
    const apiId = '78f7ab44';
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${apiId}&app_key=${apiKey}`);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <SearchBar fetchRecipes={fetchRecipes} />
      <div className="container mx-auto p-4">
        <div className="flex">
          <RecipeList recipes={recipes} onSelectRecipe={setSelectedRecipe} />
          {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
        </div>
      </div>
    </div>
  );
};

export default App;
