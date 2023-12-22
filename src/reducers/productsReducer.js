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

const initialState = {
    products: [],
    error: false,
    loading: false,
    deleteproduct: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DOWNLOAD_PRODUCTS:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case DELETE_PRODUCTS_ERROR:
        case DOWNLOAD_PRODUCTS_ERROR:
        case ADD_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case DOWNLOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                products: action.payload
            }
        case DELETE_PRODUCTS:
            return {
                ...state,
                deleteproduct: action.payload,
            }
        case DELETE_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== state.deleteproduct),
                deleteproduct: null
            }
        default:
            return state;
    }
}

