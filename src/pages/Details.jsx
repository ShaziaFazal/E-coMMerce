import ProductSection from "../components/ProductSection/ProductSection";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../store/productActions";

const Details = () => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductById("6551d2deea6dd4326a031b86"));
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <DefaultLayout>
      <ProductSection product={product} />
    </DefaultLayout>
  );
};

export default Details;
