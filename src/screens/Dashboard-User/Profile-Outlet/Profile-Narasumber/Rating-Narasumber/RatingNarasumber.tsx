import React from "react";
import { star_fill } from "../../../../../assets";
import "./RatingNarasumber.css";

const RatingNarasumber: React.FC = () => {
  return (
    <div className="rating-narasumber-wrapper">
      <div className="rating-narasumber-box">
        <span className="rating-naraber-box-header">Customer reviews</span>
        <div className="rating-narasumber-hasil-star">
          <div className="rating-star">
            {[...Array(5)].map((star, index) => {
              index += 1;
              return (
                <img
                  key={index}
                  src={star_fill}
                  alt="star"
                  className="rating-star-icon"
                />
              );
            })}
          </div>
          <span className="rating-text">4.9 dari 5</span>
        </div>
        <span className="total-customer-rating">80 rating customer</span>
        <div className="rating-detail-rating">
          <div className="detail-rating-box">
            <span className="total-bintang">5 Bintang</span>
            <div className="bintang-bar-box">
              <div className="bintang-bar-box-grey w-93" />
            </div>
            <span className="total-rating-persen">93%</span>
          </div>
          <div className="detail-rating-box">
            <span className="total-bintang">4 Bintang</span>
            <div className="bintang-bar-box">
              <div className="bintang-bar-box-grey w-5" />
            </div>
            <span className="total-rating-persen">5%</span>
          </div>
          <div className="detail-rating-box">
            <span className="total-bintang">3 Bintang</span>
            <div className="bintang-bar-box">
              <div className="bintang-bar-box-grey w-2" />
            </div>
            <span className="total-rating-persen ">2%</span>
          </div>
          <div className="detail-rating-box">
            <span className="total-bintang">2 Bintang</span>
            <div className="bintang-bar-box"></div>
            <span className="total-rating-persen">0%</span>
          </div>
          <div className="detail-rating-box ml-1">
            <span className="total-bintang">1 Bintang</span>
            <div className="bintang-bar-box"></div>
            <span className="total-rating-persen">0%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingNarasumber;
