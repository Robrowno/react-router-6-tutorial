import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <h2>404 Error!</h2>
      <p>Page not found.</p>
      <Link to="/" className="btn">
        Return Home
      </Link>
    </section>
  );
};
export default Error;
