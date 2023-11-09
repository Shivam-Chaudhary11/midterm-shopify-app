import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "../componentcss/Product.css"

function Stars({ stars, reviews }) {
  const starRating = Array.from({ length: 5 }, (elem, index) => {
    const halfNum = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="starsIcon" />
        ) : stars >= halfNum ? (
          <FaStarHalfAlt className="starsIcon" />
        ) : (
          <AiOutlineStar className="starsIcon" />
        )}
      </span>
    );
  });
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "0.3rem",
        }}
      >
        <div>{starRating}</div>
        <p style={{ fontSize: "0.8rem", color: "grey" }}>({reviews})</p>
      </div>
    </>
  );
}
export default Stars;
