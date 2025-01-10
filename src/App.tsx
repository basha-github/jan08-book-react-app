//import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "./components/AddBook";
import Login from "./components/Login";
import AllBooks from "./components/AllBooks";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
<Route path="/" element={<Login />} />
<Route path="/add" element={<AddBook />} />
<Route path="/all" element={<AllBooks />} />



      </Routes>
      
      </BrowserRouter>
    </div>
  );
}
