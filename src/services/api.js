import axios from 'axios';

const API_URL = 'http://pets-v2.dev-apis.com';

export const fetchPets = async () => {
  const response = await axios.get(`${API_URL}/pets`);
  return response.data.pets;
};

export const fetchPetById = async (id) => {
  const response = await axios.get(`${API_URL}/pets?id=${id}`);
  return response.data.pets[0];
};

export const fetchBreeds = async (animal) => {
  const response = await axios.get(`${API_URL}/breeds?animal=${animal}`);
  return response.data.breeds;
};

export const searchPets = async (animal, location, breed) => {
  const response = await axios.get(`${API_URL}/pets`, {
    params: { animal, location, breed },
  });
  return response.data.pets;
};
