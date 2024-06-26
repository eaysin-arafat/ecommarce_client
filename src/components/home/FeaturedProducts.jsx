/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Error } from "../core/Error";
import { useEffect } from "react";
import { allProducts } from "../../features/products/productApiSlice";
import { Loading } from "../core/Loading";
import { Product } from "../products/Product";

export const FeaturedProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allProducts());
  }, []);

  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useSelector((state) => state.product);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <section className="section bg-grey-10">
      <div className="title mb-16">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>

      <div className="section-center my-16 mx-auto gird gap-10 lg:grid lg:grid-cols-3">
        {featured.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link
        to="/products"
        className="btn !block w-[148px] my-0 mx-auto !text-center mt-16"
      >
        all products
      </Link>
    </section>
  );
};
