import React, {useState} from "react";
import ErrorPage from "../ErrorPage";
import styled from "styled-components";

const AddBook = () => {
  const y = JSON.parse(localStorage.getItem("Shared.LocalStorageKeys.USER"));
  const [state, setState] = useState({ name: "", description: "", price: "" , categoryId:"", base64image: "" });

  if (y.data.result.role === "seller") {
    return (
      <Wrapper>
        <h2 className="intro-data common-heading">Add Book</h2>
        <div className="container">

        </div>
      </Wrapper>
    );
  } else {
    return <ErrorPage />;
  }
};

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

export default AddBook;
