import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

interface MyBook {
  title: string;
  author: string;
  price: string;
  imgUrl: string;
}

export default function AllBooks() {
  const [bookData, setBookData] = useState<MyBook[]>([]);

  useEffect(() => {
    axios
      .get<MyBook[]>("http://localhost:8080/uday-publications/book/get/all")
      .then((res) =>
        //console.log("result--->"+res.data)
        setBookData(res.data)
      );
  }, []);

  return (
    <div>
      <NavBar />

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {bookData.map((eachBook) => (
          <div className="col">
            <div className="card h-100">
              <img height="300px" width="300px"

              src={eachBook.imgUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{eachBook.title}</h5>
                <p className="card-text">Author:{eachBook.author}</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Rs.{eachBook.price}/-</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
