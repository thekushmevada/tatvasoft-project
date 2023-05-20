import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";
import Login from "./components/Login";

const Home = () => {
  return (
    <Wrapper className="test">
      <div className="container">
        {/* First div */}
        <div className="grid grid-two-column">
          {/* First div */}
          <div className="hero-section-data">
            <p className="intro-data common-heading">New Customer</p>
            <hr />
            <br />
            <h4>Registration is free and easy.</h4>
            <br />
            <ul>
              <li>Faster checkout</li>
              <li>Save multiple shipping addresses</li>
              <li>View and track orders and more</li>
            </ul>

            <NavLink to="/register">
              <Button>Register</Button>
            </NavLink>
          </div>

          {/* Second div */}
          <div className="hero-section-data">
            <p className="intro-data common-heading">Registered Customers</p>
            <hr />
            <br />
            <h4>If you have an account with us, please log in.</h4>
            <Login />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
    p {
      margin: 2rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }
    ul {
      padding-left: 1.3rem;
      margin-bottom: 25px;
    }
    li {
      font-size: 1.5rem;
      font-weight: 300;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default Home;
