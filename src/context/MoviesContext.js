import { createContext, useState, useEffect, useCallback } from "react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FAVOURITE_MOVIE_URL,
  LATEST_MOVIE_URL,
  POPULAR_MOVIE_URL,
} from "../utils/constants";
import axios from "axios";

const MoviesContext = createContext();

const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  //get the pathname
  const { pathname } = location;
  const categories = pathname.split("/");
  const movieCategory = categories[categories.length - 1];
  
  //user details
  const getUserDetails = useCallback(() => {
    return JSON.parse(localStorage.getItem("user"));
  }, []);

  //authentication
  const login = ({ username, password }) => {
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = localUsers.find((user) => user.username === username);
    if (existingUser) {
      if (existingUser.password === password) {
        localStorage.setItem("user", JSON.stringify(existingUser));
        return { message: "Logged in successfully" };
      }
      return { error: "Password is not correct" };
    }
    return { error: "Account does not exist" };
  };

  const register = ({ name, username, password }) => {
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = localUsers.find((user) => user.username === username);
    if (existingUser) {
      return { error: "Account already exist" };
    }
    localUsers.push({ name, username, password });
    localStorage.setItem("users", JSON.stringify(localUsers));
    return { message: "Account created!" };
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  //movies api
  const fetchMovies = useCallback(async () => {
    try {
      let url = POPULAR_MOVIE_URL;
      if (movieCategory === "latest") url = LATEST_MOVIE_URL; //it returns only object, the movies which is newly created
      if (movieCategory === "favourites") url = FAVOURITE_MOVIE_URL;

      const resp = await axios.get(url);
      const _movies = resp.data?.results || [];
      if (movieCategory === "latest") _movies.push(resp.data);
      setMovies(_movies);
    } catch (error) {
      alert(error);
    }
  }, [movieCategory, getUserDetails]);

  useEffect(() => {
    if (["popular", "latest", "favourites"].includes(movieCategory))
      fetchMovies();
  }, [movieCategory, fetchMovies]);

  return (
    <MoviesContext.Provider
      value={{ movies, getUserDetails, login, register, logout }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesContextProvider, MoviesContext };
