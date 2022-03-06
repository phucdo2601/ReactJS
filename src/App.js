import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./components/MainHeader";
import { Navigate, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />

      <main>
        {/* o react-router-v6, thay doi Switch thanh Routes 
          Muon goi mot component trong react-router-dom v6, thi phai nhet vo element
          vd: 
           <Route path="/welcome" element={<Welcome />} />
            element={<Welcome />}: phai bo vao dau ngoac nhon de no truyen cai props cua comp do
            o phien ban v6, khong co tu khoa excatl de chi cac duong dan co cung cac thanh to giong nhau
            Them /* tren duong dan vd: <Route path="/products/*" element={<Products />} />
            thi duong dan nay se hoat dong neu URL bat dau bang /products
            Thu tu tuyen duong khong con quan trong to v6, thuat toan o v6 tot hon
            - O phien ban v6, khong ton tai Redirect nua, thay vao do su dung Navigate de chuyen huong:
            <Route path="/" element={<Navigate to="/welcome" />} />
              Co the them replace de cau hinh thay the trang hien tai
              <Route path="/" element={<Navigate replace to="/welcome" />}
              
              />
        */}
        <Routes>
          <Route path="/" element={<Navigate to="/welcome" />} />
          {/* su dung router long thi can chinh
              - them /* dang sau component can tro toi
              vd: <Route path="/welcome/*" element={<Welcome />} />
                -Khi ban khai bao dinh tuyen cac tuyen duong rieng biet ta Route cha: vd: <Route path="new-user" element={<p>Welcome new user!</p>} />
                -Thi ban co the goi no o moi noi trong project
                --Them Oulet o class component xu ly de bao cho no biet day la componet long nhau(Trong truong hop nay thi them Outlet o Welcome.js)
          */}
          <Route path="/welcome/*" element={<Welcome />}>
            <Route path="new-user" element={<p>Welcome new user!</p>} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
