import React, { useState } from 'react';

interface SearchBarProps {
    fetchRecipes: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ fetchRecipes }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        fetchRecipes(query);
        setQuery('');
    };

    return (
        <div className="flex justify-center p-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="p-2 border border-gray-300 rounded mr-5"
                placeholder="Search for recipes..."
            />
            <button onClick={handleSearch} className="p-2 bg-blue-500 text-white rounded">
                Search
            </button>
        </div>
    );
};

export default SearchBar;
