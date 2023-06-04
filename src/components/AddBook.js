import React, { useState } from "react";
import ErrorPage from "../ErrorPage";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";
// import ImageCompressor from "image-compressor";

const AddBook = () => {
  const y = JSON.parse(localStorage.getItem("Shared.LocalStorageKeys.USER"));
  const [category, setCategory] = useState([]);
  // const [base64Image, setBase64Image] = useState('');
  const [state, setState] = useState({
    name: "",
    description: "",
    price: "",
    categoryId: "",
    base64image: "",
  });

  // const compressImage = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const compressor = new ImageCompressor();

  //     compressor.compress(file, {
  //       quality: 0.2, // Adjust the quality as desired (0.1 to 1)
  //       maxWidth: 800, // Adjust the maximum width as desired
  //       maxHeight: 800, // Adjust the maximum height as desired
  //       success(result) {
  //         resolve(result);
  //       },
  //       error(error) {
  //         reject(error);
  //       },
  //     });
  //   });
  // };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    // console.log("file size", file.size / 1024);

    if (file.size < 51200) {
      reader.onloadend = () => {
        // console.log("Hello3");
        const base64String = reader.result;
        // console.log(base64String);
        setState({ ...state, base64image: base64String });
        
      };
    } else {
      toast.error('File size must be less than 40kb!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

        
      // try {
      //   const compressedFile = await compressImage(file);
      //   console.log("Hello");
      //   console.log("Compressed file:", compressedFile);
      // } 
      // catch (error) {
      //   console.log("Hello2");
      //   console.error("Error compressing image:", error);
      // }
    }

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    axios
      .get("https://book-e-sell-node-api.vercel.app/api/category/all")
      .then((response) => {
        // console.log(response);
        setCategory(response.data.result);
        
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://book-e-sell-node-api.vercel.app/api/book", state)
      .then((response) => {
        console.log(response);
        toast.info("Book posted Succesfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        const timer = setTimeout(() => {
          window.location.href = "/books";
        }, 400);
        return () => clearTimeout(timer);
      });
  };

  if (y.data.result.role === "seller") {
    return (
      <Wrapper>
        <h2 className="intro-data common-heading">Add Book</h2>
        <div className="container">
          <hr />
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="contact-inputs">
              <div className="grid grid-two-column jagya">
                <input
                  type="text"
                  placeholder="book name"
                  name="name"
                  required
                  autoComplete="off"
                  onChange={(e) => setState({ ...state, name: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="book price"
                  name="price"
                  required
                  autoComplete="off"
                  onChange={(e) =>
                    setState({ ...state, price: e.target.value })
                  }
                />
              </div>
              <div className="grid grid-two-column jagya">
                <select
                  onChange={(e) =>
                    setState({ ...state, categoryId: e.target.value })
                  }
                >
                  <option selected disabled hidden>Choose category</option>
                  {category.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {" "}
                      {cat.name}
                    </option>
                  ))}
                </select>
                <div className="flexbox">
                  <input
                    name="base64image"
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                  />
                </div>
              </div>
              <div>
                <textarea
                placeholder="book description"
                  rows="5"
                  cols="50"
                  name="description"
                  onChange={(e) =>
                    setState({ ...state, description: e.target.value })
                  }
                />
              </div>
              <input type="submit" />
            </form>
          </div>
        </div>
        <ToastContainer />
      </Wrapper>
    );
  } else {
    return <ErrorPage />;
  }
};

const Wrapper = styled.section`
  padding: 5rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 3rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        width:100p
        display: flex;
        flex-direction: column;
        gap: 3rem;

        .jagya {
          margin: 8px;
        }

        .flexbox {
          display: flex;
          flex-direction: row;
        }
        .sort-selection--style {
          max-width : 50rem;
          // padding: 0.5rem;
          cursor: pointer;
          .sort-select--option {
            padding: 0.5rem 0;
            cursor: pointer;
            height: 1rem;
            padding: 10px;
          }

          .label-size{
            text-size : 3rem;
          }

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default AddBook;
