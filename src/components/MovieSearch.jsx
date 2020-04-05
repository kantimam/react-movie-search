import React, { Component } from 'react'
import queryString from 'query-string';
import MovieList from './MovieList'
import { apiSearch } from '../api/api';


export default class MovieSearch extends Component {
    latestPage = 1;
    lastPage = 1;
    query = "";
    state = {
        movieList: [],
        loading: false
    }

    searchMovie = () => {
        const query = queryString.parse(this.props.location.search);
        if (!query.q) return
        this.query = query.q;
        this.setState({ loading: true })
        apiSearch(this.query)
            .then(json => {
                this.setState({ loading: false, movieList: json.results })
                this.latestPage = json.page || 1;
                this.lastPage = json.total_pages || 1;
            })
            .catch(e => {
                console.log(e);
                this.setState({ loading: false })
            })
    }

    componentDidMount() {
        this.searchMovie();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            console.log("up");
            this.searchMovie();

        }
    }

    getMoreMovies = () => {
        apiSearch(this.query, this.latestPage + 1)
            .then(json => {
                json.results && this.setState({ loading: false, movieList: [...this.state.movieList, ...json.results] })
                this.latestPage=json.page || 1;
                this.lastPage=json.total_pages || 1;
            })
            .catch(e => {
                console.log(e);
                this.setState({ loading: false })
            })
    }

    render() {
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
