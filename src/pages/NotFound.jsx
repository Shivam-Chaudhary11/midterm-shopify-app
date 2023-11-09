import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CategoryNames from "../components/CategoryNames";
import Footer from "../components/Footer";

function PageNotFound() {
  return (
    <>
      <Navbar />
      <CategoryNames />
      <div
        style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "10rem" }}
      >
        <div className="text-center h1">Page Not Found</div>
        <br />
        <div className="text-center h3">
          <button className="btn blueBtn">
            <Link style={{ color: "white" }} to={"/"}>
              Go Home
            </Link>
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default PageNotFound;
