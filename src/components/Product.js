import React from "react";
import { Button } from "../styles/Button";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const Product = (book) => {
  const {addToCart } = useContext(CartContext);

  // console.log(book);

  function handleAddToCart(id) {
    addToCart(id);
}

  return (
    <Wrapper>
      <div className="card">
        <figure>
          <img src={book.base64image} alt={book.name} />
          <figcaption className="caption">{book.category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{book.name.slice(0, 20) + "..."}</h3>
            <p className="card-data--price">{"₹" + book.price}</p>
          </div>
          <p>{book.description.slice(0, 35) + "..."}</p>
        </div>
        {/* <NavLink to="/"> */}
          <Button className="btn-clear btn-c" onClick={() => handleAddToCart(book.id)}> Add to cart</Button>
        {/* </NavLink>/ */}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .card {
    // background-color: ${({ theme }) => theme.colors.bg};
    background-color: #f2f3ff;
  }
  .btn-clear {
    background-color: #e74c3c;
  }
  .btn-c {
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid rgb(98 84 243);
  }
`;

export default Product;
