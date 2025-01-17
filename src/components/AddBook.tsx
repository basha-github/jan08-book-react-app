//import React from "react";
import { useState } from "react";
import "../css/add-book.css";
import axios from "axios";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [imgUrl, setImgUrl] = useState("");

const allBooksNav = useNavigate();


  const saveIntoDB = () => {
    console.log("confirm pressed!!!!!");
    console.log("title--->" + title);
    console.log("Price--->" + price);
    console.log("Author--->" + author);
    console.log("ImagURL--->" + imgUrl);

    const book = { title: title, price: price, author: author,
      imgUrl:imgUrl
     };

    axios
      .post("http://localhost:8080/uday-publications/book/add", book)
      .then((res) => {
        console.log(res);
        allBooksNav("/all");
      });
  };

  const getTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const getPrice = (e: any) => {
    setPrice(e.target.value);
  };
  const getAuthor = (e: any) => {
    setAuthor(e.target.value);
  };

  const getImgUrl = (e: any) => {
    setImgUrl(e.target.value);
  };

  return (
    <div>
      <NavBar />
      <div className="container mt-5 mb-5 d-flex justify-content-center">
        <div className="card px-1 py-4">
          <div className="card-body">
            <h6 className="information mt-4">
              Please provide following information about Book Info
            </h6>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <input
                    onChange={getTitle}
                    className="form-control"
                    type="text"
                    placeholder="BookTitle"
                  />{" "}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <div className="input-group">
                    <input
                      onChange={getAuthor}
                      className="form-control"
                      type="text"
                      placeholder="BookAuthor"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <div className="input-group">
                    <input
                      onChange={getPrice}
                      className="form-control"
                      type="text"
                      placeholder="Price"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <div className="input-group">
                    <input
                      onChange={getImgUrl}
                      className="form-control"
                      type="text"
                      placeholder="Image URL"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <br />
            <button
              onClick={saveIntoDB}
              className="btn btn-primary btn-block confirm-button"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
