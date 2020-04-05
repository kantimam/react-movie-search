const KEY=process.env.REACT_APP_API_KEY;
const API_BASE=process.env.REACT_APP_API_BASE;

const SEARCH_URL=(query)=>`${API_BASE}search/movie?api_key=${KEY}&query=${query}`
const GET_MOVIE_URL=(movieId)=>`${API_BASE}movie/${movieId}?api_key=${KEY}`

export const apiSearch=(query)=>fetch(SEARCH_URL(query)).then(response=>response.json());

export const apiGetMovie=(movieId)=>fetch(GET_MOVIE_URL(movieId)).then(response=>response.json())

export const apiGetLatest=(query)=>fetch(SEARCH_URL("PI")).then(response=>response.json());


export const apiGetTrending=(query)=>fetch(SEARCH_URL("inception")).then(response=>response.json());
