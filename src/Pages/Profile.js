import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Profile() {
  //dinh nghia navigate de chuyen doi giua cac component in react-router v6
  let navigate = useNavigate();
  let { username } = useParams();

  function handleChangeAboutPage() {
    navigate("/about");
  }

  return (
    <div>
      This is the Profile Page for {username} Component!{" "}
      <button onClick={() => handleChangeAboutPage()}>
        Change To About Page
      </button>
    </div>
  );
}

export default Profile;
