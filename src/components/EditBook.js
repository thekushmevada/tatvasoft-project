import React, { useEffect, useState, useRef } from "react";
import ErrorPage from "../ErrorPage";
import styled from "styled-components";
import axios from "axios";
import EditBookItem from "./EditBookItem";
import ReactPaginate from "react-paginate";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";

const EditBook = () => {
  const y = JSON.parse(localStorage.getItem("Shared.LocalStorageKeys.USER"));
  const [books, setBooks] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();
  const [rows, setRows] = useState([5]);
  const [keyword, setKeyword] = useState("");
  const Rows = [2, 5, 10, 20],
    MakeItem = function (X) {
      return <option>{X}</option>;
    };

  useEffect(() => {
    currentPage.current = 1;
    if (rows) {
      axios
        .get(
          `https://book-e-sell-node-api.vercel.app/api/book?pageSize=${rows}&pageIndex=${currentPage.current}`
        )
        .then((res) => {
          setPageCount(res.data.result.totalPages);
          setBooks(res.data.result.items);
        });
    }
  }, [rows]);

  useEffect(() => {
    if (keyword) {
      const timer = setTimeout(() => {
        axios
          .get(
            `https://book-e-sell-node-api.vercel.app/api/book?pageSize=3&pageIndex=${currentPage.current}&keyword=${keyword}`
          )
          .then((res) => {
            setPageCount(res.data.result.totalPages);
            setBooks(res.data.result.items);
          });
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [keyword]);

  function handlePageClick(e) {
    currentPage.current = e.selected + 1;
    axios
      .get(
        `https://book-e-sell-node-api.vercel.app/api/book?pageSize=${rows}&pageIndex=${currentPage.current}`
      )
      .then((res) => {
        setPageCount(res.data.result.totalPages);
        setBooks(res.data.result.items);
      });
  }

  if (y.data.result.role === "seller") {
    return (
      <Wrapper>
        <div className="container">
          <div className="jagya">
            <h1>Book Page</h1>
          </div>
          <div className="relative-name">
            <input
              placeholder="search book"
              type="text"
              autoComplete="off"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Button>
              <NavLink to="/addbook">Add Book</NavLink>
            </Button>
          </div>
          <hr />
          <div className="cart_heading grid grid-five-column">
            <p cla>Book</p>
            <p className="cart-hide">Price</p>
            <p>Category</p>
            <p>EditBook</p>
            <p>DeleteBook</p>
          </div>
          <hr />
          <div className="cart-item">
            {books.map((book) => {
              return (
                <EditBookItem
                  id={book.id}
                  base64image={book.base64image}
                  name={book.name}
                  category={book.category}
                  description={book.description}
                  price={book.price}
                />
              );
            })}
          </div>

          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination justify-content-center pagination-lg"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
          />
          <div className="order-total--amount">
            <div className="order-total--subdata">
              <p>Rows per page : </p>
              <select
                onChange={(e) => {
                  setRows(e.target.value);
                  handlePageClick();
                }}
              >
                {Rows.map(MakeItem)}
              </select>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  } else {
    return <ErrorPage />;
  }
};

const Wrapper = styled.section`
  padding: 5rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .relative-name {
    display: flex;
    justify-content: right;
    input,
    Button {
      margin-left: 2rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .relative-name {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .relative-name {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  .jagya {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: #5138ee;
    }
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: row;
      gap: 1.8rem;
      padding: 3.2rem;

      select {
        height: 3rem;
      }
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default EditBook;
