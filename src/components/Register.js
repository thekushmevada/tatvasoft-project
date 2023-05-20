import React, { Component } from "react";
import styled from "styled-components";

export default class SignUp extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     username: "",
  //     email: "",
  //     Message: ""
  //   };
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit(e) {
  //     e.preventDefault();
  //       const {username, email, Message } =
  //         this.state;
  //       // console.log(username, email, Message);
  //       fetch("https://productssapi.onrender.com/inquiry", {
  //         method: "POST",
  //         crossDomain: true,
  //         headers: {
  //           "Content-Type": "application/json",
  //           Accept: "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //         body: JSON.stringify({
  //           username,
  //           email,
  //           Message,
  //         }),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           //console.log(data, "userRegister");
  //           if (data.status === "ok") {
  //             alert("Your Query has been registered successful");
  //             window.location.href = "./contact";
  //           }
  //         });
  // }

  render() {
    return (
      <Wrapper>
        <h2 className="common-heading">Create account</h2>
          <div className="container">
            <div className="contact-form">
              <form
                // onSubmit={this.handleSubmit}
                // method="POST"
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
                    name="firstname"
                    required
                    autoComplete="off"
                    className="jagya"
                    // value=""
                    // onChange={(e) => this.setState({ username: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    name="lastname"
                    required
                    autoComplete="off"
                    className="jagya"
                    // value=""
                    // onChange={(e) => this.setState({ username: e.target.value })}
                  />
                </div>
                <div className="grid-two-column">
                  <input
                    type="email"
                    placeholder="Email"
                    name="Email"
                    required
                    autoComplete="off"
                    className="jagya"
                    // value=""
                    // onChange={(e) => this.setState({ email: e.target.value })}
                  />

                  <input
                    type="number"
                    placeholder="Phone No"
                    name="phone"
                    required
                    autoComplete="off"
                    className="jagya"
                    // value=""
                    // onChange={(e) => this.setState({ email: e.target.value })}
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
                    // onChange={(e) => this.setState({ email: e.target.value })}
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
                    id="roles"
                    className="jagya sort-selection--style"
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
      </Wrapper>
    );
  }
}

// export default Contact;

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .main-hr {
    // display: grid;
    // align-item: center;
    // justify-content: center;
    // width: 50%;
  }

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
