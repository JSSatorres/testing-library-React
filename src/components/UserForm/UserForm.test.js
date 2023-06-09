/* eslint-disable testing-library/no-wait-for-side-effects */
/* eslint-disable testing-library/no-debugging-utils */
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserForm from './UserForm'

describe ('UserForm component',() => {
  beforeEach(() => {
  
  });
  it('should render the componet',() => {
    render(<UserForm />)
    const title = screen.getByText(/correo electrónic/i)
 
    expect(title).toBeInTheDocument()

  })
  it('should render hidden div',async () => {
    render(  <UserForm /> )
  
    const button = screen.getByRole('button',{ name: /ver div/i })

    await userEvent.click(button)
   
    const hiddenDiv = await screen.findByText(/holi/i)

 
    expect(hiddenDiv).toBeInTheDocument()

    
  })
  it('should hidden the div when click button twice',async () => {
    render(<UserForm />)
  
    const button = screen.getByRole('button',{ name: /ver div/i })

    await userEvent.click(button)
   
    const hiddenDiv = await screen.findByText(/holi/i)
    expect(hiddenDiv).toBeInTheDocument()

    await  userEvent.click(button)

    const hiddenDiv2 = screen.queryByText(/holi/i)  
    expect(hiddenDiv2).not.toBeInTheDocument()
  })

  it('should type input and call handleInputChange',async () => {
    render(<UserForm />)
  
    const inputName = screen.getByLabelText('Nombre:');
    await userEvent.type(inputName,"pepe")
  
    expect(inputName.value).toBe('pepe');
  })

  it('should submit the form when the field are completed',async () => {
    render(<UserForm />)
  
    const button = screen.getByRole('button',{ name: /ver div/i })

    await userEvent.click(button)  
    const hiddenDiv = await screen.findByText(/holi/i)
    expect(hiddenDiv).toBeInTheDocument()

    await  userEvent.click(button)   
    const hiddenDiv2 = screen.queryByText(/holi/i)    
    expect(hiddenDiv2).not.toBeInTheDocument()

  })
})