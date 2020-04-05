import React, { Component } from 'react'
import queryString from 'query-string';
import MovieList from './MovieList'
import { apiGetLatest, apiGetTrending } from '../api/api';


export default class MovieFeed extends Component {
    state = {
        movieList: [],
        loading: false
    }

    searchMovie = () => {
        /* function to get movies needs to be provided */
        this.props.apiSearch()
            .then(json => {
                this.setState({ loading: false, movieList: json.results })
            })
            .catch(e => {
                console.log(e);
                this.setState({ loading: false })
            })
    }

    componentDidMount() {
        this.searchMovie();
    }


    render() {
        if (this.state.loading) return <div>LOADING</div>
        if (this.state.movieList.length) return (
            <MovieList list={this.state.movieList} />
        )
        return <div>NOTHING FOUND</div>
    }
}


export const LatestMovieFeed=(props)=><MovieFeed apiSearch={apiGetLatest} {...props}/>

export const TrendingMovieFeed=(props)=><MovieFeed apiSearch={apiGetTrending} {...props}/>