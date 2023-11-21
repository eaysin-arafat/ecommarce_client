import { Link, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const DropDownLogIn = ({ setDropDown, clearCartButtons }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
    navigate("/");
  };

  return (
    <div className="absolute top-[50px] -left-5 bg-transparent p-2 pl-3 rounded-md z-50 shadow-lg w-[120px]">
      <ul className="flex flex-col gap-2 items-start justify-center capitalize">
        <li>
          <Link
            to="/products"
            className="flex items-center gap-1"
            onClick={() => setDropDown(false)}
          >
            All Products
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-1"
            onClick={() => setDropDown(false)}
          >
            dashboard
          </Link>
        </li>
        <li>
          <div
            onClick={() => {
              handleLogOut();
              clearCartButtons();
            }}
          >
            Logout
          </div>
        </li>
      </ul>
    </div>
  );
};