import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchBox = () => {
  const [input, setinput] = useState("");
  const [results, setResults] = useState([]);
  const [openSearchResult, setOpenSearchResult] = useState(false);

  const fetchData = async (value) => {
    axios
      .get(
        `https://book-e-sell-node-api.vercel.app/api/book/search?keyword=${value}`
      )
      .then((res) => {
        setResults(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (value) => {
      setOpenSearchResult(true);
      setinput(value);
      fetchData(value);
  };
  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Search"
        name="firstName"
        required
        autoComplete="off"
        className=""
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />

      {openSearchResult && (
        <div className="result-list ">
          {results?.length > 0 &&
            results.map((result, id) => {
              return (
                <div className="result-box">
                  <div key={id}> {result.name} </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Link to="/productlist">
                      <button type="submit" className="add-to-cart-button">
                        Add to cart
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      )}

    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  input {
    width: 50%;
    margin: 0 1rem;
  }
  .result-list {
    // margin-top: 20px;
    background-color: white;
    font-size: 1.5rem;
    width: auto;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 8px #ddd;
    border-radius: 5px;
    max-height: 300px;
    overflow-y: scroll;
  }
  .result-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffff;
    padding: 10px;
    margin-bottom: 10px;
  }
  .result-box > div {
    margin-right: 10px;
  }
  .add-to-cart-button {
    background-color: ${({ theme }) => theme.colors.btn};
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  .add-to-cart-button:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

export default SearchBox;
