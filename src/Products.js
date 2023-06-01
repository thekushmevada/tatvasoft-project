import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Product from "./components/Product";
import ReactPaginate from "react-paginate";

// API Data
// pageSize = ek page ma total books
// totalItems = total books
// pageIndex = kaya page par chu hu
// totalPages = ketla pages aave che

// Current Data
// PageCount = total ketla page api mathi aave che

const Products = () => {
  const [books, setBooks] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  // const [currentPage , setcurrentPage] = useState(1);
  const currentPage = useRef();

  // useEffect(() => {
  //   axios
  //     .get("https://book-e-sell-node-api.vercel.app/api/book/all")
  //     .then((res) => {
  //       setBooks(res.data.result);
  //     });
  // }, []);

  useEffect(() => {
    currentPage.current = 1;
    getPaginatedUsers();
  }, []);

  function handlePageClick(e) {
    currentPage.current = e.selected + 1;
    getPaginatedUsers();
  }

  function getPaginatedUsers() {
    axios
      .get(
        `https://book-e-sell-node-api.vercel.app/api/book?pageSize=3&pageIndex=${currentPage.current}`
      )
      .then((res) => {
        setPageCount(res.data.result.totalPages);
        setBooks(res.data.result.items);
      });
  }

  return (
    <Wrapper className="container">
      {/* <div className="grid grid-three-column"> */}
      {books && books.length > 0 && (
        <div className="grid grid-three-column">
          {books.map((book) => (
            <Product
              base64image={book.base64image}
              name={book.name}
              category={book.category}
              description={book.description}
              price={book.price}
            />
          ))}
        </div>
      )}
      {/* </div> */}
      <br />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  // background-color: ${({ theme }) => theme.colors.bg};
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container {
    max-width: 120rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }
  .card {
    // background-color: #fff;
    border-radius: 1rem;
    .card-data {
      padding: 0 2rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default Products;
