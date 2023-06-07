import axios from "axios";
import React from "react";
import { Button } from "../styles/Button";

const EditBookItem = (book) => {

  const deleteBook = async (e) => {
    axios.delete(`https://book-e-sell-node-api.vercel.app/api/book?id=${e}`)
    .then((res) => {
      console.log(res);
      console.log("book deleted");
    })
  }

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
        <Button onClick={() => deleteBook(book.id)}>DeleteBook</Button>
      </div>
    </div>
  );
};

export default EditBookItem;
