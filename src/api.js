import axios from "axios";

const base_url = "https://api.themoviedb.org/3";
const api_key = '1047e35b5c7314dc215529665aefaf2c';

const instance = axios.create({
    baseURL: base_url,
    params: {
        api_key: api_key,
        language: "ko-KR",
    },
});

const category = {
    NowPlaying: "movie/now_playing",
    Netflix: "/discover/tv?with_networks=213",
    Trending: "/trending/all/week",
    Rated: "/movie/top_rated",
    Movies: "/discover/movie",
    MoviesGenre: "/genre/movie/list",
    // MoviesWithGenre: "/discover/movie?with_genres=" + genres + "&page=" + page,
}

export { instance, category }

