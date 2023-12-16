
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black justify-content-between ">
      <div className="container">
        <h1>Crud con Redux</h1>
      </div>
      <a
        className="btn btn-danger new-post d-block d-md-inline-block"
        href="/products/new"
      >
        Add Product &#43;
      </a>
    </nav>
  );
}

export default Header
