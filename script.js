'use strict';

let personalMovieDB = {
    count: 0,
    "movies": {

    },
    actors: {

    },
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ) {
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB["count"] < 10 && personalMovieDB["count"] > 0 ) {
            alert("Вы посмотрели довольно мало фильмов");
        } else if (personalMovieDB["count"] >= 10 && personalMovieDB["count"] < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB["count"] >= 30) {
            alert("Вы киноман");
        } else alert("Ошибка");
    },
    showMyDB: function () {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    writeYourGenres: function () {
        for (let i = 0; i <= 2; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1} ?`);
            if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == "") {
                alert("Ошибка");
                i--;
            }
        }

        personalMovieDB.genres.forEach(function (item,i) {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        })
    }
};

