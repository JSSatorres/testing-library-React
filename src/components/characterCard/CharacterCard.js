import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../spinner';
import { fetchData } from '../../services/fetchCharacter';

const CharacterCard = () => {
  const [loading, setLoading] = useState(true)
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
    const getData = async () => {     
      const dataCharacter = await fetchData(id)
      setCharacter(dataCharacter)   
      console.log(character); 
    }
    getData()
    setLoading(false)
  }, []);


  return (
    <div className="bg-white rounded-lg shadow-md p-10 mb-20" data-testid="card-container">
    {loading 
      ? <Spinner/>
      : <>
          <h2 className="text-xl font-bold mb-2">{character.name}
          </h2>
          <img src={character.image} alt={character.name} className="w-full mb-4" />
          <div>
            <p>
              <span className="font-bold">Status:</span> {character.status}
            </p>
            <p>
              <span className="font-bold">Species:</span> {character.species}
            </p>
            <p>
              <span className="font-bold">Gender:</span> {character.gender}
            </p>
          </div>
      </>
    }
    </div>
  );
};

export default CharacterCard