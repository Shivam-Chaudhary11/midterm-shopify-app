import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart, removeFromCart } from "../redux/CartSlice";

import { HiMinusCircle, HiPlusCircle } from "react-icons/hi";

import { toast } from "react-toastify";
import "../pagecss/CartPage.css"

function CartItems(props) {
  const { id, title, price, description, category, image, rating } = props.data;
  const cart = useSelector((state) => state.cart);

  const theProduct = cart.cartItems.filter((eachItem) => eachItem.id === id);

  const quantity = theProduct[0].itemQuantity;

  const handleMinusCLick = () => {
    dispatch(removeFromCart(props.data));
    if (theProduct[0].itemQuantity === 1) {
      toast.error(`${title} removed to the cart`, {
        position: "bottom-right",
        autoClose: 600,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const handlePlusCLick = () => {
    dispatch(addToCart(props.data));
  };

  let productPrice = price;

  let roundPrice = (Math.floor(productPrice * 100) / 100).toFixed(2);

  const priceString = String(roundPrice);
  const priceArr = priceString.split("");
  const mainPrice = priceArr.slice(0, priceArr.indexOf("."));
  const subPrice = priceArr.slice(priceArr.indexOf(".") + 1);

  const dispatch = useDispatch();

  const handleDeleteItemFromCart = () => {
    dispatch(deleteFromCart(props.data));
  };

  return (
    <>
      <div className="cartDiv">
        <div className="imageDiv">
          <img src={image} alt={title} />
        </div>
        <div className="contentDiv">
          <div>
            <h6>
              {category}
              <p style={{ color: "grey" }}>{title}</p>
            </h6>
          </div>

          <div className="quantityChangeDiv">
            <div className="quantityChangeInsideDiv">
              <button onClick={handleMinusCLick} className="minusIcon">
                <HiMinusCircle />
              </button>
              <div className="quantityNum">{quantity}</div>
              <button onClick={handlePlusCLick} className="plusIcon">
                <HiPlusCircle />
              </button>
            </div>
          </div>
          <div className="productPriceDivInCart">
            <div className="productPriceDiv">
              <p className="dollarSign">$</p>
              <p className="mainPrice">{mainPrice}</p>
              <p className="subPrice">{subPrice}</p>
            </div>
          </div>

          <div className="deleteBtnDivContainer">
            <div>
              <button className="cartDeleteBtn"
                onClick={handleDeleteItemFromCart}
                style={{ cursor: "pointer" }}
                size={"1.8rem"}
                color="red"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartItems;
