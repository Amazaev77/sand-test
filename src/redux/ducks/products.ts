import { ProductAction, ProductsActionTypes, ProductState } from "../types/products";
import { Dispatch } from "react";
import axios from "axios";

const initialState: ProductState = {
  data: [],
  loading: true,
  error: false
}

export default function reducer(state = initialState, action: ProductAction) {
  switch (action.type) {
    case ProductsActionTypes.LOAD_PRODUCTS_STARTED:
      return {
        ...state,
        loading: true,
        error: false
      }
    case ProductsActionTypes.LOAD_PRODUCTS_SUCCEEDED:
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    case ProductsActionTypes.LOAD_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        error: true
      }
    case ProductsActionTypes.SWITCH_CHECK_ITEM:
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.payload) {
            return {...item, checked: !item.checked}
          }
          return item;
        })
      }
    case ProductsActionTypes.CHECKED_ALL_ITEM:
      return {
        ...state,
        data: state.data.map(item => {
          return { ...item, checked: !action.payload }
        })
      }
    default:
      return state;
  }
}

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    dispatch({ type: ProductsActionTypes.LOAD_PRODUCTS_STARTED })
    try {
      const api = 'https://sand-test-f27aa-default-rtdb.firebaseio.com/'

      const { data } = await axios.get(api + 'products.json');

      dispatch({
        type: ProductsActionTypes.LOAD_PRODUCTS_SUCCEEDED,
        payload: Object.keys(data).map(key => ({ ...data[key], id: key }))
      })
    } catch (e) {
      dispatch({ type: ProductsActionTypes.LOAD_PRODUCTS_FAILED })
    }
  }
}

export const switchCheckItem = (id: number | string): ProductAction => {
  return {
    type: ProductsActionTypes.SWITCH_CHECK_ITEM,
    payload: id
  }
}

export const checkAllItem = (checkAll: boolean): ProductAction => {
  return {
    type: ProductsActionTypes.CHECKED_ALL_ITEM,
    payload: checkAll
  }
}

