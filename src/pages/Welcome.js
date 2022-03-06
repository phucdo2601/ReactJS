import React from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";

function Welcome() {
  /**
   * muon dung long tuyen duong react-router v6, thi phai them Routes, dung phuong phap nay
   *  <Routes>
        <Route path="/welcome/new-user" element={<p>Welcome new user!</p>} />
      </Routes>
      viec nhu vay no van chua hoat dong, su thay doi phai bat dau tu Routes me 
      --O component xu ly thi khong can co ten component neu su dung router long (Tuong tu voi Link khi dung Routes long cung vay,
          su dung uong dan tuong doi o class xu ly, va chi ghi duong dan tuyet doi o class me)
          --Them Oulet o class componet xu ly de bao cho no biet day la componet long nhau

   */

  return (
    <div>
      <section>
        <h1>The Welcome Page</h1>
        <Link to="new-user">New User</Link>

        {/* <Routes>
          <Route path="new-user" element={<p>Welcome new user!</p>} />
        </Routes> */}

        <Outlet />
      </section>
    </div>
  );
}

export default Welcome;
