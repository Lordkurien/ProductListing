import { useState } from "react";
import { createNewActionProduct } from "../actions/actionsProduct.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);

  const addProduct = (product) => dispatch(createNewActionProduct(product));
    
  const handleNewProduct = e => {
    e.preventDefault();

    if (name.trim() === "" || price <= 0) {
      return;
    }

    addProduct({
      name,
      price
    });

    navigate("/");
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">New Product</h2>

            <form onSubmit={handleNewProduct}>
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">Product Price</label>
                <input
                  id="price"
                  type="number"
                  className="form-control"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>

              <input
                type="submit"
                value={"Add New Product"}
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              />
            </form>

            {loading ? <p>Loading...</p> : null}
            {error ? (
              <p className="alert alert-danger bg-error p-2 mt-4 text-center">
                There was a error
              </p>
            ) : null}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct
