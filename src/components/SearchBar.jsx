import Button from "@mui/material/Button";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        placeholder="What are you looking for?"
        value={search}
        onChange={() => {
          setSearch(event.target.value);
        }}></input>
      <Button
        className="searchButton"
        variant="contained"
        onClick={handleSearch}>
        <span className="search-icon">
          <BsSearch />
        </span>
      </Button>
    </div>
  );
};

export default SearchBar;
