import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  let params = useParams();

  console.log(params.productId);

  return (
    <div>
      {" "}
      <section>
        <h1>Product Detail</h1>
        <p>{params.productId}</p>
      </section>
    </div>
  );
}

export default ProductDetail;
