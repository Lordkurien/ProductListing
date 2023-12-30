import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import {
  deleteProductsAction,
  getProductEdit,
} from "../actions/actionsProduct";
import Swal from "sweetalert2";

const Product = ({ product }) => {
  const { name, price, id } = product;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteProduct = id => {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success bg-edit",
        cancelButton: "btn btn-danger bg-delete",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteProductsAction(id));
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your Product is safe :)",
            icon: "error",
          });
        }
      });
  }

  const redirectEdit = product => {
    dispatch(getProductEdit(product));
    navigate(`/products/edit/${product.id}`);
  }

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold ">${price}</span>
      </td>
      <td className="acciones">
        <button
          className="btn btn-primary bg-edit bg-edit:hover mr-2"
          type="button"
          onClick={() => redirectEdit(product)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger bg-delete bg-delete:hover "
          type="button"
          onClick={() => deleteProduct(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product
