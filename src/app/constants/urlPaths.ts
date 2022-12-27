import { environment } from "../../environments/environment";

const BASE_URL = environment.apiURL;
const API_KEY = environment.apiKey;
export const getMovieById = (id: number) => `${BASE_URL}/movie${id}?api_key=${API_KEY}`;
export const getPopularMovies = (page: number = 1) => `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`;
export const latestMovie = () => `${BASE_URL}/movie/latest?api_key=${API_KEY}&language=en-US`;
export const searchMovie = (phrase: string) => `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${phrase}`;
export const getPopularPeople = (page: number = 1) => `${BASE_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=${page}`;

export const coverPath = (path: string) => `https://image.tmdb.org/t/p/w500/${path}`;
