import {reactive} from 'vue';

export const store = reactive ({
    apiUrl: 'https://api.themoviedb.org/3/',
    endPoint: {
        movie:'search/movie',
        tv: 'search/tv',
        
    },
    options: {
        params: {
            api_key: 'bbb1041a54aa10011524a120962b32a1',
            query: '',
            
        }
    },
    imageUrl: 'https://image.tmdb.org/t/p/original',
    movies: [],
    tv: [],
});