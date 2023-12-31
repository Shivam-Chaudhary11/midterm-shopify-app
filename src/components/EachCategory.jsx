import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import Endpoints from "../api/Endpoints";
import Product from "./Product";

function EachCategory(props) {
  const { categoryName } = props.data;
  const [catProducts, setCatProducts] = useState([]);

  const fetchData = useCallback(() => {
    axios
      .get(Endpoints.CATEGORY_URL + categoryName)
      .then((res) => {
        setCatProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [categoryName]);

  useEffect(() => {
    setCatProducts([]);
    fetchData();
  }, [categoryName, fetchData]);

  return (
    <>
      <div>
        {catProducts.length > 0 ? (
          <div>
            <div className="row row-cols-auto justify-content-around allProductsRow">
              {catProducts.map((product) => (
                <Product key={product.id} data={product} />
              ))}
            </div>
          </div>
        ) : (
          <div className="loadingPage">
            <div className="loadingPageText">
              <p>Loading...</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default EachCategory;
