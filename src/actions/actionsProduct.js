import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    DOWNLOAD_PRODUCTS,
    DOWNLOAD_PRODUCTS_SUCCESS,
    DOWNLOAD_PRODUCTS_ERROR,
    DELETE_PRODUCTS,
    DELETE_PRODUCTS_SUCCESS,
    DELETE_PRODUCTS_ERROR,
} from "../types";
import axiosClient from "../config/axios";
import Swal from "sweetalert2";

export function createNewActionProduct(product) {
    return async(dispatch) => {
        dispatch(addProduct());

        try {
            await axiosClient.post("/products", product);
            dispatch(addProductSuccess(product));
            
            Swal.fire(
                "Success",
                "The product was added successfully",
                "success"
            )
        } catch (error) {
            console.log(error);
            dispatch(addProductError(true));

            Swal.fire({
                icon: "error",
                title: "There was an error",
                text: "Try again"
            })
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
});

const addProductSuccess = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
});

const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
});

export function getProductsAction() {
    return async (dispatch) => {
        dispatch(downloadProducts());

        try {
            const response = await axiosClient("/products");
            dispatch(downloadProductsSuccess(response.data));
        } catch (error) {
            console.log(error);
            dispatch(downloadProductsError());
        }
    }
}

const downloadProducts = () => ({
    type: DOWNLOAD_PRODUCTS,
    payload: true,
});

const downloadProductsSuccess = products => ({
    type: DOWNLOAD_PRODUCTS_SUCCESS,
    payload: products
});

const downloadProductsError = () => ({
    type: DOWNLOAD_PRODUCTS_ERROR,
    payload: true
});

export function deleteProductsAction(id) {
    return async (dispatch) => {
        dispatch(getProductDelete(id));

        try {
            await axiosClient.delete(`/products/${id}`);
            dispatch(deleteProductsSuccess());

            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
            
        } catch (error) {
            console.log(error);
            dispatch(deleteProductError());
        }
    }
}

const getProductDelete = (id) => ({
    type: DELETE_PRODUCTS,
    payload: id
});

const deleteProductsSuccess = () => ({
    type: DELETE_PRODUCTS_SUCCESS,
});

const deleteProductError = () => ({
    type: DELETE_PRODUCTS_ERROR,
    payload: true
});





    
