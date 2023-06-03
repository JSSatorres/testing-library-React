import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';
describe('login component',()=>{

  test('should render the login form', () => {
    render(
      <MemoryRouter>
      <Login />
      </MemoryRouter>
    );
  
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });

  test('should update the dataForm state when typing in the input fields', async () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');

    await userEvent.type(usernameInput, 'john.doe');
    await userEvent.type(passwordInput, 'password123');

    await waitFor(()=>{
      expect(passwordInput.value).toBe('password123');
      
    })
    await waitFor(()=>{
      expect(usernameInput.value).toBe('john.doe');      
    })
  
    
  });

  test('should log the dataForm state when clicking the "Log In" button', async () => {
    const consoleSpy = jest.spyOn(console, 'log');
    
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByText('Log In');
    
    await userEvent.type(usernameInput, 'john.doe');
    await userEvent.type(passwordInput, 'password123');
    await userEvent.click(loginButton);
    
    
    expect(consoleSpy).toHaveBeenCalledWith('dataForm:', { userName: 'john.doe', password: 'password123' });
    
    consoleSpy.mockRestore();
  });
})