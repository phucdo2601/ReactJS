import { useParams } from "react-router-dom";

const DetailBlog = () => {
  /**
   * Lay ten params(path variable tren url)
   * Phai dat ten trung voi cai ten dat o routes trong class App.js
   */
  let { id } = useParams();

  return (
    <>
      <h1>Hello Detail blogs with id = {id}</h1>
      <div></div>
    </>
  );
};

export default DetailBlog;
