import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WishlistItems from "./WishlistItems";

function Wishlist() {
  const wishlist = useSelector((state) => state.cart.wishListItems);

  let subTotal = 0;
  for (let each of wishlist) {
    subTotal += each.price;
  }

  let shippingEstimate = subTotal * 0.05;
  let taxEstimate = subTotal * 0.18;
  let orderTotal = subTotal + shippingEstimate + taxEstimate;

  return (
    <>
      {wishlist.length ? (
        <div className="mainCartDiv">
          <div className="card row cartProductDiv">
            <div className="cartScroll">
              {wishlist.map((product) => (
                <WishlistItems key={product.id} data={product} />
              ))}
            </div>
          </div>

          <div className="card cartSummaryDiv">
            <div className="summaryDiv">
              <div className="text-center h4 orderSummary">
                Wishlist Summary
              </div>
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
                <p className="col-lg-7 h4">Wishlist Total</p>
                <p className="col-lg-5 h5">${orderTotal.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "5rem 0rem 5rem",
          }}
        >
          <div className="card text-center" style={{ padding: "2rem" }}>
            <p>Your WishList is Empty!</p>
            <Link to={"/"}>
              <button className="btn blueBtn">Continue Shopping</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
export default Wishlist;