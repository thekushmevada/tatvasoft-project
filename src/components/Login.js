import React, { useState } from "react";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login, selectError, selectIsLoading } from "../state/slice/loginReducer";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../styles/Button";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
            <br />
            <Button type="submit"  >
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
