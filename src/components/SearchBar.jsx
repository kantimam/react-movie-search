import React, { useState, useEffect, useRef } from 'react'
import { apiSearch } from '../api/api';
import { withRouter } from 'react-router-dom';
import AutoSuggestSearch from '@kantimam/react-autosuggest'


const SearchBar = ({ setList, history }) => {
    const [val, setVal] = useState('');
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions]=useState([]);
    const bounceTimeOut = useRef();
    
    useEffect(()=>{
        bounceTimeOut.current = 0;
    },[])

    useEffect(() => {
        searchValueFromUrl();
    }, [history.location.search])

    const searchValueFromUrl=()=>{
        if(history.location.pathname!=="/search") return
        /* if page gets reloaded or someone just uses the url fill the input value */
        const url = new URL(window.location.toString());
        const query = url.searchParams.get("q");
        if (query) {
            setVal(query);
            searchMovies(query, true)
            return query;
        }
    }

    const searchMovies = (query, displayList) => {
        if(!query) return
        const encodedQuery = encodeURIComponent(query);

        setLoading(true);
        apiSearch(encodedQuery)
            .then(json => {
                setSuggestions(json.results);
                if(displayList){
                    setList(json.results);
                } 
                setLoading(false);
            })
            .catch(e => {
                alert(e);
                setLoading(false);
            });
    }

    const onSubmit=()=>{
        /* searchMovies(val, true); */
        history.push(`/search?q=${encodeURIComponent(val)}`);
    }

    const onChange = (value) => {
        if(value===val) return
        setVal(value);
        if (!value) return
        clearTimeout(bounceTimeOut.current);
        bounceTimeOut.current = setTimeout(() => searchMovies(value), 1200);

    }

    console.log(history);
    
    return (
        <AutoSuggestSearch
            suggestions={suggestions}
            value={val}
            onSubmit={onSubmit}
            onChange={onChange}
            /* onSuggestionSelect={setVal} */

            labelExtractor={(item)=>item.title}

            loading={loading}
            loadingIndicator={<div>L</div>}
        />
    )
}

export default withRouter(SearchBar)
