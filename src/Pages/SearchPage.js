import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { search } from "../BooksAPI";
import BooksFromSearch from "../components/BooksFromSearch";


const SearchPage = ({library, updateLibrary }) => {

  const [query, setQuery] = useState("");
  const [newLibrary, setNewLibrary] = useState([]);
  
useEffect(()=> {
  const searchFunc = async () => {
    try {
      const books = await search(query, 20);
      setNewLibrary(books)
    } catch (error) {
      setQuery("")
    }
  };
  if(query) {
    searchFunc()
  }
},[query]
)

    return (
      <div className="search-books">
      <div className="search-books-bar">
        <Link
          to={"/"}
          className="close-search"
        >
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {query ? (
            <BooksFromSearch
              books={newLibrary}
              updateLibrary={updateLibrary}
              library={library}
            />) : (<p> search failed</p>)}
        </ol>
      </div>
    </div>
  )
}
export default SearchPage;