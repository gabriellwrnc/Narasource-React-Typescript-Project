import React from "react";
import "./Mencari-Narasumber-Page.css";

const MencariNarasumberPage: React.FC = () => {
  return (
    <div className="mencari-narasumber-wrapper">
      <div className="mencari-left">
        <div className="left-number">1</div>
        <div className="left-desc">
          <div className="left-desc-title">Buat Janji Wawancara</div>
          <div className="left-desc-desc">
            Pastikan data diisi dengan tepat untuk mendapatkan narasumber yang
            sesuai kriteria
          </div>
        </div>
      </div>
      <div className="mencari-right">
        <div className="right-form">
          <form action="">
            <div className="mencari-input-wrapper">
              <label htmlFor="judul" className="mencari-input-label">
                Judul
              </label>
              <input
                type="text"
                id="judul"
                className="mencari-input-field"
                placeholder="Contoh : Penelitian Prospek Karir"
              />
            </div>
            <div className="mencari-input-wrapper">
              <label htmlFor="tujuan" className="mencari-input-label">
                Tujuan
              </label>
              <textarea
                className="mencari-input-field"
                placeholder="Contoh: Meneliti apakah profesi ui/ux desainer memiliki prospek karir yang menjanjikan di masa mendatang"
                id="tujuan"
                cols={10}
                rows={4}
              ></textarea>
            </div>
            <div className="mencari-input-wrapper">
              <label htmlFor="kategori" className="mencari-input-label">
                Kategori/Bidang
              </label>
              <select id="kategori" className="mencari-input-field">
                <option value="UI/UX Designer" className="dropdown-value">
                  UI/UX Designer
                </option>
                <option value="Graphic Designer" className="dropdown-value">
                  Graphic Designer
                </option>
                <option value="Mobile Developer" className="dropdown-value">
                  Mobile Developer
                </option>
                <option value="Frontend Developer" className="dropdown-value">
                  Frontend Developer
                </option>
                <option value="Backend Developer" className="dropdown-value">
                  Backend Developer
                </option>
              </select>
            </div>
            <div className="mencari-input-wrapper">
              <label htmlFor="jumlah" className="mencari-input-label">
                Jumlah Narasumber
              </label>
              <div className="input-button">
                <input type="number" id="jumlah" className="number-field" />
                <div className="mencari-button">Oke</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MencariNarasumberPage;
