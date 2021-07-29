import React, { FC } from 'react';
import './Input.scss';

type PropsType = {
  placeholder: string
}

const Input: FC<PropsType> = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="input"
    />
  );
};

export default Input;
