import React, { Component } from 'react'
import MovieList from './MovieList'
import { apiGetTop, apiGetPopular } from '../api/api';
import MovieFeedShell from './MovieFeedShell';


export default class MovieFeed extends Component {

    state = {
        movieList: [],
        loading: false,
        latestPage: 1,
        totalPages: 1
    }

    searchMovies = () => {
        /* function to get movies needs to be provided */
        const page = this.props.match.params.page && !isNaN(this.props.match.params.page) ? this.props.match.params.page : 1;
        
        this.setState({loading: true})

        this.props.apiSearch(page)
            .then(json => {
                json.results && this.setState({
                    loading: false, movieList: json.results,
                    latestPage: json.page || 1,
                    totalPages: json.total_pages || 1
                })
                this.latestPage = json.page || 1;
                this.lastPage = json.total_pages || 1;
            })
            .catch(e => {
                console.log(e);
                this.setState({ loading: false })
            })
    }

    getMoreMovies = () => {
        this.props.apiSearch(this.state.latestPage + 1)
            .then(json => {
                json.results && this.setState(
                    {
                        loading: false,
                        movieList: [...this.state.movieList, ...json.results],
                        latestPage: json.page || 1,
                        totalPages: json.total_pages || 1
                    }
                )
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

    componentDidUpdate(prevProps){
        if(prevProps.match.params.page!==this.props.match.params.page){
            this.searchMovies();
        }
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


export const TopMovieFeed = (props) => <MovieFeed apiSearch={apiGetTop} {...props} />

export const PopularMovieFeed = (props) => <MovieFeed apiSearch={apiGetPopular} {...props} />