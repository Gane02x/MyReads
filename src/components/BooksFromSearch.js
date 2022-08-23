import { update } from "../BooksAPI";
import ShelfSelector from "./ShelfSelector";

const BooksFromSearch = ({books, updateLibrary, library}) => {
    /*Comparing books from main to search page
    providing that a book which already is part of a shelf
    will be returned with the correct shelf*/
    const compareBooks = (b) => (id) => b?.find((b) => b.id === id);
    const compareBooksById = compareBooks(library)

    const inShelf = (book) =>  {
      book.shelf = `${book.shelf}`;
      return book;
    }
    const shelfSelect = (event, book) => {
        const selectedShelf = event.target.value;
        update(book, selectedShelf).then(updateLibrary);
    };

    let comparedBooks = [];
  
    if(books && books.length> 0) {
      books.forEach(book => {
        const compared = compareBooksById(book.id);
        comparedBooks.push(compared !== undefined ? compared : inShelf(book))
      });
    }
return (
    <>
    {comparedBooks && comparedBooks.length> 0 ? (
        comparedBooks.map((book) => {
            if (book) {
                return (
                <li key={book.id}>
                    <div className="book">
                    <div className="book-top">
                        {book.imageLinks ?(
                        <div
                            className="book-cover"
                            style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                        </div>):(<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(https://galapagos-pro.com/wp-content/uploads/2021/03/book-placeholder.jpg)` }}></div>
                        )}
                    <ShelfSelector book={book} handleSelect={shelfSelect}/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors ?
                    (<div className="book-authors">{book.authors.join(", ")}</div>
                    ):(
                    <div className="book-authors">Unknown Author</div>
                    )}
                    </div>
                </li>
                )
            }
            else{
                return "";
            }
        })
    ) : (<p>search failed</p>)}
    </>
)
}

export default BooksFromSearch;