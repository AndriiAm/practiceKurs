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
console.log(personalMovieDB.count);

if (personalMovieDB["count"] < 10 && personalMovieDB["count"] > 0 ) {
    alert("Вы посмотрели довольно мало фильмов");
} else if (personalMovieDB["count"] >= 10 && personalMovieDB["count"] < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB["count"] >= 30) {
    alert("Вы киноман");
} else alert("Ошибка");