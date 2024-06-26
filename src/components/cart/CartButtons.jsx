/* eslint-disable react/prop-types */
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSidebarClose } from "../../features/products/productSlice";
import { setCartTotals, setClearCartItem } from "../../features/cart/cartSlice";
import { useEffect, useRef, useState } from "react";
import { IoMdPerson } from "react-icons/io";
import { getUser } from "../../features/user/userApiSlice";
import { DropDownLogIn } from "../login/DropDownLogIn";

export const CartButtons = ({ style }) => {
  const [dropDown, setDropDown] = useState(false);
  const dispatch = useDispatch();
  const { total_items, cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const token = JSON.parse(sessionStorage.getItem("token"));
  const menuRef = useRef();
  const toggleRef = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== menuRef.current && e.target !== toggleRef.current) {
      setDropDown(false);
    }
  });

  useEffect(() => {
    dispatch(setCartTotals());
    localStorage.setItem("cart", JSON.stringify(cart));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  useEffect(() => {
    if (token) {
      dispatch(getUser());
    }
  }, [token, dispatch]);

  const closeSidebar = () => {
    dispatch(setSidebarClose());
  };

  const clearCartButtons = () => {
    dispatch(setClearCartItem());
  };

  return (
    <div className={`${style}`}>
      <Link
        to="/cart"
        className="cart-btn text-grey-1 text-lg font-semibold leading-loose flex items-center"
        onClick={closeSidebar}
      >
        Cart
        <span className="cart-container flex items-center relative">
          <FaShoppingCart className="h-[1.6rem] ml-[5px]" />
          <span className="cart-value absolute -top-[10px] -right-4 bg-primary-5 w-4 h-4 flex items-center justify-center rounded-full text-xs text-white p-3">
            {total_items}
          </span>
        </span>
      </Link>

      <div>
        <button
          className="auth-btn flex items-center bg-transparent border-transparent text-base cursor-pointer text-grey-1 leading-loose font-semibold relative whitespace-nowrap"
          onClick={() => {
            setDropDown(!dropDown);
          }}
          ref={menuRef}
        >
          {user.name || "Eaysin"}
          <IoMdPerson size="30px" className="ml-[5px]" />
          {/* toggle logout */}
          {dropDown && (
            <div ref={toggleRef}>
              <DropDownLogIn
                clearCartButtons={clearCartButtons}
                setDropDown={setDropDown}
              />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};
