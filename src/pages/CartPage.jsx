import Cart from "../components/Cart";
import CategoryNames from "../components/CategoryNames";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../pagecss/CartPage.css";

function CartPage() {
  return (
    <>
      <Navbar />
      <CategoryNames />
      <Cart />
      <Footer />
    </>
  );
}
export default CartPage;
