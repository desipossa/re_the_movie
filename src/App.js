import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form, Link, Route, Routes, useParams, useSearchParams } from 'react-router-dom';
import MovieList from './List';
import { instance, category } from './api'


const App = () => {

    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [genres, setGenres] = useState(36);
    const [genrelist, setGenrelist] = useState([]);


    const [searchInput, setSearchInput] = useState('');

    const [search, setSearch] = useState();

    const [list, setlist] = useSearchParams();
    const with_genres = list.get('with_genres');
    const with_pages = list.get('page');
    console.log(with_genres, with_pages)


    const getMovie = async () => {
        const getmovie = await instance.get("/discover/movie?with_genres=" + with_genres + "&page=" + with_pages);
        const getcategory = await instance.get(category.MoviesGenre);
        const movie = getmovie.data.results;
        const list = getcategory.data.genres;
        setMovie(movie);
        setGenrelist(list)

        console.log(getmovie.data.total_pages, genres);
    }

    // [
    //   { "id": 28, "name": "액션" },
    //   { "id": 12, "name": "모험" },
    //   { "id": 16, "name": "애니메이션" },
    //   { "id": 35, "name": "코미디" },
    //   { "id": 80, "name": "범죄" },
    //   { "id": 99, "name": "다큐멘터리" },
    //   { "id": 18, "name": "드라마" },
    //   { "id": 10751, "name": "가족" },
    //   { "id": 14, "name": "판타지" },
    //   { "id": 36, "name": "역사" },
    //   { "id": 27, "name": "공포" },
    //   { "id": 10402, "name": "음악" },
    //   { "id": 9648, "name": "미스터리" },
    //   { "id": 10749, "name": "로맨스" },
    //   { "id": 878, "name": "SF" },
    //   { "id": 10770, "name": "TV 영화" },
    //   { "id": 53, "name": "스릴러" },
    //   { "id": 10752, "name": "전쟁" },
    //   { "id": 37, "name": "서부" }
    // ]

    // https://api.themoviedb.org/3/trending/all/week?api_key=1047e35b5c7314dc215529665aefaf2c&page=
    // https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=1047e35b5c7314dc215529665aefaf2c&page=1
    // https://api.themoviedb.org/3/search/keyword?query=2002&api_key=1047e35b5c7314dc215529665aefaf2c&page=1
    // https://api.themoviedb.org/3/search/multi?query=2002&api_key=1047e35b5c7314dc215529665aefaf2c&page=1


    return (
        <div className='Wrap'>
            {
                movie ? <div>

                    <header>
                        <Link to="/">HOME</Link>
                    </header>

                    <section>
                        <Routes>

                            <Route path='/' element={
                                <MovieList
                                    genres={genres}
                                    setGenres={setGenres}
                                    movie={movie}
                                    setMovie={setMovie}
                                    genrelist={genrelist}
                                    setGenrelist={setGenrelist}
                                    page={page}
                                    setPage={setPage}
                                    getMovie={getMovie}
                                />
                            } />
                            <Route path='/discover/movie' element={
                                <MovieList
                                    genres={genres}
                                    setGenres={setGenres}
                                    movie={movie}
                                    setMovie={setMovie}
                                    genrelist={genrelist}
                                    setGenrelist={setGenrelist}
                                    page={page}
                                    setPage={setPage}
                                    with_genres={with_genres}
                                    with_pages={with_pages}
                                    list={list}
                                    setlist={setlist}
                                    getMovie={getMovie}
                                />
                            } />
                        </Routes>

                    </section>

                </div>
                    : <div>Loading ...</div>
            }

        </div>
    )
}

export default App