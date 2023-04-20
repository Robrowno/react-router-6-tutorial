import products from "../data";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <section className="section">
        <h2>products</h2>
        <div className="products">
          {products.map((product) => {
            return (
              <article key={product.id}>
                <h3>{product.name}</h3>
                <img className="img" src={product.image} alt={product.name} />
                <Link to={`/products/${product.id}`} className="btn">
                  More Info
                </Link>
                <hr />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
