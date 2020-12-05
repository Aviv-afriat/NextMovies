import React from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  movie: {
    margin: "1rem",
    width: 200,
  },
  movieImg: {
    maxWidth: "100%",
  },
});

const MovieCard = ({ movie }) => {
  const classes = useStyles();

  return (
    <Card className={classes.movie}>
      <Link to={{ pathname: `/${movie.id}`, state: movie }}>
        <CardMedia
          className={classes.movieImg}
          image={movie.image}
          component="img"
        />
        <CardContent>
          <Typography component="p">{movie.title}</Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default withRouter(MovieCard);
