import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import MovieView from './components/MovieView';
import './styles/app.css';
import MovieSearch from './components/MovieSearch';
import {TopMovieFeed, PopularMovieFeed} from './components/MovieFeed';
import { Nav } from './components/Nav';



export default class App extends Component {
  state = {
    darkMode: false,

  }

  toggleDark=()=>{
    this.setState({darkMode: !this.state.darkMode})
  }

  render() {
    return (
      <div className={`App ${this.state.darkMode ? 'darkMode' : 'light'}`}>
        <Nav darkMode={this.state.darkMode} toggleDark={this.toggleDark} />
        <main>
          <Switch>
            <Route path="/top/:page?" component={TopMovieFeed} />
            <Route path="/search" component={MovieSearch} />
            <Route path="/movie/:id" component={MovieView} />
            <Route path="/popular/:page?" component={PopularMovieFeed}/>
            <Route path="/:page?" component={PopularMovieFeed}/>
          </Switch>
        </main>
      </div>
    )
  }
}
