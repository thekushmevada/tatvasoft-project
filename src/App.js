import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import SearchBox from "./components/SearchBox";
import EditBook from "./components/EditBook";
import { AuthWrapper } from "./context/auth";
import UpdateUser from "./components/UpdateUser";
import AddBook from "./components/AddBook";
import { CartContextProvider } from "./context/CartContext";
import { Provider } from "react-redux";
import store from "./state/store";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Provider store={store}>
        <AuthWrapper>
        <CartContextProvider>
        <GlobalStyle />
        <Header />
        <SearchBox />
        <Routes>
          <Route path="/" element={localStorage.getItem("Shared.LocalStorageKeys.USER") ? <Products/> : <Home/>}  />
          <Route path="/books" element={localStorage.getItem("Shared.LocalStorageKeys.USER") ? <Products/> : <Home/>} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/editbooks" element={<EditBook/>} />
          <Route path="/updateuser" element={localStorage.getItem("Shared.LocalStorageKeys.USER") ? <UpdateUser /> : <ErrorPage />} />
          <Route path="/addbook" element={<AddBook />} />
        </Routes>
        <Footer />
        </CartContextProvider>
        </AuthWrapper>
        </Provider>
      </Router>
    </ThemeProvider>
  );
};

export default App;


