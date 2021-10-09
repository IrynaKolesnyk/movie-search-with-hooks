import { useState } from "react";

const Searchbar = ({ fetchData }) => {
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    console.log("event.target :>> ", event.target.value);
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(query);
    setQuery("");
  };
  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
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
    </form>
  );
};

export default Searchbar;
