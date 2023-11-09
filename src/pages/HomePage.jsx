import AllProducts from "../components/AllProducts";
import CategoryNames from "../components/CategoryNames";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <CategoryNames />
      <AllProducts />
      <Footer />
    </>
  );
}
export default HomePage;
