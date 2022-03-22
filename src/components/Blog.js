import { NavLink, useNavigate } from "react-router-dom";
import useCovidFetch from "../customize/covidFetch";
import "../styles/Blog.scss";

const Blog = () => {
  /**
   * API lay du lieu cua blog
   */

  const {
    data: dataBlogs,
    isLoading,
    isError,
  } = useCovidFetch(`https://jsonplaceholder.typicode.com/posts`, false);

  let navigate = useNavigate();
  let newData = [];

  if (dataBlogs && dataBlogs.length > 0) {
    newData = dataBlogs.slice(0, 10);
    console.log(">>> check blog data: ", newData);
  }

  const handleAddNew = () => {
    navigate("/add-new-blog");
  };

  return (
    <>
      <h1>Hello Blogs</h1>

      <div>
        <button onClick={() => handleAddNew()} className="btn-add-new">
          + Add New Blog
        </button>
      </div>

      <div className="blogs-container">
        {isLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">{item.title}</div>
                <div className="content">{item.body}</div>
                <button>
                  <NavLink to={`/blogs/${item.id}`}>View Deital</NavLink>
                </button>
              </div>
            );
          })}

        {isLoading === true && (
          <div style={{ textAlign: "center !important", width: "100%" }}>
            Loading blog....
          </div>
        )}
      </div>
    </>
  );
};

export default Blog;
