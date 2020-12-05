import React, { useEffect, useState } from "react";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import StarRatingComponent from "react-star-rating-component";
import { useStylesMoviesList as useStyles } from "../../hooks/useMaterialStyles";
import apis from "../../api/api";
import MovieCard from "./MovieCard";
import Search from "../search/Search";

function MoviesList() {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setfilteredMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    apis
      .getAllMovies()
      .then((movies) => {
        setMovies(movies.data);
        setfilteredMovies(movies.data);
      })
      .catch((error) => {
        alert("server is currantly unavilable");
      });
  }, []);

  useEffect(() => {
    let filteredMovies = movies;
    if (rating) {
      filteredMovies = filterByRating(filteredMovies);
    }
    if (searchValue) {
      filteredMovies = filterBySearch(filteredMovies);
    }
    setfilteredMovies(filteredMovies);
  }, [rating, searchValue]);

  function filterBySearch(filteredMovies) {
    return filteredMovies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        movie.synopsis.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
  }

  function filterByRating(filteredMovies) {
    return filteredMovies.filter((movie) => {
      return movie.rating >= rating;
    });
  }

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Next Movies
          </Typography>
          <Search setSearchValue={setSearchValue} />
          <div className={classes.rating}>
            <StarRatingComponent
              name="rating"
              starCount={10}
              value={rating}
              onStarClick={(value) => {
                if (rating === 1 && value === 1) {
                  value = 0;
                }
                setRating(value);
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        {filteredMovies?.length ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <div> oops no movie found please try again </div>
        )}
      </div>
    </div>
  );
}

export default MoviesList;
