//import React from "react";
import { useState } from 'react';
import '../css/add-book.css'

export default function AddBook() {

    const[title,setTitle] = useState('');

const saveIntoDB = ()=>{

    console.log("confirm pressed!!!!!");
    console.log("title--->"+title);
};

const getTitle =(e:any)=>{
    setTitle(e.target.value);
};


  return (
    <div>
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
                      className="form-control"
                      type="text"
                      placeholder="Price"
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <button onClick={saveIntoDB}
            className="btn btn-primary btn-block confirm-button">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

