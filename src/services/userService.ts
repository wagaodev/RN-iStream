import { api } from './api';

const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    // Trate o erro conforme necessário
    console.error(error);
    return null;
  }
};

export { getUsers };
