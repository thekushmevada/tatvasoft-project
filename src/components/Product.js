import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import styled from "styled-components";

const Product = ({ base64image, name, category, price, description }) => {
  //   const { _id, name, base64image, price , category} = curElem;
  return (
    // <NavLink to={`/singleproduct/${_id}`}>
    <Wrapper>
      <div className="card">
        <figure>
          <img src={base64image} alt={name} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{price}</p>
          </div>
          {/* <p>{description}</p> */}
        </div>
        <NavLink to="/">
          <Button className="btn-clear btn-c"> Add to cart</Button>
        </NavLink>
      </div>
      {/* //  </NavLink> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
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
