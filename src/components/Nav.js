import React, { useState , useContext} from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { Button } from "../styles/Button";
import { ToastContainer, toast } from "react-toastify";
import { useAuthContext } from "../context/auth";
import { CartContext } from "../context/CartContext";

const Nav = () => {
  const [menuIcon, setMenuIcon] = useState();
  const authContext = useAuthContext();
  const { numberOfItems } = useContext(CartContext);
  const y = JSON.parse(localStorage.getItem("Shared.LocalStorageKeys.USER"));

  const Nav = styled.nav`
    .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;
z-index: 999;

      li {
        list-style: none;
      }

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }

        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

    .close-outline {
      display: none;
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }

      .cart-total--item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      .mobile-navbar-btn {
        display: inline-block;
        z-index: 9999;
        border: ${({ theme }) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          color: ${({ theme }) => theme.colors.black};
        }
      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({ theme }) => theme.colors.black};
        z-index: 9999;
      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform-origin: top; */
        transition: all 3s linear;
      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transform-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 4.2rem;
        }
      }
      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item {
          width: 4.2rem;
          height: 4.2rem;
          font-size: 2rem;
        }
      }

      .user-logout,
      .user-login {
        font-size: 2.2rem;
        padding: 0.8rem 1.4rem;
      }
    }
  `;

  return (
    <Nav>
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          {localStorage.getItem("Shared.LocalStorageKeys.USER") ? (
            <li>
              <NavLink
                to="/updateuser"
                className="navbar-link"
                onClick={() => setMenuIcon(false)}
              >
                Update User
              </NavLink>
            </li>
          ) : null}

          {localStorage.getItem("Shared.LocalStorageKeys.USER") ? (
            <li>
              {y.data.result.role === "seller" ? (
                <li>
                  <NavLink
                    to="/editbooks"
                    className="navbar-link"
                    onClick={() => setMenuIcon(false)}
                  >
                    Books
                  </NavLink>
                </li>
              ) : null}
            </li>
          ) : null}

          {localStorage.getItem("Shared.LocalStorageKeys.USER") ? (
            <li>
              <Button
                onClick={() => {
                  setMenuIcon(false);
                  authContext.signOut();

                  toast.info("Logged out Succesfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });

                  window.location.href = "./";
                }}
              >
                Log Out
              </Button>
            </li>
          ) : (
            <li>
              <Button
                onClick={() => {
                  setMenuIcon(false);
                  window.location.href = "./register";
                }}
              >
                SignUp
              </Button>
            </li>
          )}

          {/* <p>|</p> */}

          {localStorage.getItem("Shared.LocalStorageKeys.USER") ? null : (
            <li>
              <Button
                onClick={() => {
                  setMenuIcon(false);
                  window.location.href = "./";
                }}
              >
                Login
              </Button>
            </li>
          )}

          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item"> {numberOfItems} </span>
            </NavLink>
          </li>
        </ul>

        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}
          />
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
      <ToastContainer />
    </Nav>
  );
};

export default Nav;
