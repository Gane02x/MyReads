import "./App.css";
import {Routes, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import {getAll, update } from "./BooksAPI";
import {useEffect, useState } from "react";

const App = () => {
  const [library, setLibrary] = useState([]);
  const [books, setBooks] = useState([]);
//updating book.shelf props
  const refreshLibrary = (book, shelf) => {
    const refresh = async () => {
      const updatedShelves = await update(book, shelf);
      setLibrary(updatedShelves);
    }
    refresh()
  }
  useEffect(()=> {
    const getBooks = async () => {
      const allBooks = await getAll();
      setBooks(allBooks);      
    }
    getBooks()
  },[library])

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<HomePage updateLibrary={refreshLibrary} books={books}/>}/>
        <Route path="/search" element={<SearchPage updateLibrary={refreshLibrary} library={books}/>}/>
      </Routes>
    </div>
  );
}

export default App;