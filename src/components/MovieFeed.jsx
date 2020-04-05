import React, { Component } from 'react'
import queryString from 'query-string';
import MovieList from './MovieList'
import { apiGetTop, apiGetPopular } from '../api/api';


export default class MovieFeed extends Component {
    latestPage = 1;
    lastPage = 1;
    state = {
        movieList: [],
        loading: false
    }

    searchMovies = () => {
        /* function to get movies needs to be provided */
        const page = this.props.match.params.page && !isNaN(this.props.match.params.page) ? this.props.match.params.page : 1;
        this.props.apiSearch(page)
            .then(json => {
                json.results && this.setState({ loading: false, movieList: json.results })
                this.latestPage = json.page || 1;
                this.lastPage = json.total_pages || 1;
            })
            .catch(e => {
                console.log(e);
                this.setState({ loading: false })
            })
    }

    getMoreMovies = () => {
        this.props.apiSearch(this.latestPage + 1)
            .then(json => {
                json.results && this.setState({ loading: false, movieList: [...this.state.movieList, ...json.results] })
                this.latestPage = json.page || 1;
                this.lastPage = json.total_pages || 1;
            })
            .catch(e => {
                console.log(e);
                this.setState({ loading: false })
            })
    }

    componentDidMount() {
        this.searchMovies();
    }


    render() {
        console.log(this.props);

        if (this.state.loading) return <div>LOADING</div>
        if (this.state.movieList.length) return (
            <>
                <MovieList list={this.state.movieList} />
                {this.latestPage < this.lastPage ?
                    <button onClick={this.getMoreMovies} className="loadMore">
                        more
                    </button> :
                    <div className="noMoreMovies">
                        end
                    </div>
                }
            </>
        )
        return <div>NOTHING FOUND</div>
    }
}


export const TopMovieFeed = (props) => <MovieFeed apiSearch={apiGetTop} {...props} />

export const PopularMovieFeed = (props) => <MovieFeed apiSearch={apiGetPopular} {...props} />