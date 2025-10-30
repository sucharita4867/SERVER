import React from "react";
import { useLoaderData } from "react-router-dom";

const SinglePhone = () => {
  const phone = useLoaderData();
  console.log(phone);
  return (
    <div>
      <h2>{phone.name} </h2>
      <div className="border border-red-800">
        <figure>
          <img src={phone.image} alt="" />
        </figure>
        <p>Price : {phone.price}</p>
        <p>Description : {phone.description}</p>
      </div>
    </div>
  );
};

export default SinglePhone;
