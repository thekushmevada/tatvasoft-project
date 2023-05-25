import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Navigate } from "react-router-dom";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://book-e-sell-node-api.vercel.app/api/user/login", state)
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("token", res.data);
        window.localStorage.setItem("loggedIn", true);

        toast.info("Logged in Succesfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        window.location.href="/books";
      })
      .catch((err) => console.log(err));
  };
  return (
    <Wrapper>
      <div className="contact-form">
        <form
          onSubmit={handleSubmit}
          // method="POST"
          className="contact-inputs"
        >
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            autoComplete="off"
            // className="jagya"
            // value=""
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />

          <br />
          <br />

          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            autoComplete="off"
            // className="jagya"
            // value=""
            onChange={(e) => setState({ ...state, password: e.target.value })}
          />
          

          <div >
            <input type="submit" value="LogIn" />
          </div>
        </form>
      </div>
      <ToastContainer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2rem 0 5rem 0;
  text-align: left;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        // width:100p
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Login;
