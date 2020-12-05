import { makeStyles, fade } from "@material-ui/core/styles";

export const useStylesMoviesList = makeStyles((theme) => ({
  appBar: {
    // background: "#03c8ff",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
    justifyContent: "center",
  },
  title: {
    marginLeft: 16,
    position: "relative",
    marginRight: 8,
  },
  rating: {
    position: "relative",
    marginRight: 8,
  },
  search: {
    position: "relative",
    marginRight: 8,
    marginLeft: 0,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "27ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

export const useStylesMoviesDetails = makeStyles((theme) => ({
  appBar: {
    // background: "#03c8ff",
  },
  main: {
    margin: 50,
  },
  wrapper: {
    marginTop: 100,
  },
  cardContent: {
    marginTop: 20,
    display: "flex",
    boxShadow: "none !important",
  },
  movieImage: {
    flex: "50%",
    backgroundSize: "contain",
    width: 300,
    height: 450,
  },
  movieDetails: {
    flex: "50%",
  },
  additionalDetails: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  content: {
    padding: 0,
    textAlign: "left",
  },
  title: {
    marginBottom: 20,
  },
  info: {
    marginBottom: 30,
    fontSize: 16,
    fontWeight: "bold",
  },
  noMovie: {
    display: "flex",
    justifyContent: "center",
  },
}));
