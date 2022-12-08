import React, { useState } from "react";
import {
  dot,
  icon_sukses,
  juan,
  star_fill,
  star_off,
} from "../../../../assets";
import { AuthButton } from "../../../../components";
import "./ActivitySukses.css";

const ActivitySukses: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  console.log(rating, "rating");
  console.log(hover, "hover");
  return (
    <div className="activity-berlangsung-wrapper">
      <span className="activity-next-title">Status</span>
      <div className="activity-next-content">
        <div className="activity-next-content-left">
          <div className="next-content-left-status">
            <img
              src={icon_sukses}
              alt="icon berlangsung"
              className="icon-activity"
            />
            <div className="next-content-left-text">
              <span className="left-text-title">Sukses</span>
              <span className="title-icon-diterima">(Wawancara Selesai)</span>
            </div>
          </div>
          <div className="next-content-left-desc">
            <div className="content-left-desc-box">
              <span className="left-desc-box-title">Deskripsi</span>
              <div className="left-desc-box-desc">
                <div className="left-desc-box-desc-content">
                  <div className="left-desc-box-desc-content-dot">
                    <img src={dot} />
                  </div>
                  <div className="left-desc-box-desc-content-content">
                    <span className="left-desc-box-desc-content-content-title">
                      Judul
                    </span>
                    <span className="left-desc-box-desc-content-content-desc">
                      Penelitian Prospek Karir
                    </span>
                  </div>
                </div>
                <div className="left-desc-box-desc-content">
                  <div className="left-desc-box-desc-content-dot">
                    <img src={dot} />
                  </div>
                  <div className="left-desc-box-desc-content-content">
                    <span className="left-desc-box-desc-content-content-title">
                      Tujuan
                    </span>
                    <span className="left-desc-box-desc-content-content-desc">
                      Meneliti apakah profesi ui/ux desainer memiliki prospek
                      karir yang menjanjikan di masa mendatang
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="activity-next-content-right">
          <div className="activity-next-content-right-detail-waktu">
            <div className="activity-next-content-right-left">
              <div className="activity-next-content-right-left-pic">
                <img src={juan} alt="juan pic" />
              </div>
              <div className="activity-next-content-right-left-text">
                <span className="activity-next-content-right-left-kategori">
                  UI/UX Desain
                </span>
                <span className="activity-next-content-right-left-date">
                  17 November 2022
                </span>
              </div>
            </div>
            <div className="activity-next-content-right-right">
              <div className="activity-next-content-right-right-waktu">
                20 Menit
              </div>
              <div className="activity-next-content-right-right-detail">
                13:00 - 13:20 WIB
              </div>
            </div>
          </div>

          <div className="activity-next-content-right-detail-rating">
            <span className="rating-text-title">
              Berikan rating ke narasumber?
            </span>
            <div className="rating-star">
              {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                  <img
                    key={index}
                    src={index <= (hover || rating) ? star_fill : star_off}
                    alt="star"
                    className="star-icon"
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                    onDoubleClick={() => {
                      setRating(0);
                      setHover(0);
                    }}
                  />
                );
              })}
            </div>
            {rating > 0 ? (
              <div className="rating-text-alasan">
                <label htmlFor="rating" className="rating-alasan">
                  Alasan Penilaian?
                </label>
                <textarea
                  className="rating-alasan-area"
                  id="rating"
                  placeholder="Ketik disini secara detail"
                />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="activity-next-content-right-detail-harga">
            <div className="next-content-right-detail-harga">
              <div className="next-content-right-detail-harga-text">
                Pembayaran
              </div>
              <div className="next-content-right-detail-harga-harga">RP20K</div>
            </div>
            <div className="next-content-right-detail-btn">
              <AuthButton size="sm">Masuk</AuthButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivitySukses;
