import { NavLink } from "react-router-dom";

const MotivationNav = () => {
  return (
    <nav className="header-nav">
      {/* <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Премия
      </NavLink> */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        ДМС
      </NavLink>
      {/* <NavLink
        to="/insurance"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        Страхование от несчастных случаев
      </NavLink> */}
    </nav>
  );
};
export default MotivationNav;
