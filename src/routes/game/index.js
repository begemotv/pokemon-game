import {useState} from 'react';
import {useHistory} from 'react-router-dom';

import PokemonCard from '../../components/pokemonCard';

const GamePage = ({pokemonsArr}) => {
  const [pokemons, setPokemons] = useState(pokemonsArr);
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
      setIsActive(!isActive);
  };

  const history = useHistory();

  const handleHomeButtonClick = () => {
      history.push('/');
  };

  const pokemonsFive = pokemons.slice(0, 5);

    return (
      <div>
          <p>This is gamepage!</p>
          <div className='flex'>
            {
                pokemonsFive.map((item) => 
                <PokemonCard 
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    type={item.type}
                    values={item.values} 
                    isActive={isActive}
                    onCardClick={handleCardClick}
                />)
            }
            </div>
          <button 
            onClick={() => handleHomeButtonClick()}
            type='button'
          >Home Page</button>
      </div>
    );
  };
  
  export default GamePage;