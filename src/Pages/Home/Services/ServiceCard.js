import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({service}) => {
    const {_id, img, price, title} = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
        <p className="text-xl text-orange-600 font-semibold">Price: {price}</p>
          <Link to={`/checkout/${_id}`}>
          <button className="btn btn-xs rounded">❯</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
