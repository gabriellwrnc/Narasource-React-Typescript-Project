import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Mencari-Narasumber-Page-1.css";

const MencariNarasumberPage1: React.FC = () => {
  const [jumlahSesi, setJumlahSesi] = useState<number>(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJumlahSesi(e.target.valueAsNumber);
    console.log("valueAsNumber", e.target.valueAsNumber);
  };

  const handleSesi = () => {
    const stringSesi = jumlahSesi.toString();
    localStorage.setItem("@jumlah_sesi", stringSesi);
  };
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
              <div className="input-button">
                <label htmlFor="judul" className="mencari-input-label">
                  Judul
                </label>
                <span className="page-numbering">1/5</span>
              </div>
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
              <input
                type="number"
                value={jumlahSesi}
                onChange={(e) => handleChange(e)}
                id="jumlah"
                className="number-field"
              />
            </div>
            <Link
              to="/dashboard-user/mencari-narasumber/2"
              className="profile-link"
              onClick={() => handleSesi()}
            >
              <div className="mencari-input-wrapper">
                <div className="input-button">
                  <div className="mencari-button">Oke</div>
                </div>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MencariNarasumberPage1;
