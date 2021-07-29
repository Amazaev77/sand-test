import React, { FC } from 'react';
import './TableItem.scss';
import { IProduct } from "../../../../redux/types/products";
import { useDispatch } from "react-redux";
import { switchCheckItem } from "../../../../redux/ducks/products";
import Checkbox from "../../../Checkbox";

type PropsType = {
  product: IProduct
}

const TableItem: FC<PropsType> = ({ product }) => {
  const dispatch = useDispatch()

  const handleChangeCheckbox = () => {
    dispatch(switchCheckItem(product.id))
  }

  return (
    <div className="table__item">
      <div>{!product.checked && '003'}</div>
      <div>{!product.checked && product.name}</div>
      <div>{!product.checked && product.serialCode}</div>
      <div>{!product.checked && product.stock}</div>
      <div>{!product.checked && product.category}</div>
      <div>
        <Checkbox
          id={product.id}
          checked={product.checked}
          onChange={handleChangeCheckbox}
        />
      </div>
    </div>
  );
};

export default TableItem;
