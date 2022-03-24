import axios from "axios";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyErrorComponent from "./MyErrorComponent";

const ToasterScreen = () => {
  const navigate = useNavigate();

  const defaultToaster = () => {
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );
    // toast.promise(resolveAfter3Sec, {
    //   pending: "Promise is pending",
    //   success: "Promise resolved 👌",
    //   error: "Promise rejected 🤯",
    // });

    toast.promise(resolveAfter3Sec, {
      pending: {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        render() {
          return "I'm loading";
        },
        icon: true,
      },
      success: {
        render({ data }) {
          return navigate("/testPage");
        },
        // other options
        icon: "🟢",
      },
      error: {
        render({ data }) {
          // When the promise reject, data will contains the error
          return <MyErrorComponent message={data.message} />;
        },
      },
    });
  };

  return (
    <>
      <div className="container mt-3">
        <ToastContainer />
        <Card className="shadow">
          <Card.Title>All Toasters </Card.Title>
          <Card.Body>
            <div className="row">
              <div className="col-3">
                <Button
                  className="btn btn-default"
                  onClick={() => defaultToaster()}
                >
                  Default Toaster
                </Button>
              </div>
              <div className="col-3"></div>
              <div className="col-3"></div>
              <div className="col-3"></div>
              <div className="col-3"></div>
              <div className="col-3"></div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ToasterScreen;
