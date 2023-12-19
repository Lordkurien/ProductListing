import { useState } from "react";
import { createNewActionProduct } from "../actions/actionsProduct.js";
import { useDispatch, useSelector } from "react-redux";

const NewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct
