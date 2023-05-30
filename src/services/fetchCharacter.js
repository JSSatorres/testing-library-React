export const fetchData = async (id) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api//character/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error al obtener los datos');
  }
};