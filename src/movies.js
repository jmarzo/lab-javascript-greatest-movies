// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = [];

  directors = moviesArray.map(function (movie) {
    return movie.director;
  });

  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let spielbergDramaMovies = [];

  spielbergDramaMovies = moviesArray.filter(function (movie) {
    return (
      movie.director == "Steven Spielberg" &&
      movie.genre.indexOf("Drama") !== -1
    );
  });

  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const scoreSum = moviesArray.reduce((sum, movie) => {
    if (movie.score) {
      return sum + movie.score;
    }
    return sum;
  }, 0);

  let averageScore = scoreSum / moviesArray.length;
  averageScore = Math.round((averageScore + Number.EPSILON) * 100) / 100;

  return averageScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const dramas = moviesArray.filter((movie) => {
    return movie.genre.indexOf("Drama") !== -1;
  });

  if (dramas.length === 0) {
    return 0;
  }

  const dramaScoreSum = dramas.reduce((sum, movie) => {
    return sum + movie.score;
  }, 0);

  let averageDramaScore = dramaScoreSum / dramas.length;
  averageDramaScore =
    Math.round((averageDramaScore + Number.EPSILON) * 100) / 100;

  return averageDramaScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedArray = moviesArray.slice().sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else if (a.title > b.title) {
      // in this case a.year === b.year so we need to compare the titles
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });

  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

/*ascending = A --> Z  0-->max*/
function orderAlphabetically(moviesArray) {
  const sortedArray = moviesArray.slice().sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });

  // we want only the first 20
  const top20 = sortedArray.slice(0, 20);
  const top20Titles = top20.map(function (movie) {
    //only titles
    return movie.title;
  });

  return top20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
