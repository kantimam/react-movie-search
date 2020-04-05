const KEY=process.env.REACT_APP_API_KEY;
const API_BASE=process.env.REACT_APP_API_BASE;

const SEARCH_URL=(query, page)=>`${API_BASE}search/movie?api_key=${KEY}&query=${query}&page=${page}`
const GET_MOVIE_URL=(movieId)=>`${API_BASE}movie/${movieId}?api_key=${KEY}`

export const apiSearch=(query, page=1)=>fetch(SEARCH_URL(query, page)).then(response=>response.json());

export const apiGetMovie=(movieId)=>fetch(GET_MOVIE_URL(movieId)).then(response=>response.json())

export const apiGetTop=(page=1)=>fetch(`${API_BASE}movie/top_rated?api_key=${KEY}&page=${page}`).then(response=>response.json());


export const apiGetPopular=(page=1)=>fetch(`${API_BASE}movie/popular?api_key=${KEY}&page=${page}`).then(response=>response.json());
