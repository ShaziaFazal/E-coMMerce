import ProductSection from "../components/ProductSection/ProductSection";
import DefaultLayout from "../components/layouts/DefaultLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../store/productActions";
import { useParams } from "react-router-dom";

const Details = () => {
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

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
