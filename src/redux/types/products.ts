export interface IProduct {
  id: number | string
  name: string
  serialCode: string
  stock: number
  category: string
  checked: boolean
}

export interface ProductState {
  data: IProduct[],
  loading: boolean,
  error: boolean,
}

export enum ProductsActionTypes {
  LOAD_PRODUCTS_STARTED = 'LOAD_PRODUCTS_STARTED',
  LOAD_PRODUCTS_SUCCEEDED = 'LOAD_PRODUCTS_SUCCEEDED',
  LOAD_PRODUCTS_FAILED = 'LOAD_PRODUCTS_FAILED',
  SWITCH_CHECK_ITEM = 'SWITCH_CHECK_ITEM',
  CHECKED_ALL_ITEM = 'CHECKED_ALL_ITEM',
}

interface FetchProductsAction {
  type: ProductsActionTypes.LOAD_PRODUCTS_STARTED
}

interface FetchProductsSucceededAction {
  type: ProductsActionTypes.LOAD_PRODUCTS_SUCCEEDED,
  payload: IProduct[]

}

interface FetchProductsFailedAction {
  type: ProductsActionTypes.LOAD_PRODUCTS_FAILED
}

interface SwitchCheckItem {
  type: ProductsActionTypes.SWITCH_CHECK_ITEM
  payload: string | number
}

interface CheckedAllItem {
  type: ProductsActionTypes.CHECKED_ALL_ITEM
  payload: boolean
}

export type ProductAction =
    FetchProductsAction
  | FetchProductsSucceededAction
  | FetchProductsFailedAction
  | SwitchCheckItem
  | CheckedAllItem

