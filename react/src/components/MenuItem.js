import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ id, image, name, price }) {
  return (
    <div className="menuItem">
      <Link to={`/menu/${id}`}>
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1>
        <p> ${price} </p>
      </Link>
    </div>
  );
}

export default MenuItem;
