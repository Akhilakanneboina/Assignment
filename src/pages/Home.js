import React, { useState } from 'react';
import PetList from '../src/components/PetList';
import SearchForm from '../src/components/SearchForm';

function Home() {
  const [pets, setPets] = useState([]);

  const handleSearchResults = (results) => {
    setPets(results);
  };

  return (
    <div className="home">
      <h1>hello</h1>
      <SearchForm onSearchResults={handleSearchResults} />
      <PetList pets={pets} />
    </div>
  );
}

export default Home;
