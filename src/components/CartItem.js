import React from 'react';
import { FaTrash } from "react-icons/fa";
import CartAmountToggle from './CartAmountToggle';

const CartItem = () => {
    // const setDecrease = () => {
  //    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  // };

  // const setIncrease = () => {
  //    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  // };
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src="data:image/jpeg;base64,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" alt={"hello_id"} />
          </figure>
        </div>
        <div>
          <p>how to win friends and influence people</p>
          {/* <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: 'blue', color: 'red' }}></div>
          </div> */}
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
            2000
          {/* <FormatPrice price={price} /> */}
        </p>
      </div>

      {/* Quantity  */}
      <CartAmountToggle
        amount="1"
        // setDecrease={() => setDecrease(_id)}
        // setIncrease={() => setIncrement(_id)}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
            5000
          {/* <FormatPrice price={price * amount} /> */}
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon"  />
      </div>
    </div>
  )
}

export default CartItem
