import { fetchData } from './fetchCharacter'

test('fetchData function should return data for a valid id', async () => {
  const mockData = { name: 'Rick', species: 'Human2' };

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData),
  });

  const data = await fetchData(1);

  expect(global.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/1' );
  expect(data).toEqual(mockData);
});

test('fetchData function should throw an error for an invalid id', async () => {
  const mockError = new Error('Error al obtener los datos');

  global.fetch = jest.fn().mockRejectedValue(mockError);

  await expect(fetchData(999)).rejects.toThrow('Error al obtener los datos');
});