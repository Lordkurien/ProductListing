import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAction } from "../actions/actionsProduct";
import Product from "./Product";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const downloadProducts = () => dispatch(getProductsAction());
    downloadProducts();
  }, []);

  const products = useSelector(state => state.products.products);
  const error = useSelector(state => state.products.error);
  const loading = useSelector(state => state.products.loading);

  return (
    <>
      <h2 className="text-center my-5">Products List</h2>

      {error ? (
        <p className="font-weight-bold text-center alert alert-danger mt-4">
          There was an error
        </p>
      ) : null}

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : null}

      <table className="table table-striped">
        <thead className="bg-black table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.length === 0 ? (
            <tr>
              <td
                colSpan="3"
                className="text-center"
              >
                There are no products
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <Product
                key={product.id}
                product={product}
              />
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default Products
