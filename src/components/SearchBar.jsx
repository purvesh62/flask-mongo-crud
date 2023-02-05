import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  function checkQuery() {
    const searchValue = document.getElementsByClassName("searchTerm")[0].value;

    if (searchValue.length === 0) {
      const cards = document.getElementsByClassName("card");
      for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "block";
      }
    }
    return;
  }
  function filterEvents() {
    const searchValue = document.getElementsByClassName("searchTerm")[0].value;
    const cards = document.getElementsByClassName("card");
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "block";
    }

    if (searchValue.length > 0) {
      for (let i = 0; i < cards.length; i++) {
        const childText = cards[i].childNodes[1].childNodes[0].innerText;
        if (!childText.toLowerCase().includes(searchValue)) {
          cards[i].style.display = "none";
        }
      }
    }
    return;
  }
  return (
    <div className="search">
      <input
        type="text"
        className="searchTerm"
        placeholder="What are you looking for?"
        onChange={checkQuery}
      ></input>
      <Button
        className="searchButton"
        variant="contained"
        onClick={filterEvents}
      >
        <span className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
