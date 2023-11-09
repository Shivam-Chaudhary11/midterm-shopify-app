import { BsFillCartFill } from "react-icons/bs";
import Stars from "./Stars";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist, deleteFromCart } from "../redux/CartSlice";
import { MdDeleteForever } from "react-icons/md";

function Product({ data }) {
  const { id, title, price, image, rating } = data;

  let productPrice = price;

  let roundPrice = (Math.floor(productPrice * 100) / 100).toFixed(2);

  const priceString = String(roundPrice);
  const priceArr = priceString.split("");
  const mainPrice = priceArr.slice(0, priceArr.indexOf("."));
  const subPrice = priceArr.slice(priceArr.indexOf(".") + 1);

  const heart = useRef();
  const atcBtn = useRef();

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let isItemInCart = cart.cartItems.find((item) => item.id === id);
  let isItemInWish = cart.wishListItems.find((item) => item.id === id);

  function handleHeartClick() {
    dispatch(addToWishlist(data));
  }

  function handleAtClick() {
    if (atcBtn.current.innerText === "Add to Cart") {
      dispatch(addToCart(data));
    } else {
      dispatch(deleteFromCart(data));
    }
  }

  return (
    <>
      <div style={{ margin: "1rem" }} className="col-xs-auto">
        <div className="card h-100" style={{ width: "14.7rem" }}>
          <div className="productHeartDivContainer">
            <div
              className="productHeartDiv"
              ref={heart}
              onClick={handleHeartClick}
            >
              <FaHeart
                size={"1.3rem"}
                className={isItemInWish ? "productHeart" : null}
              />
            </div>
          </div>
          <div className="imageContainingDiv">
            <Link to={"/products/" + id}>
              <img
                src={image}
                className="card-img-top productImgMain"
                alt={title}
              />
            </Link>
          </div>
          <div className="card-body">
            <h6 style={{ display: "flex", gap: "0.2rem" }}>
              Brand,
              <p className="card-title allProductTitle">{title}</p>
            </h6>
            <Stars stars={rating.rate} reviews={rating.count} />
            <div className="productPriceDiv">
              <p className="dollarSign">$</p>
              <p className="mainPrice">{mainPrice}</p>
              <p className="subPrice">{subPrice}</p>
            </div>
            <button
              id="b"
              onClick={handleAtClick}
              ref={atcBtn}
              className={
                isItemInCart
                  ? "btn redBtn addToCartBtnInAllProducts "
                  : "btn blueBtn addToCartBtnInAllProducts"
              }
            >
              {isItemInCart ? (
                <MdDeleteForever size={"20px"} />
              ) : (
                <BsFillCartFill size={"20px"} />
              )}
              {isItemInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Product;
