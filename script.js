'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    "movies": {

    },
    actors: {

    },
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i <= 1; i++) {
        let a = prompt("Какой фильм вы посмотрели последним?", ""),
            b = prompt("На сколько оцените его?","");

        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            alert("Ошибка");
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB["count"] < 10 && personalMovieDB["count"] > 0 ) {
        alert("Вы посмотрели довольно мало фильмов");
    } else if (personalMovieDB["count"] >= 10 && personalMovieDB["count"] < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB["count"] >= 30) {
        alert("Вы киноман");
    } else alert("Ошибка");
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i <= 2; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1} ?`);
    }
}

writeYourGenres();

