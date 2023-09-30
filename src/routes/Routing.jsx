import React from "react";
import { Routes, Route } from "react-router";
import { routes } from ".";

const Routing = () => {
  return (
    <Routes>
      {routes.map(({ id, path, element }) => (
        <Route key={id} path={path} element={element} />
      ))}
    </Routes>
  );
};
export default Routing