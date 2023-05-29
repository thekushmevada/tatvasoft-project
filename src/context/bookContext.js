import React from "react";

const BookContext = React.createContext();

//provider function
const BookProvider = ({ children }) => {
  return <BookContext.Provider value={"Bookstore"}>{children}</BookContext.Provider>;
};

export { BookContext, BookProvider };
