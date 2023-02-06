import React, { useContext } from "react";

import { DataAPIContext } from "../../App";

//CSS Imported
import "./product.css";

const Product = (props) => {
  const { id, poster_path, title, original_title } = props.data;

  const { addToCart } = useContext(DataAPIContext);
  return (
    <div className="movie-content" key={id}>
      <a href="#">
        <img
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`}
          alt={title}
        />
      </a>
      <div className="movie-title">
        <p>{original_title}</p>
      </div>
      <div className="btn-lay">
        <button className="AddToCart" onClick={() => addToCart(id)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
