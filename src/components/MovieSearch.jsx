import React, { Component } from 'react'
import queryString from 'query-string';
import MovieList from './MovieList'
import { apiSearch } from '../api/api';
import MovieFeedShell from './MovieFeedShell';


export default class MovieSearch extends Component {

    query = "";
    state = {
        movieList: [],
        loading: false,
        latestPage: 1,
        totalPages: 1
    }

    searchMovie = () => {
        const query = queryString.parse(this.props.location.search);
        if (!query.q) return
        this.query = query.q;
        this.setState({ loading: true })
        apiSearch(this.query)
            .then(json => {
                this.setState({
                    loading: false, movieList: json.results,
                    latestPage: json.page || 1,
                    totalPages: json.total_pages || 1
                })

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
        apiSearch(this.query, this.state.latestPage + 1)
            .then(json => {
                json.results && this.setState({
                    loading: false, movieList: [...this.state.movieList, ...json.results],
                    latestPage: json.page || 1,
                    totalPages: json.total_pages || 1
                })

            })
            .catch(e => {
                console.log(e);
                this.setState({ loading: false })
            })
    }

    render() {
        if (this.state.loading) return <MovieFeedShell/>
        if (this.state.movieList.length) return (
            <>
                <MovieList list={this.state.movieList} />
                {this.state.latestPage < this.state.totalPages ?
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
