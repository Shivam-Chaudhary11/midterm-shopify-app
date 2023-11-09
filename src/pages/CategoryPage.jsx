import { useParams } from "react-router-dom";
import CategoryNames from "../components/CategoryNames";
import EachCategory from "../components/EachCategory";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CategoryPage() {
  const catName = useParams();

  return (
    <>
      <Navbar />
      <CategoryNames />
      <EachCategory data={catName} />
      <Footer />
    </>
  );
}
export default CategoryPage;
