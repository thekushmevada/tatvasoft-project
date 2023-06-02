import React, { useState } from "react";
import ErrorPage from "../ErrorPage";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";
import { Button } from "../styles/Button";

const AddBook = () => {
  const y = JSON.parse(localStorage.getItem("Shared.LocalStorageKeys.USER"));
  const [category, setCategory] = useState([]);
  const [state, setState] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "",
    base64image: "",
  });

  // console.log(state);

  useEffect(() => {
    axios
      .get("https://book-e-sell-node-api.vercel.app/api/category/all")
      .then((response) => {
        setCategory(response.data.result);
      });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://book-e-sell-node-api.vercel.app/api/book" , state)
      .then((response) => {
        console.log(response.data.result);
        toast.info("Book posted Succesfully!", {
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
  };

  if (y.data.result.role === "seller") {
    return (
      <Wrapper>
        <h2 className="intro-data common-heading">Add Book</h2>
        <div className="container">
        <hr />
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="contact-inputs">
              <div className="grid grid-two-column jagya">
                <input 
                  type="text"
                  placeholder="book name"
                  name="name"
                  required
                  autoComplete="off"
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                />
                <input
                 type="number"
                 placeholder="book price"
                 name="price"
                 required
                 autoComplete="off"
                 onChange={(e) => setState({ ...state, price: e.target.value })}
                 />
              </div>
              <div className="grid grid-two-column jagya">
              <select onChange={(e) => setState({...state , categoryId: e.target.value })}>
                <option selected disabled hidden></option>
                {category.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {" "}
                    {cat.name}
                  </option>
                ))}
              </select>
              <div className="flexbox">
                <Button></Button>
                <input name="base64image" onChange={(e) => setState({...state , base64image: e.target.value })} />
              </div>
              </div>
              <div>
                <textarea rows="5" name="description" onChange={(e) => setState({...state , description: e.target.value })} />
              </div>
              <input type="submit" />
            </form>
          </div>
        </div>
        <ToastContainer />
      </Wrapper>
    );
  } else {
    return <ErrorPage />;
  }
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

        .jagya {
          margin: 8px;
        }

        .flexbox {
          display: flex;
          flex-direction: row;
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

export default AddBook;
