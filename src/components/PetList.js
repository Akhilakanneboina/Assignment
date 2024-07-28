import React, { useState, useEffect } from 'react';
import { fetchPets } from '../src/services/api';
import Pet from './Pet';

function PetList() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPets = async () => {
      try {
        const petsData = await fetchPets();
        setPets(petsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPets();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }
  if (pets.length === 0) return <p>No pets found.</p>;

  return (
    <div className="pet-list">
      {pets.map((pet) => (
        <Pet key={pet.id} pet={pet} />
      ))}
    </div>
  );
}

export default PetList;
