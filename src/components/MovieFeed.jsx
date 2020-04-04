import React, { Component } from 'react'
import queryString from 'query-string';
import MovieList from './MovieList'
import { apiSearch } from '../api/api';


export default class MovieSearch extends Component {
    state = {
        movieList: [],
        loading: false
    }

    searchMovie = () => {
        const query = queryString.parse(this.props.location.search);
        if (!query.q) return
        this.setState({ loading: true })
        apiSearch(query.q)
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
