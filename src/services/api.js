import axios from "axios";

//* Strapi Url
const apiUrl = "http://localhost:1337/api";

export const apiCall = axios.create({
  baseURL: apiUrl,
});

apiCall.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {
      console.log(error);
      console.log("Greska!");
    } else {
      return Promise.reject(error);
    }
  }
);

//* Movie url (TMDB API)
const apiMovieUrl = "https://api.themoviedb.org/3";

export const apiCallMovie = axios.create({
  baseURL: apiMovieUrl,
});

apiCallMovie.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (401 === error.response.status) {
      console.log(error);
      console.log("Greska!");
    } else {
      return Promise.reject(error);
    }
  }
);
