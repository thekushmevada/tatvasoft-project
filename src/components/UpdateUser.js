import React, { useContext, useState } from "react";
import { AuthContext, useAuthContext } from "../context/auth";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";
import { useEffect } from "react";

const UpdateUser = () => {
  const authContext = useAuthContext();
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   if(user && user.data && user.data.result){
  //     handleChange(user);
  //   }
  // } , [user])

  

  const [state, setState] = useState({
    id: user.data.result.id,
    email: user.data.result.email,
    firstName: user.data.result.firstName,
    lastName: user.data.result.lastName,
    password: "",
    roleId: user.data.result.roleId,
    role: user.data.result.role,
  });

  const handleChange = (e) => {
    e.preventDefault();
    axios
      .put("https://book-e-sell-node-api.vercel.app/api/user", state)
      .then((res) => {
        toast.info("User updated sucessfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
        .catch((err) => {
          console.log(err);
          toast.error('Something went wrong!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        })
        authContext.setUser(res);

        const timer = setTimeout(() => {
          window.location.href = "/";
        }, 400);
        return () => clearTimeout(timer);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Wrapper>
      <h2 className="intro-data common-heading">Update User</h2>
      <div className="container">
        <hr />
        <div className="contact-form">
          <form onSubmit={handleChange} className="contact-inputs">
            <div className="flexbox jagya">
              <div className="inside-flexbox">
                <h3>Email :</h3>
                <input
                  name="email"
                  type="email"
                  required
                  value={state["email"]}
                  autoComplete="off"
                  onChange={(e) =>
                    setState({ ...state, email: e.target.value })
                  }
                />
              </div>
              <div>
                <h3>Firstname :</h3>
                <input
                  name="firstName"
                  type="text"
                  required
                  value={state["firstName"]}
                  autoComplete="off"
                  onChange={(e) =>
                    setState({ ...state, firstName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flexbox jagya">
              <div className="inside-flexbox">
                <h3>Lastname :</h3>
                <input
                  name="lastName"
                  type="text"
                  required
                  value={state["lastName"]}
                  autoComplete="off"
                  onChange={(e) =>
                    setState({ ...state, lastName: e.target.value })
                  }
                />
              </div>
              <div>
                <h3>Password :</h3>
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="password"
                  autoComplete="off"
                  onChange={(e) =>
                    setState({ ...state, password: e.target.value })
                  }
                />
              </div>
            </div>
            <input type="submit" />
          </form>
        </div>
        <ToastContainer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 3rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        width:100p
        display: flex;
        flex-direction: column;
        gap: 3rem;

        .flexbox {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        @media (max-width: ${({ theme }) => theme.media.tab}){
          .flexbox {
            flex-direction: column;
          }
        }
        @media (max-width: ${({ theme }) => theme.media.mobile}){
          .flexbox {
            flex-direction: column;
          }
        }

        .jagya {
          margin: 8px;
        }
        .sort-selection--style {
          max-width : 50rem;
          // padding: 0.5rem;
          cursor: pointer;
          .sort-select--option {
            padding: 0.5rem 0;
            cursor: pointer;
            height: 1rem;
            padding: 10px;
          }

          .label-size{
            text-size : 3rem;
          }

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

export default UpdateUser;
