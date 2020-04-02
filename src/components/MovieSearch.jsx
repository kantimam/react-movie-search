import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MovieList from './MovieList'

export default class MovieSearch extends Component {
    static propTypes = {
        prop: PropTypes
    }
    state={
        movieList: []
    }

    componentDidMount(){

    }

    render() {
        console.log("render");
        
        if(this.state.movieList.length) return (
            <MovieList list={this.state.movieList}/>
        )
        return <div>LOADING</div>
    }
}
