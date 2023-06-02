import React from "react";

const EditBookItem = (book) => {
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <img src={book.base64image} alt="helloi" />
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
        <button>EditBook</button>
      </div>

      <div>
        <button>DeleteBook</button>
      </div>
    </div>
  );
};

export default EditBookItem;
