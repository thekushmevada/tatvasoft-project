import { Button } from "../styles/Button";
import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";


const SearchBox = () => {
  return (
    <Wrapper className="">
      <input
        type="text"
        placeholder="Search"
        name="firstName"
        required
        autoComplete="off"
        className=""
        // value=""
        onChange={(e) => this.setState({ firstName: e.target.value })}
      />
      
      <Button>
       <FaSearch /> Search
      </Button>
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
        width:50%;
        margin: 0 1rem;
    }
`

export default SearchBox;

// import React from "react";
// import { TextField } from "@material-ui/core";

// const SearchBox = () => {
//   return (
//     <div className="header-search-outer">
//       <div className="header-search-inner">
//         <div className="text-wrapper">
//           <TextField
//             id="text"
//             name="text"
//             placeholder="What are you looking for..."
//             variant="outlined"
//             // value={query}
//             // onChange={(e) => setquery(e.target.value)}
//           />

//           {/* {openSearchResult && ( */}

//           {/* <div className="product-listing">
//                         {bookList?.length === 0 && (
//                           <p className="no-product">No product found</p>
//                         )} */}

//           {/* <p className="loading">Loading....</p> */}
//           {/* <List className="related-product-list">
//                           {bookList?.length > 0 &&
//                             bookList.map((item, i) => {
//                               return (
//                                 <ListItem key={i}>
//                                   <div className="inner-block">
//                                     <div className="left-col">
//                                       <span className="title">{item.name}</span>
//                                       <p>{item.description}</p>
//                                     </div>
//                                     <div className="right-col">
//                                       <span className="price">
//                                         {item.price}
//                                       </span>
//                                       <Link onClick={() => addToCart(item)}>
//                                         Add to cart
//                                       </Link>
//                                     </div>
//                                   </div>
//                                 </ListItem>
//                               );
//                             })}
//                         </List>
//                       </div> */}

//           {/* )} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBox;
