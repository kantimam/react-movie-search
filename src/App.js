import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieView from './components/MovieView';
import './styles/app.css';
import MovieSearch from './components/MovieSearch';
import { Nav } from './components/Nav';


function App() {
  const [list, setList] = useState([]);
  const [darkMode, setMode] = useState(false);



  return (
    <div className={`App ${darkMode? 'darkMode': 'light'}`}>
      {console.log(darkMode)}
      <Nav toggleDark={() => setMode(!darkMode)} />
      <main>
        <Switch>
          <Route path="/search" component={MovieSearch} />
          <Route path="/search" component={MovieSearch} />
          <Route path="/search" component={MovieSearch} />
          <Route path="/movie/:id" component={MovieView} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
