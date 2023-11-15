import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import {
  AboutPage,
  CheckoutPage,
  HomePage,
  ProductsPage,
  SingleProductPage,
} from "../pages";

export const AllRoutes = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Fragment>
  );
};