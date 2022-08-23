import Shelf from "../components/Shelf";
import Search from "../components/Search";
import { getAll } from "../BooksAPI";
import { useEffect, useState } from "react";

const HomePage = ({books, updateLibrary}) => {
    const [reading, setReading] = useState([]);
    const [wantToRead, setWantToRead] = useState([]);
    const [read, setRead] = useState([]);
useEffect(() => {
    const getBooks = async () => {
      const books = await getAll();
      setReading(books.filter(book => book.shelf ==="currentlyReading"));
      setWantToRead(books.filter(book => book.shelf ==="wantToRead"));
      setRead(books.filter(book => book.shelf ==="read"));
    } 
    getBooks();
    //update data
},[books])

    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelf title="Currently Reading" books={reading} updateLibrary={updateLibrary}/>
            <Shelf title="Want to Read" books={wantToRead} updateLibrary={updateLibrary}/>
            <Shelf title="Read" books={read} updateLibrary={updateLibrary}/>
          </div>
          <Search/>
          </div>
    )
};
export default HomePage;