import React, { useState, useEffect, useContext } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { MoviesContext } from "../context/MoviesContext";
import "../styles/discover.css";

const favTab = {
  name: "Favourite Movies",
  url: "favourites",
};

const defaultTabs = [
  {
    name: "Popular Movies",
    url: "popular",
  },
  {
    name: "Latest Movies",
    url: "latest",
  },
];

const Discover = () => {
  const { getUserDetails, logout } = useContext(MoviesContext);
  const user = getUserDetails();
  const navigate = useNavigate()

  const [tabs, setTabs] = useState(defaultTabs);

  const location = useLocation();
  const { pathname } = location;
  const categories = pathname.split("/");
  const path = categories[categories.length - 1];

  useEffect(() => {
    navigate("/discover/popular")
    if (user) {
      setTabs([...defaultTabs, favTab]);
    }
  }, []);

  
  return (
    <div className="discover">
      <section className="navbar">
        <div>
          <h2>Discover</h2>
        </div>
        <ul className="tabs">
          {tabs.map((tab, i) => (
            <li key={i} className={`${tab.url === path ? "active" : ""}`}>
              <Link to={tab.url}>{tab.name}</Link>
            </li>
          ))}
        </ul>
        <div>
          {user ? (
            <p onClick={logout} title="Click here to log out" className="btnLogout">
              {user.username}
            </p>
          ) : (
            <Link to="/login" className="signInButton">
              Sign In
            </Link>
          )}
        </div>
      </section>
      <section className="tab__content">
        <Outlet />
      </section>
    </div>
  );
};

export default Discover;
