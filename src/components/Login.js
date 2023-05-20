import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Wrapper>
        
      <div className="contact-form">
        <form
          // onSubmit={this.handleSubmit}
          // method="POST"
          className="contact-inputs"
        >
            
          <input
            type="email"
            placeholder="Email"
            name="Email"
            required
            autoComplete="off"
            // className="jagya"
            // value=""
            // onChange={(e) => this.setState({ email: e.target.value })}
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
            // onChange={(e) => this.setState({ email: e.target.value })}
          />

          <div>
            <input type="submit" value="LogIn" />
          </div>
        </form>
      </div>
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
