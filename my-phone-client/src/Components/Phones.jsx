import React from "react";
import { useLoaderData } from "react-router-dom";

const Phones = () => {
  const phones = useLoaderData();
  return <div>all phones here: {phones.length}</div>;
};

export default Phones;
