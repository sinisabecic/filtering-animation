import React from "react";
import "./App.css";
import { NavBar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import clsx from "clsx";
import Login from "./pages/Login";
import { PrivateRoute } from "./PrivateRoute";
import Movies from "./pages/Movies";
import { makeStyles } from "@material-ui/core";
import { AuthContextProvider } from "./contexts/AuthContext";
import { MovieContextProvider } from "./contexts/MovieContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
}));

function App() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div>
      <AuthContextProvider>
        {/* <MovieContextProvider> */}
        {/* Router je u index.js */}
        <NavBar classes={classes}></NavBar>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/movies"
            element={<PrivateRoute children={<Movies />} />}
          />
        </Routes>
        {/* </MovieContextProvider> */}
      </AuthContextProvider>
    </div>
  );
}

export default App;
