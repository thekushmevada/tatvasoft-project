import React from "react";
import { Button } from "../styles/Button";
import { deleteBook } from "../state/slice/bookReducer";
import { useDispatch } from "react-redux";

const EditBookItem = (book) => {

  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(deleteBook(e));
  };


  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <img src={book.base64image} alt={book.base64image} />
        </div>
        <div>
          <p>{book.name}</p>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>{book.price}</p>
      </div>

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>{book.category}</p>
      </div>

      <div>
        <Button onClick={() => console.log(book.id)} >EditBook</Button>
      </div>

      <div>
        <Button onClick={() => handleDelete(book.id)}>DeleteBook</Button>
      </div>
    </div>
  );
};

export default EditBookItem;
