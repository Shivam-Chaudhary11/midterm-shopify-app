import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart.cartItems);

  let subTotal = 0;
  for (let each of cart) {
    subTotal += each.price * each.itemQuantity;
  }

  let shippingEstimate = subTotal * 0.05;
  let taxEstimate = subTotal * 0.18;
  let orderTotal = subTotal + shippingEstimate + taxEstimate;

  return (
    <>
      {cart.length ? (
        <div className="mainCartDiv">
          <div className="card row cartProductDiv">
            <div className={cart.length === 1 ? "cartNoScroll" : "cartScroll"}>
              {cart.map((product) => (
                <CartItems key={product.id} data={product} />
              ))}
            </div>
          </div>

          <div className="cartSummaryDiv">
            <div className="summaryDiv">
              <div className="text-center h4 orderSummary">Order Summary</div>
              <div className="row subtotal">
                <p className="col-lg-7 h6">Subtotal</p>
                <p className="col-lg-5">${subTotal.toFixed(2)}</p>
              </div>
              <div className="row shippingEstimate">
                <p className="col-lg-7 h6">Shipping Estimate</p>
                <p className="col-lg-5">${shippingEstimate.toFixed(2)}</p>
              </div>
              <div className="row taxEstimate">
                <p className="col-lg-7 h6">Tax Estimate</p>
                <p className="col-lg-5">${taxEstimate.toFixed(2)}</p>
              </div>
              <div className="row orderTotal">
                <p className="col-lg-7 h4">Order Total</p>
                <p className="col-lg-5 h5">${orderTotal.toFixed(2)}</p>
              </div>
              <button className="checkout-btn">
                checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "5rem 0rem 5rem",
            }}
          >
            <div className="card text-center" style={{ padding: "2rem" }}>
              <p>Your Cart is Empty!</p>
              <Link to={"/"}>
                <button className="btn blueBtn">Continue To Shop</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Cart;
