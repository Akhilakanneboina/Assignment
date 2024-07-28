import React, { useState } from 'react';
import { searchPets } from '../src/services/api';

function SearchForm({ onSearchResults }) {
  const [animal, setAnimal] = useState('');
  const [location, setLocation] = useState('');
  const [breed, setBreed] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await searchPets(animal, location, breed);
    onSearchResults(results);
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Animal"
        value={animal}
        onChange={(e) => setAnimal(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Breed"
        value={breed}
        onChange={(e) => setBreed(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
