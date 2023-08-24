import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"
import { TodoContext, ShoppingContext } from './MyContext.jsx'

import TodoHome from "./pages/TodoHome";
import Navbar from "./pages/Navbar";
import ShoppingHome from "./pages/ShoppingHome.jsx";
import CheckoutHome from "./pages/CheckoutHome.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "./App.css"


export default function App() {
  const [todos, setTodos] = useState([])
  const [selectedCards, setSelectedCards] = useState([])
  return (
    <div>
      <ToastContainer
        position="top-right"
        className="toast-position"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Navbar selectedCards={selectedCards} />
      <Routes>
        <Route path='/todo' element={
          <TodoContext.Provider value={{ todos, setTodos }} >
            <TodoHome />
          </TodoContext.Provider>
        } />
        <Route path='/shopping' element={
          <ShoppingContext.Provider value={{ selectedCards, setSelectedCards }} >
            <ShoppingHome />
          </ShoppingContext.Provider>
        } />
        <Route path='/checkout' element={
          <ShoppingContext.Provider value={{ selectedCards, setSelectedCards }} >
            <CheckoutHome />
          </ShoppingContext.Provider>
        } />
      </Routes>
    </div>
  );
}