class Movie { 
    constructor(movie = {}) { 
        this.id = movie.id || 0; 
        this.original_language = movie.original_language || 0; 
        this.original_title = movie.original_title || 0; 
        this.adult = movie.adult || null; 
        this.backdrop_path = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` || null; 
        this.poster_path = `https://image.tmdb.org/t/p/w500/${movie.poster_path}` || null; 
        this.genres = movie.genres || []; 
        this.overview = movie.overview || null; 
        this.popularity = movie.popularity || null; 
        this.release_date = movie.release_date || null; 
        this.title = movie.title || null; 
        this.video = movie.video || null; 
        this.vote_average = movie.vote_average || null; 
        this.vote_count = movie.vote_count || null; 
    } 
} 
 
export default Movie; 