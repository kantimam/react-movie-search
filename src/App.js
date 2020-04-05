import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import MovieView from './components/MovieView';
import './styles/app.css';
import MovieSearch from './components/MovieSearch';
import {LatestMovieFeed, TrendingMovieFeed} from './components/MovieFeed';
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
            <Route path="/latest" component={LatestMovieFeed} />
            <Route path="/trending" component={TrendingMovieFeed}/>
            <Route path="/search" component={MovieSearch} />
            <Route path="/movie/:id" component={MovieView} />
          </Switch>
        </main>
      </div>
    )
  }
}
