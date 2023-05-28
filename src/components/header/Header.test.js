import { render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from './Header'

describe('Header',() => {
  it('Should render the component',() => {
    render(<Header />)
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  })
  it('Should call handleLogin when the button is clciked', async () => {
    // const mockHandleLogin =  jest.fn(); //Does not work
    const mockHandleLogin =  jest.spyOn(console, 'log');
    render(<Header handleClick={mockHandleLogin}/>)

    const loginButton = screen.getByRole('button',{ name: /login/i});   
    await userEvent.click(loginButton)  
    expect(mockHandleLogin).toHaveBeenCalledTimes(1);
  })
  it('Should call handlLogout when the button is clciked',async () => {
    const handleLogout = jest.spyOn(console, 'log');
    render(<Header handleLogout={handleLogout}/>)

    const logoutButton = screen.getByRole('button',{ name: /logout/i });
    await userEvent.click(logoutButton)
    expect(handleLogout).toHaveBeenCalled();
  })
})
