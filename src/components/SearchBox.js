import axios from "axios";
// import { Button } from "../styles/Button";
import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
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
    setinput(value);
    fetchData(value);
    setOpenSearchResult(true);
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
      {/* <br /> */}
      {openSearchResult && (
        <div className="result-list ">
          {results?.length > 0 &&
            results.map((result, id) => {
              return (
                <div className="result-box">
                  <div key={id}> {result.name} </div>
                  <button type="submit" >Add to cart</button>
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
    flex-direction: row;
  }
`;

export default SearchBox;
