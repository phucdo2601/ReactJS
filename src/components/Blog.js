import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import useCovidFetch from "../customize/covidFetch";
import "../styles/Blog.scss";
import AddNewBlog from "./AddNewBlog";

const Blog = () => {
  const [show, setShow] = useState(false);

  /**
   * Tao bien moi de add moi mot record (fake data)
   * dang khai bai bien nay la const (hang so - khong the modify lai du lieu cua no)
   */
  const [newData, setNewData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /**
   * API lay du lieu cua blog
   */

  const {
    data: dataBlogs,
    isLoading,
    isError,
  } = useCovidFetch(`https://jsonplaceholder.typicode.com/posts`, false);

  let navigate = useNavigate();

  useEffect(() => {
    if (dataBlogs && dataBlogs.length > 0) {
      let newDataSimple = dataBlogs.slice(0, 10);
      setNewData(newDataSimple);
      console.log(">>> check blog data: ", newData);
    }
  }, [dataBlogs]);

  const handleAddNew = (blog) => {
    // navigate("/add-new-blog");

    /**
     * Add mot record moi (fake data)
     * phai dung cach dan tiep tao mot bien moi gan du lieu cua bien cua da khai bao
     * roi gan lai vo bien cu
     */
    let data = newData;

    data.unshift(blog);
    setShow(false);
    setNewData(data);

    console.log(">>> check add new blog data: ", blog);
  };

  const deletePost = (id) => {
    let data = newData;
    data = data.filter((item) => item.id !== id);
    setNewData(data);
  };

  return (
    <>
      <h1>Hello Blogs</h1>

      <Button variant="primary" className="my-3" onClick={handleShow}>
        Add New Blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlog handleAddNew={handleAddNew} />
        </Modal.Body>
      </Modal>

      <div className="blogs-container">
        {isLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">
                  <span>{item.title} </span>
                  <span onClick={() => deletePost(item.id)}>x</span>
                </div>
                <div className="content">{item.body}</div>
                <button>
                  <NavLink to={`/blogs/${item.id}`}>View Deital</NavLink>
                </button>

                <button></button>
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
