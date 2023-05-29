import axios from "axios";
// import { Button } from "../styles/Button";
import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const SearchBox = () => {
  const [input, setinput] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = async (value) => {
    axios.get(`https://book-e-sell-node-api.vercel.app/api/book/search?keyword=${value}`)
      .then((res) => {
        // console.log(res.data)
        setResults(res.data.result)
      })
      .catch((err) => {
        console.log(err);
      })
  };

  const handleChange = (value) => {
    setinput(value);
    fetchData(value);
  };
  return (
    <Wrapper className="">
      
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
      <br />
      <div className="result-list">
        {results?.length  && results.map((result,id) => {
          return <div key={id}>{result.name}</div>;
        })}
      </div>
      
      {/* <Button className="btn-search">
        <FaSearch /> Search
      </Button> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  input {
    width: 50%;
    margin: 0 1rem;

    .result-list {
      font-size: 2rem;
      width: 56%;
      backgroud-color: #FFFFFF;
      display: flex;
      flex-direction: column;
      box-shadow: 0px 0px 8px #ddd;
      border-radius: 10px;
      max-height: 300px;
      overflow-y: scroll;
    }
  }
`;

export default SearchBox;
