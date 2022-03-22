import { useNavigate, useParams } from "react-router-dom";
import useCovidFetch from "../customize/covidFetch";
import "../styles/Blog.scss";

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

  const {
    data: dataBlogDetail,
    isLoading,
    isError,
  } = useCovidFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);

  console.log(">>> check blog details ", dataBlogDetail);

  return (
    <>
      <div>
        <span onClick={() => handleBackData()}>&lt; -- Back</span>
      </div>
      <h1>Hello Detail blogs with id = {id}</h1>

      <div className="blog-detail">
        {dataBlogDetail && (
          <>
            <div className="title">
              Blog Id:{id} ---{" "}
              {isLoading === true ? "Loading data..." : dataBlogDetail.title}
            </div>
            <div className="content">{dataBlogDetail.body}</div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailBlog;
