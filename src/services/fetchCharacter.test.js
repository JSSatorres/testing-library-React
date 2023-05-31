import { fetchData } from './fetchCharacter'

describe('fetchData Service',() => {
  
  // global.fetch = jest.fn(() =>
  //   Promise.resolve({
  //     json: () => Promise.resolve({text: 'pass'}),
  //   })
  // );
  // afterAll(()=>{
  //   fetch.mockClear();
  // })
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve({ text: 'pass' }),
  });
  it('Should return a valid response', async () => {  
    const DataResponse = await fetchData()
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(DataResponse).toEqual({ text: 'pass' });
  })

  // it('Should return a Error when api is down',async () => {
  //   fetchData.mockReturnValueOnce(new Error('ups'))    
  //   const DataResponse = await fetchData()
  //   expect(DataResponse).toBeInstanceOf(Error)
  // })
})
