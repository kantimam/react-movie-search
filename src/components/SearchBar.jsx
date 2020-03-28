import React, { useState, useEffect, useRef, memo } from 'react'
import { apiSearch } from '../api/api';
import { withRouter } from 'react-router-dom';


const SearchBar = ({ list, setList, history }) => {
    const [val, setVal] = useState('');
    const [autoOpen, setOpen]=useState(false);
    const bounceTimeOut=useRef();
    useEffect(() => {
        bounceTimeOut.current=0;
        /* if page gets reloaded or someone just uses the url fill the input value */
        const url=new URL(window.location.toString());
        const query=url.searchParams.get("q");
        if(query){
            setVal(query);
            /* if  */
            searchMovies(query, true);
        }
    }, [])

    const searchMovies = (query, displayList = false) => {
        const encodedQuery = encodeURIComponent(query);
        apiSearch(encodedQuery)
            .then(json => {
                setList(json.results);
                /* only switch route and display MovieList if displayList is set */
                if (displayList) {
                    setOpen(false)
                    return history.push(`/search?q=${encodedQuery}`);
                }
                history.push(`/`);
                setOpen(true);
            })
            .catch(e => alert(e));
    }

    const onChange = (event) => {
        const value = event.target.value;
        setVal(value);
        clearTimeout(bounceTimeOut.current);
        //bounceTimeOut=setTimeout(()=>searchMovies(value), 800);

        if (value.length > 2) {
            bounceTimeOut.current=setTimeout(()=>searchMovies(value), 800);
            /* do a partial request to get data for autocomplete */
            //searchMovies(value);
        }
    }

    const enterAutoComplete=(str)=>{
        setVal(str);
        searchMovies(str, true);
    }

    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (val) searchMovies(val, true);
                }}
                className="searchForm"
            >
                <div className="inputWrapper">
                    <input placeholder="enter movie title" className="searchInput" value={val} onChange={onChange} type="text" />
                    {autoOpen &&
                        <div className="searchAutoComplete">
                            {list.length && list.map(item =>
                                <p key={"auto_"+item.id} onClick={() => enterAutoComplete(item.title)}>{item.title}</p>
                            )}
                        </div>
                    }
                </div>
                <input className="searchSubmit" type="submit" value="SEARCH" />
            </form>
        </div>
    )
}

export default withRouter(memo(SearchBar))
