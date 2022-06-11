export const errorMessages = {
  password: "Enter the password",
  invalidPasswordLength: "Password should contains 8 to 20 characters.",
  invalidPassword:
    "Password should contains atleast 1 uppercase, 1 lowercase character, 1 number and special chars out of ! @ # $ ^ & * ~",
  invalidPasswordWhiteSpace: "Password should not contain white space",
  name: "Enter the name",
  invalidName: "Name should contains a-z, A-Z along with space",
  username: "Enter the username",
  invalidusername: "username should contains a-z, A-Z along with space",
  email: "Enter the email address",
  invalidEmail: "Invalid email",
};

/**
 * TMDB (The movie database)
 */
const API_URL = process.env.REACT_APP_TMDB_API_KEY;
export const TMDB_IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
export const BASE_URL = "https://api.themoviedb.org/3";
export const CREATE_REQUEST_TOKEN_URL = `${BASE_URL}/authentication/token/new?api_key=${API_URL}`;
export const DISCOVER_MOVIE_URL = `${BASE_URL}/discover/movie?api_key=${API_URL}`;
export const FAVOURITE_MOVIE_URL = `${BASE_URL}/movie/top_rated?api_key=${API_URL}`;
export const POPULAR_MOVIE_URL = `${BASE_URL}/movie/popular?api_key=${API_URL}`;
export const LATEST_MOVIE_URL = `${BASE_URL}/movie/latest?api_key=${API_URL}&language=en-US`;
export const AUTHENTICATE_URL = `${BASE_URL}/authentication/token/validate_with_login?api_key=${API_URL}`;
