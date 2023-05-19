import React from "react";
import styled from "styled-components";

const Products = () => {
  return (
    <Wrapper className="test">
      <h1>Books</h1>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 50vh;
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
