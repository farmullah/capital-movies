import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./containers/Login";
import Discover from "./containers/Discover";
import PopularMovies from "./containers/PopularMovies";
import LatestMovies from "./containers/LatestMovies";
import FavouriteMovies from "./containers/FavouriteMovies";
import { MoviesContextProvider } from "./context/MoviesContext";
import PageNotFound from "./containers/PageNotFound";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <MoviesContextProvider>
        <Routes>
          <Route path="/" exact element={<Navigate to="/discover" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/discover" element={<Discover />}>
            <Route index path="popular" element={<PopularMovies />} />
            <Route path="latest" element={<LatestMovies />} />
            {user && <Route path="favourites" element={<FavouriteMovies />} />}
            <Route path="*" element={<PageNotFound />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
  );
}

export default App;
