import axios from "axios";
import { useState } from "react";
import "../styles/Blog.scss";

const AddNewBlog = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmitBtn = async (event) => {
    event.preventDefault();
    // console.log(">>> check data state on add new blog form: ", title, content);
    /**
     * Validate gia tri bang rong, bang null, bang undefined
     */
    if (title === "" || title === null || title === undefined) {
      alert("Empty title. Please Input again!");
      /**
       * Dung cau lenh return khi validate xong cai nay thi ket thuc lun chu khong chay tiep
       */
      return;
    }
    /**
     * Khi dung dau cham than thi no validate lun 3 cai o tren
     */
    if (!content) {
      alert("Empty content. Please Input again!");
      /**
       * Dung cau lenh return khi validate xong cai nay thi ket thuc lun chu khong chay tiep
       */
      return;
    }

    let data = {
      title: title,
      body: content,
      userId: 1,
    };

    let res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    if (res && res.data) {
      let newBlogs = res.data;
      props.handleAddNew(newBlogs);
      // console.log(">>> check new blog data: ", newBlogs);
    }

    // console.log(
    //   ">>> check data state before adding on add new blog form: ",
    //   title,
    //   content
    // );
  };

  return (
    <>
      <div className="add-new-container">
        {/* form submit chuan trong js, onSubmit chinh la noi controlled form */}
        <form onSubmit={(event) => handleSubmitBtn(event)}>
          <div className="text-add-new">----Add New Blog-----</div>
          <div className="inputs-data">
            <label>Title: </label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              // bien event la cua web api dc dinh nghia san
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div className="inputs-data">
            <label>Content: </label>
            <input
              type="text"
              placeholder="Content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </div>

          {/* <button className="btn-add-new" onClick={() => handleSubmitBtn()}>
          Submit
        </button> */}

          <button className="btn-add-new" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNewBlog;
