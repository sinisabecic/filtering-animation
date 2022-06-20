import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
// import { apiCall } from "../services/api";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    //moze i apiCall pa da ide bez ovog env parametra
    axios
      .get(`http://localhost:1337/api/blogs?populate=*`)
      .then((res) => {
        console.log(res.data.data);
        setPosts(res.data.data);
        // console.log(res.data.data.attributes.coverImage.data.attributes.url);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Blog layout
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {posts.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <Card className={classes.post}>
                  <CardMedia
                    className={classes.cardMedia}
                    // image="https://source.unsplash.com/random"
                    image={
                      post.attributes.coverImage.data.attributes.url
                        ? `http://localhost:1337${post.attributes.coverImage.data.attributes.url}`
                        : "https://source.unsplash.com/random"
                    }
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.attributes.title.substring(0, 20)}
                    </Typography>
                    <Typography>
                      {post.attributes.description.substring(0, 40) + "..."}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    <Button size="small" color="primary">
                      <Link to={`/blogs/${post.id}`}>View</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
};

export default Blog;
