import React, {useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieView from './components/MovieView';
import './App.css';


function App() {
  const [list, setList]=useState([])

  
  return (
    <div className="App">
      <h1 className="appHeader textCenter">scuffed movie search</h1>
      <SearchBar list={list} setList={(data)=>setList(data)}/>
      <Switch>
        <Route path="/search" render={(props)=><MovieList list={list} {...props}/>}/>
        <Route path="/movie/:id" component={MovieView}/>
      </Switch>
    </div>
  );
}

export default App;
