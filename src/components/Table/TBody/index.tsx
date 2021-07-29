import React, { FC, useEffect } from 'react';
import TableItem from "./TableItem";
import './TBody.scss';
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../../redux/ducks/products";

const TBody: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const products = useTypedSelector(state => state.products.data)
  const loading = useTypedSelector(state => state.products.loading)
  const error = useTypedSelector(state => state.products.error)

  if (error) {
    return <h2>Не удалось загрузить данные</h2>
  }

  if (loading) {
    return <>
      {new Array(10).fill('').map((_, idx) => (
        <div key={idx} className="skeleton" />
      ))}
    </>
  }

  return (
    <div className="table__tbody">
      {products.map((product) => (
        <TableItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default TBody;
