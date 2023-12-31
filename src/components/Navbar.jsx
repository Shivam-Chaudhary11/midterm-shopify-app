import { RiAccountCircleLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { TbLogin } from "react-icons/tb";
import { FaRegAddressCard } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../componentcss/Navbar.css";

function Navbar() {
  const cart = useSelector((state) => state.cart);

  let totalCartQuantity = 0;
  cart.cartItems.map(
    (eachItem) => (totalCartQuantity += eachItem.itemQuantity)
  );

  return (
    <div className="navbarComp">
      <Link to={"/"} className="shopWord">
        <span>SHOPIFY</span>
      </Link>
      <div className="navbarRight">
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle dropDownBtn"
            href="#"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="dropDownBtnContent">
              <RiAccountCircleLine size={"40px"} />
              <div className="login">
                <span>Login</span>
                <span className="signUp">/ Sign Up</span>
              </div>
            </div>
          </button>

          <div className="dropdown-menu">
            <Link to={"/login"} className="dropdown-item" href="#">
              <TbLogin size={"20px"} />
              Login
            </Link>
            <Link to={"/signup"} className="dropdown-item">
              <FaRegAddressCard size={"18px"} />
              Sign Up
            </Link>
          </div>
        </div>
        <div>
          <Link to={"/favorites"} className="navbarWishDiv">
            <div className="navbarWishIcon">
              <FaHeart/>
            </div>
            <div
              className={cart.wishListItems.length > 0 ? "wishLengthDiv" : null}
            >
              <span className="wishLengthSpan">
                {cart.wishListItems.length > 0
                  ? cart.wishListItems.length
                  : null}
              </span>
            </div>
          </Link>
        </div>
        <div>
          <Link to={"/cartPage"} className="navbarCartDiv">
            <div className="navbarCartIcon">
              <AiOutlineShoppingCart />
            </div>
            <div className={cart.cartItems.length > 0 ? "cartLengthDiv" : null}>
              <span className="cartLengthSpan">
                {cart.cartItems.length > 0 ? totalCartQuantity : null}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
