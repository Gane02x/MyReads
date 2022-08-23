import React from "react";
import { useState } from "react"; 

const ShelfSelector  = ({book, handleSelect}) => {

  const checkShelf = () => {
    if (book.shelf){
      return book.shelf
    }else{
      return "none"
    }
  }
    const [shelf, setShelf] = useState(checkShelf())

  return (
    <div className="book-shelf-changer">
      <select 
        value={shelf ? shelf : "none"}
        onChange={(select) => {
          handleSelect(select, book);
          setShelf(select.target.value)
        }}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">
          Currently Reading
        </option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
    )
}
export default ShelfSelector;