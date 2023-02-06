import React, { useContext } from "react";
import { DataAPIContext } from "../../App";

//Components Imported
import Product from "./Product";

//CSS Imported
import "./shop.css";

function Shop() {
  const { data } = useContext(DataAPIContext);
  return (
    <div className="content-bg">
      <div className="container">
        <div className="content-con">
          <div className="content-header">
            <h1>ค้นหาหนังที่คุณชอบ</h1>
          </div>
          <div className="content-movie">
            <div className="content-movie-grid">
              {data.map((product, index) => (
                <div key={index}>
                  <Product data={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
