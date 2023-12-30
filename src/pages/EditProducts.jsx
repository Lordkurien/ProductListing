import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProductAction } from "../actions/actionsProduct.js";

const EditProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: 0,
  });
  
  const editproduct = useSelector((state) => state.products.editproduct);
  // if (!product) return null;

  useEffect(() => { 
    setProduct(editproduct);
  }, [editproduct]);
  
  const onChangeForm = (e) => {
    setProduct({
      ...product,
      [e.target.name] : e.target.value,
    });
  };

  const { name, price } = product;

  const submitEditProduct = (e) => {
    e.preventDefault();

    dispatch(editProductAction(product));
    navigate("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">Edit Product</h2>

            <form onSubmit={submitEditProduct}>
              <div className="form-group">
                <label htmlFor="name">Product Name</label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={onChangeForm}
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
                  onChange={onChangeForm}
                />
              </div>

              <input
                type="submit"
                value={"Save"}
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProducts;
