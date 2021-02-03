import {useState} from 'react';

import HomePage from './routes/home';
import GamePage from './routes/game';

const App = () => {
  const [page, setPage] = useState('app');

  const handlePageChange = (page) => {
    setPage(page);
  }

  switch(page) {
    case 'app':
      return <HomePage onPageChange={handlePageChange}/>
    case 'game':
      return <GamePage onPageChange={handlePageChange}/>
    default:
      return <HomePage />
  }
};

export default App;
