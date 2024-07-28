import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPetById } from '../src/services/api';

function PetDetails() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPet = async () => {
      try {
        const petData = await fetchPetById(id);
        setPet(petData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPet();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        Error:
        {error}
      </p>
    );
  }
  if (!pet) return <p>No pet found.</p>;

  return (
    <div className="pet-details">
      <h2>{pet.name}</h2>
      <p>{pet.description}</p>
      <img src={pet.image} alt={pet.name} />
    </div>
  );
}

export default PetDetails;
