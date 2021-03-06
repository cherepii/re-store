import { Link } from "react-router-dom";

import "./book-list-item.css"

const BookListItem = ({ book, onAddedToCart }) => {
  const { name, author, price, cover} = book;
  return (
    <div className="book-list-item">
      <div className="book-cover">
        <img src={cover} alt='book'/>
      </div>
      <div className="book-details">
        <Link to="" className="book-details__title">{name}</Link>
        <div className="book-details__text">{author}</div>
        <div className="book-details__text">${price}</div>
        <button 
          className="btn btn-primary add-to-cart"
          onClick={onAddedToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default BookListItem;