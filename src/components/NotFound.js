import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigate = useNavigate();

  const handleClickGoHomePage = () => {
    navigate("/");
  };

  return (
    <div className="not-found-container">
      <h4>This Page isn't available</h4>
      <h5>
        Maybe the link is broken or the page has been removed. Please check that
        the link you are trying to open is correct.
      </h5>
      <button
        className="btn btn-warning"
        onClick={() => handleClickGoHomePage()}
      >
        Go to HomePage
      </button>
    </div>
  );
};

export default NotFound;
