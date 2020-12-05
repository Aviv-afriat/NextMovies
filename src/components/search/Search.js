import React from "react";
import { debounce } from "lodash";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import { useStylesMoviesList as useStyles } from "../../hooks/useMaterialStyles";

function Search(props) {
  const classes = useStyles();
  const handleSearchInputChanges = debounce((e) => {
    props.setSearchValue(e);
  }, 100);

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        id="searchInput"
        placeholder="Search Movie Title or Synopsis"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => handleSearchInputChanges(e.target.value)}
      />
    </div>
  );
}

export default Search;
