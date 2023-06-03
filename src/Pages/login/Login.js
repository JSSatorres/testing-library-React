import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const initailFormValue ={ userName:'',password:'' }
  const [dataForm, setDataForm] = useState(initailFormValue);
  

  const handleChange = (event) => {
    setDataForm({...dataForm,[event.target.name]:event.target.value});
  };
  
  const handleLogin = (event) => {
    event.preventDefault();
    console.log('dataForm:', dataForm);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h1 className="text-center text-4xl font-bold mb-8 text-gray-900">Login</h1>

        <div className="mb-4">
          <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={dataForm.userName}
            name='userName'
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-900"
          />
        </div>

        <button
          type="button"
          onClick={handleLogin}
          className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Log In
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-indigo-500 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;