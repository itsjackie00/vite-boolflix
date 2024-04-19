import {reactive} from 'vue';

export const store = reactive ({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie:'search/movie',
        tv: 'search/tv',
        trending: 'trending/all/day?language=en-US',
        popular: 'movie/popular?language=en-US'
        
    },
    options: {
        params: {
            api_key: 'bbb1041a54aa10011524a120962b32a1',
            query: 'a',
            
        }
    },
    imageUrl: 'https://image.tmdb.org/t/p/original',
    movies: [],
    tv: [],
    trending: [],
    popular: [],
});