import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import styled from "styled-components";

const Product = (book) => {
  //  { id, name, base64image, price , category} = curElem;
  return (
    // <NavLink to={`/singleproduct/${_id}`}>
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
        <NavLink to="/cart">
          <Button className="btn-clear btn-c"> Add to cart</Button>
        </NavLink>
      </div>
      {/* //  </NavLink> */}
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
