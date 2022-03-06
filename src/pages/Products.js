import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Products() {
  let navigate = useNavigate();
  // navigate("/welcome", { replace: true });
  // navigate(-1); // quay tro lai trang truoc
  // navigate(-2); // quay tro lai trang truoc truoc
  // navigate(1); //chuyen tien len 1 trang

  // cung cap so trong navigate(number): giup chi ro so luong trang ma ban muon di chuyen(am la tro ve trang truoc, duong la tien len trang riep theo)
  return (
    <div>
      <section>
        <h1>The Products Page</h1>
        <ul>
          <li>
            <Link to="/products/p1">A Book</Link>
          </li>
          <li>
            <Link to="/products/p2">A Carpet</Link>
          </li>
          <li>
            <Link to="/products/p3">An Online Course</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Products;
