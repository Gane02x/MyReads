import Book from "./Book";

const Shelf = ({books, title, updateLibrary}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => <Book key={book.id} book={book} updateLibrary={updateLibrary}/>)}
        </ol>
      </div>
  </div>
);

export default Shelf;