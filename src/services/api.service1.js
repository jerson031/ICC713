import axios from 'axios'; 
 
// apiKey necesaria para realizar consultas en TheMovieDB 
const apiKey = '9fb98527ed4b2f39026a8ba4ff0e1683'; 
 
// URL base de la API 
const baseURL = `https://api.themoviedb.org/3/movie/`; 
 
class ApiService { 
    constructor() { 
        this.resource = axios.create({ 
            baseURL, 
        }); 
        this.apiKey = `api_key=${apiKey}&language=en-US`; 
    } 
     
    // Retorna las películas populares 
    getPopular(currentPage) { 
        return this.resource.get(`popular?${this.apiKey}&page=${currentPage}`); 
    } 
 
    // Retorna las películas mejores valoradas 
    getTopRated(currentPage) { 
        return this.resource.get(`top_rated?${this.apiKey}&page=${currentPage}`); 
    } 
 

    // Retorna una película en específico (según su id) 
    getMovie(movieId) { 
        return this.resource.get(`${movieId}?${this.apiKey}`);
    } 
} 
 
export default new ApiService(); 