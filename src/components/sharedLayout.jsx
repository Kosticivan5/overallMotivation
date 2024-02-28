import { Outlet, Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import MotivationNav from "./MotivationNav";

const SharedLayout = () => {
  return (
    <div className="container">
      <header>
        <a href="https://rbstaff.rosbank.rus.socgen/lk/">
          <button>
            <HiOutlineArrowLeft />
          </button>
          Вернуться в Личный кабинет
        </a>
        <MotivationNav />
      </header>
      <Outlet />
    </div>
  );
};
export default SharedLayout;
