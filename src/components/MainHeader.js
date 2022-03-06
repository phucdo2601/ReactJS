import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* uu diem cua NavLink so voi Link la co the giu dc style trang thai
            khi nhan nut, Link thi khong lam dc 
              - De giu trang thai an nut tren navigation, o v6 dung cuu phap sau:
                <NavLink
                  className={(navData) => (navData.isActive ? classes.active : "")}
                  to="/products"
                 >
                  Products
                </NavLink>
            */}
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/welcome"
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/products"
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
