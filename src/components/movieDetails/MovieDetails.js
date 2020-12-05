import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useParams, Link } from "react-router-dom";
import apis from "../../api/api";
import { useStylesMoviesDetails as useStyles } from "../../hooks/useMaterialStyles";

function MovieDetails(props) {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const classes = useStyles();
  const recievedMovieFromRoute = props?.location?.state || null;

  useEffect(() => {
    if (!recievedMovieFromRoute) {
      apis
        .getMovieById(id)
        .then((movies) => {
          setMovie(movies.data);
        })
        .catch((error) => alert("server is currantly unavilable"));
    } else {
      setMovie(recievedMovieFromRoute);
    }
  }, []);

  return (
    <div className={classes.main}>
      <AppBar>
        <Toolbar className={classes.appBar} position="static">
          <Button color="inherit" aria-label="close" component={Link} to="/">
            <ArrowBackIcon /> Back to All
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.wrapper}>
        {movie ? (
          <Card className={classes.cardContent}>
            <CardMedia
              className={classes.movieImage}
              image={movie.largeimage}
            />
            <div className={classes.movieDetails}>
              <CardContent className={classes.content}>
                <Typography
                  id={"movie_title"}
                  className={classes.title}
                  component="h5"
                  variant="h5"
                >
                  {movie.title}
                </Typography>
                <Typography className={classes.additionalDetails}>
                  {movie.released} | {movie.runtime} | {movie.rating}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: movie.synopsis }}
                  ></div>
                </Typography>
              </CardContent>
            </div>
          </Card>
        ) : (
          <div> Movie no longer available, Please go back to movies list</div>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
