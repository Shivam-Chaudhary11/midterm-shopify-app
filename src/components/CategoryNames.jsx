import { Link } from "react-router-dom";
import "../componentcss/CategoryNames.css"

function CategoryNames() {
  const Electronics = "electronics";
  const Jewellery = "jewelery";
  const mensClothing = "men's%20clothing";
  const WomensClothing = "women's%20clothing";
  return (
    <>
      <div className="categoryNames">
        <Link className="eachCategoryName" to={"/"}>
          All
        </Link>
        <Link
          className="eachCategoryName"
          to={"/products/category/" + Electronics}
        >
          Electronics
        </Link>
        <Link
          className="eachCategoryName"
          to={"/products/category/" + Jewellery}
        >
          Jewellery
        </Link>
        <Link
          className="eachCategoryName"
          to={"/products/category/" + mensClothing}
        >
          Men's Clothing
        </Link>
        <Link
          className="eachCategoryName"
          to={"/products/category/" + WomensClothing}
        >
          Women's clothing
        </Link>
      </div>
    </>
  );
}
export default CategoryNames;
