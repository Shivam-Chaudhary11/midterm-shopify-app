import { useParams } from "react-router-dom";
import CategoryNames from "../components/CategoryNames";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../componentcss/ProductDetail.css"
import ProductPage from "../components/ProductPage";


function CategoryPage() {
  const { id } = useParams();
  

  return (
    <>
      <Navbar />
      <CategoryNames />
      <ProductPage data={id} />
      <Footer />
    </>
  );
}
export default CategoryPage;
