import React from 'react';
import { useContext } from 'react';
import {  FaPlus,FaMinus, FaTrash } from "react-icons/fa";
import { CartContext } from '../context/CartContext';



const CartItem = (book) => {
const {removeBook, increaseAmount, decreaseAmount } = useContext(CartContext);

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={book.book.base64image} alt={book.id} />
            {/* {console.log(book.book.id)}
            {console.log(book.id)} */}
          </figure>
        </div>
        <div>
          <p>{book.book.name}</p>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
            {book.book.price}
        </p>
      </div>

      {/* Quantity  */}
       <div className="cart-button">
      <div className="amount-toggle">
        <button >
          <FaMinus onClick={() => decreaseAmount(book.id, book.book.id, book.quantity)} />
        </button>
        <div className="amount-style">{book.quantity}</div>
        <button>
          <FaPlus onClick={() => increaseAmount(book.id, book.book.id, book.quantity)} />
        </button>
      </div>
    </div>

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
       {book.quantity * book.book.price}
          {/* <FormatPrice price={price * amount} /> */}
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeBook(book.id)} />
      </div>
    </div>
  )
}

export default CartItem
