import React, { useContext } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { AuthContext } from "../contexts/AuthContext";

export const NavBar = ({ classes }) => {
  const { authTokens, setTokens } = useContext(AuthContext);

  const logout = () => {
    setTokens("");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>
            Home Page
          </Link>
        </Typography>
        {/* <Typography variant="h6" className={classes.title}>
          <Link to="/" className={classes.link}>
            Movies
          </Link>
        </Typography> */}
        {authTokens ? (
          <Typography variant="h6" className={classes.title}>
            <Link to="/movies" className={classes.link}>
              Movies
            </Link>
          </Typography>
        ) : (
          ""
        )}

        {!authTokens ? (
          <Link to="/login" className={classes.link}>
            Login
          </Link>
        ) : (
          <Button onClick={logout}>Logout</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
