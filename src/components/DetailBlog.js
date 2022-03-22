import { useNavigate, useParams } from "react-router-dom";

const DetailBlog = () => {
  /**
   * Lay ten params(path variable tren url)
   * Phai dat ten trung voi cai ten dat o routes trong class App.js
   */
  let { id } = useParams();
  let navigate = useNavigate();

  const handleBackData = () => {
    navigate("/blogs");
  };

  return (
    <>
      <div>
        <span onClick={() => handleBackData()}>&lt; -- Back</span>
      </div>
      <h1>Hello Detail blogs with id = {id}</h1>
    </>
  );
};

export default DetailBlog;
