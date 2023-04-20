import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();

  const product = products.find((item) => item.id === productId);
  console.log(product);

  const { image, name } = product;

  return (
    <section className="section product">
      <h2>{name}</h2>
      <img src={image} alt={name} className="img" />
      <Link to="/products" className="btn">
        All Products
      </Link>
    </section>
  );
};

export default SingleProduct;
