import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-between ">
      <div className="container">
        <h1>
          <Link
            to={"/"}
            className="text-light"
          >
            Types of Products
          </Link>
        </h1>
      </div>
      <Link
        className="btn btn-danger new-post d-block d-md-inline-block"
        to={"/products/new"}
      >
        Add Product &#43;
      </Link>
    </nav>
  );
}

export default Header
