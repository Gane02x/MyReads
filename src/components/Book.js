import { update } from "../BooksAPI";
import ShelfSelector from "./ShelfSelector"

const Book = ({book, updateLibrary}) => {
  const handleSelect = async (event, book) => {
  const currentShelf = await event.target.value;
  update(book, currentShelf).then(updateLibrary);
}
    return (
    <li>
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
            <ShelfSelector book={book} handleSelect={handleSelect}/>
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
export default Book;