import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {

  const handleLogout = () =>{
    console.log('click logout');
  }
  
  return (
    <header className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-white"> <Link to="/">Prueba</Link></h1>
        <div>
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">Login</Link>    
          <button 
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
