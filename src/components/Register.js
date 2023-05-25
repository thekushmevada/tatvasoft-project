import React, { Component } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      password: "",
      roleId: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  

  handleSubmit(e) {
      e.preventDefault();
        const {firstName, lastName, email, password , roleId } =
          this.state;
      
        // console.log(firstName + " " + lastName + " " + email + " "  + password + " " + " " + roleId) ;
        fetch("https://book-e-sell-node-api.vercel.app/api/user", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
            roleId
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data, "userRegister");
            <Navigate to="/" replace={true} />
            toast.info('Registered Succesfully!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
              
          });
  }

  render() {
    return (
      <Wrapper>
        <h2 className="intro-data common-heading">Create account</h2>
          <div className="container">
            <div className="contact-form">
              <form
                onSubmit={this.handleSubmit}
                method="POST"
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
                    onChange={(e) => this.setState({ firstName: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    required
                    autoComplete="off"
                    className="jagya"
                    // value=""
                    onChange={(e) => this.setState({ lastName: e.target.value })}
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
                    onChange={(e) => this.setState({ email: e.target.value })}
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
                    onChange={(e) => this.setState({ password: e.target.value })}
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
                {/* <div className=""> */}
                  <select
                    name="roles"
                    id="role"
                    className="jagya sort-selection--style"
                    onChange={(e) => {
                      // console.log(e.target.value);
                      this.setState({ role: e.target.value })
                      if(e.target.value === "buyer"){
                        this.setState({roleId: 2})
                      }
                      else{
                        this.setState({roleId: 3})
                      }
                    }}
                  >
                    <option value="" selected disabled hidden>
                      Choose Role
                    </option>
                    <option value="buyer">Buyer</option>
                    {/* <option value="" disabled></option> */}
                    <option value="seller">Seller</option>
                  </select>
                {/* </div> */}
              <div>
                <input type="submit" value="SignUp" />
                </div>
              </form>
            </div>
          </div>
          <ToastContainer/>
      </Wrapper>
    );
  }
}

// export default Contact;

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
