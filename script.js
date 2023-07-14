let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    "movies": {

    },
    actors: {

    },
    genres: [],
    privat: false
};

let watchedFilms = prompt("Какой фильм вы посмотрели последним?", ""),
    filmRating = prompt("На сколько оцените его?",""),
    watchedFilms1 = prompt("Какой фильм вы посмотрели последним?", ""),
    filmRating1 = prompt("На сколько оцените его?","");

personalMovieDB.movies[watchedFilms] = filmRating;
personalMovieDB.movies[watchedFilms1] = filmRating1;
console.log(personalMovieDB);