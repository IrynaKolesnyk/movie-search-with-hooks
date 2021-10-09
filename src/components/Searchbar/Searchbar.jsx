import { useState } from "react";
import SearchbarStyled from "./SearchbarStyled";

const Searchbar = ({ fetchData }) => {
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(query);
    setQuery("");
  };
  return (
    <SearchbarStyled className="SearchForm" onSubmit={handleSubmit}>
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>
      <input
        className="SearchForm-input"
        type="text"
        value={query}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
    </SearchbarStyled>
  );
};

export default Searchbar;
