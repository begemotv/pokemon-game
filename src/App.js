import {Route, Switch, useRouteMatch, Redirect} from 'react-router-dom';
import cn from 'classnames';

import HomePage from './routes/home';
import GamePage from './routes/game';
import AboutPage from './routes/about';
import ContactsPage from './routes/contacts';
import NotFoundPage from './routes/notFound';
import MenuHeader from './components/menuHeader';
import Footer from './components/footer';
import {POKEMONS} from './mocks/pokemons';

import s from './style.module.css'

const App = () => {
  const match = useRouteMatch('/');

  return (
      <Switch>
        <Route path='/404'>
          <NotFoundPage />
        </Route>
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact} />
            <div className={cn(s.wrap, {
              [s.isHomePage]: match.isExact
            })}>
              <Switch>
                <Route path='/' exact >
                  <HomePage />
                </Route>
                <Route path='/game' >
                  <GamePage pokemonsArr={POKEMONS} />
                </Route>
                <Route path='/about' >
                  <AboutPage />
                </Route>
                <Route path='/contacts' >
                  <ContactsPage />
                </Route>
                <Route render={() => {
                  <Redirect to='/404' />
                }}
                />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
  )
};

export default App;
