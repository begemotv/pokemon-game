import {useHistory} from 'react-router-dom';

import PokemonCard from '../../components/pokemonCard';
import {POKEMONS} from '../../mocks/pokemons';

const GamePage = () => {
  const history = useHistory();

  const handleHomeButtonClick = () => {
      history.push('/');
  };

  const pokemonsFive = POKEMONS.slice(0, 5);

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