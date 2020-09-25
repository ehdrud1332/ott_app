import axios from 'axios';

const TMDB_KEY = "c1d76ca84cd92ecf70d3ef7766e55d7c"

const makeRequest = (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY
        }
    });

const getAnyThing = async(path, params = {}) => {
    try {
        const {
            data: {results}
        } = await makeRequest(path, params)
    } catch (e) {
        return [null, e];
    }
};

export const movieApi = {
    nowPlaying: () => getAnyThing("/movie/now_playing"),
    popular: () => getAnything("/movie/popular"),
    upcoming: () => getAnything("/movie/upcoming")
}
