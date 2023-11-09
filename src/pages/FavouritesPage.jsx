import CategoryNames from "../components/CategoryNames";
import Navbar from "../components/Navbar";
import Wishlist from "../components/Wishlist";
import Footer from "../components/Footer";
import "../pagecss/FavPage.css";

function FavoritesPage() {
  return (
    <>
      <Navbar />
      <CategoryNames />
      <Wishlist />
      <Footer />
    </>
  );
}
export default FavoritesPage;
