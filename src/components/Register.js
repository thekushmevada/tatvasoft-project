import React from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { submitForm } from "../state/slice/formReducer";

const Register = () => {
  const [role, setRole] = useState([]);
  // const [state, setState] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   roleId: [],
  //   password: "",
  // });
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [roleId, setRoleId] = useState(2);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://book-e-sell-node-api.vercel.app/api/user/roles")
      .then((res) => {
        
        setRole(res.data.result);
      });
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(state);
  //   axios
  //     .post("https://book-e-sell-node-api.vercel.app/api/user", state)
  //     .then((res) => {
  //       console.log(res, "userRegister");
  //       toast.info("Registered Succesfully!", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error("Something went wrong!", {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "colored",
  //       });
  //     });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the form data object
    const formData = {
      firstName,
      lastName,
      email,
      password,
      roleId
    };

    // Dispatch the submitForm action with the form data
    console.log(formData);
    dispatch(submitForm(formData));

    // Reset the form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setRoleId("");
  };

  return (
    <Wrapper>
      <h2 className="intro-data common-heading">Create account</h2>
      <div className="container">
        <div className="contact-form">
          <form
            onSubmit={handleSubmit}
            className="contact-inputs"
          >
            <h3>Personal Information</h3>
            <br />
            <hr />
            <br />
            <div className="grid-two-column">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                required
                autoComplete="off"
                className="jagya"
                // value=""
                onChange={(e) =>
setFirstName(e.target.value)                }
              />
              <input
                type="text"
                placeholder="Last name"
                name="lastName"
                required
                autoComplete="off"
                className="jagya"
                // value=""
                onChange={(e) =>
setLastName(e.target.value)                }
              />
            </div>
            <div className="grid-two-column">
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                autoComplete="off"
                className="jagya"
                // value=""
                onChange={(e) =>setEmail(e.target.value)}
              />

              <input
                type="number"
                placeholder="Phone No"
                name="phone"
                required
                autoComplete="off"
                className="jagya"
                // value=""
                // onChange={(e) => this.setState({ phone: e.target.value })}
              />
            </div>

            <br />
            <h3>Login Information</h3>
            <br />
            <hr />
            <br />
            <div className="grid-two-column">
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
                autoComplete="off"
                className="jagya"
                // value=""
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirm-password"
                required
                autoComplete="off"
                className="jagya"
                // value=""
                // onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>

            <br />
            <h3>Role Information</h3>
            <br />
            <hr />
            <br />

            <select
              name="role"
              className="jagya sort-selection--style"
              onChange={(e) => setRoleId(Number(e.target.value))}
            >
              <option selected hidden default>Select Role</option>
              {role.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
            <div>
              <input type="submit" value="SignUp" />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.section`
  padding: 7rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        width:100p
        display: flex;
        flex-direction: column;
        gap: 3rem;

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
