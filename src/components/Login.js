import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../context/auth";
import { login, selectError, selectIsLoading } from "../state/slice/loginReducer";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../styles/Button";

const Login = () => {
  // const [state, setState] = useState({ email: "", password: "" });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const authContext = useAuthContext();

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("https://book-e-sell-node-api.vercel.app/api/user/login", state)
  //     .then((res) => {
  //       toast.info("Logged in Succesfully!", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //       authContext.setUser(res);
  //       const timer = setTimeout(() => {
  //         window.location.href = "/books";
  //       }, 400);
  //       return () => clearTimeout(timer);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error('Something went wrong!', {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //         });
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the login credentials object
    const credentials = {
      email,
      password,
    };

    // Dispatch the login action with the credentials
    dispatch(login(credentials));

    // Reset the form fields
    setEmail('');
    setPassword('');
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) =>setPassword(e.target.value)}
          />

          <div>
            <Button>
            {isLoading ? 'Logging in...' : 'Log in'}
            </Button>
            {error && <p>{error}</p>}
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
