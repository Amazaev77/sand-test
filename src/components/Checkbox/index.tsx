import React, { FC } from 'react';
import check from "../../icons/check.svg";
import './Checkbox.scss';

type onChangeType = () => void

type PropsType = {
  id: number | string
  checked: boolean
  onChange: onChangeType
}

const Checkbox: FC<PropsType> = ({ id, checked, onChange}) => {
  return (
    <div className="checkbox">
      <input
        id={`${id}`}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={`${id}`}>
        <img src={check} alt="check" />
      </label>
    </div>
  );
};

export default Checkbox;
