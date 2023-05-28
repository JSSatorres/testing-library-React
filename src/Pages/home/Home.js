import React, { useEffect, useState } from 'react'
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error));
  }, []);

  return (
      <div className='p-20'>
        <h1 className="text-center text-4xl font-bold mb-8 text-gray-900">Rick and Morty character</h1>

        <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
              Species
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
              Gender
            </th>
            <th className="px-6 py-3 bg-gray-100 text-left text-sm font-medium text-gray-600 uppercase tracking-wider">
              edit
            </th>
          </tr>
        </thead>
        <tbody>
          {characters.map(character => (
            <tr key={character.id} className="border-t border-gray-300">
              <td className="px-6 py-4">{character.name}</td>
              <td className="px-6 py-4">{character.status}</td>
              <td className="px-6 py-4">{character.species}</td>
              <td className="px-6 py-4">{character.gender}</td>
              <td className='px-6 py-4'>
                <Link to={`/characters/${character.name}`}>
                  <FaEye />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>  
      </table>
    </div> 
  )
}

export default Home