import { render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CharacterCard from './characterCard'
import { fetchData } from '../../services/fetchCharacter'

jest.mock('../../services/fetchCharacter')

const responseCharacter = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
}


describe('CharacterCard',() => {
  it('Should render the component',() => {
    render(<CharacterCard />)
    const mainContainer = screen.getByTestId('card-container');
    expect(mainContainer).toBeInTheDocument();
  })

  it('Should return character when response is ok', async () => {
    fetchData.mockReturnValueOnce(responseCharacter)    
    const DataResponse = await fetchData()
    expect(DataResponse).toStrictEqual({
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
    });
    expect(fetchData).toHaveBeenCalledTimes(1)
  })

  it('Should return a Error when api is down',async () => {
    fetchData.mockReturnValueOnce(new Error('ups'))    
    const DataResponse = await fetchData()
    expect(DataResponse).toBeInstanceOf(Error)
  })
})
