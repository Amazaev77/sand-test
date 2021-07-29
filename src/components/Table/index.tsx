import React, {FC, useEffect, useState} from 'react';
import './Table.scss';
import TBody from "./TBody";
import Checkbox from "../Checkbox";
import { useDispatch } from "react-redux";
import { checkAllItem } from "../../redux/ducks/products";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Table: FC = () => {
  const dispatch = useDispatch();

  const data = useTypedSelector(state => state.products.data)

  const isCheckedAllItem = data.every((el) => el.checked)

  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    setCheckAll(data.length > 0 ? isCheckedAllItem : false)
  }, [isCheckedAllItem, data.length])

  const handleChangeCheckbox = () => {
    dispatch(checkAllItem(checkAll))
  }

  return (
    <div className="table">
      <div className="table__header">
        <div className="table__title">
          Order catalogue
        </div>
        <div className="table__checkbox-all">
          <Checkbox
            id="all-checkbox"
            checked={checkAll}
            onChange={handleChangeCheckbox}
          />
        </div>
      </div>
      <div className="table__thead">
        <div>#</div>
        <div>Product</div>
        <div>Serial-code</div>
        <div>Stock</div>
        <div>Category</div>
        <div>Actions</div>
      </div>
      <TBody />
    </div>
  );
};

export default Table;
