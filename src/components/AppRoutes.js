import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";
import {Outlet} from "react-router-dom";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home/>}/>
          <Route path="category" element={<Category/>}/>
          <Route path="category/:productLink" element={<Product/>}/>
        </Route>
      </Routes>
      <Outlet/>
    </>
  );
};

export default AppRoutes;