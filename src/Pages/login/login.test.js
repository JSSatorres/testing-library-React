import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login', () => {
  it('should render the login form', () => {
    render(<Login />);
  
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Log In')).toBeInTheDocument();
  });
  
  it('should call the handleLogin function on button click', () => {
    const handleLoginMock = jest.fn();
    render(<Login handleLogin={handleLoginMock} />);
  
    userEvent.type(screen.getByLabelText('Username'), 'testuser');
    userEvent.type(screen.getByLabelText('Password'), 'testpassword');
    userEvent.click(screen.getByText('Log In'));
  
    expect(handleLoginMock).toHaveBeenCalledTimes(1);
    expect(handleLoginMock).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'testpassword',
    });
  });
  
  it('should navigate to signup page when "Sign up" link is clicked', () => {
    render(<Login />);
  
    userEvent.click(screen.getByText('Sign up'));
  
    expect(window.location.pathname).toBe('/signup');
  });
});