import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import Table from "../components/Table";

const Routes: FC = () => {
  return (
    <>
      <Route path="/" exact component={Table}/>
    </>
  );
};

export default Routes;
