import React, { useState } from "react";
import "./MenjadiNarasumber.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AuthButton } from "../../../../components";

const MenjadiNarasumber: React.FC = () => {
  const [fileCVName, setFileCVName] = useState<string>("");
  const [filePortoName, setFilePortoName] = useState<string>("");

  const handleChangeCV = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    if (!e.target.files) return;
    setFileCVName(e.target.files[0].name);
  };

  const handleChangePorto = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    if (!e.target.files) return;
    setFilePortoName(e.target.files[0].name);
  };

  return (
    <div className="menjadi-narasumber-wrapper">
      <div className="menjadi-narasumber-form">
        <div className="narasumber-form-header">
          <h1 className="narasumber-header-title">Lengkapi Dokumen</h1>
          <h1 className="narasumber-header-desc">
            Lengkapi identitas dan dokumen untuk dapat mendaftarkan diri menjadi
            Narasumber.{" "}
          </h1>
        </div>
        <div className="narasumber-form-wrapper">
          <form action="">
            <div className="narasumber-form-input-wrapper">
              <label htmlFor="tingkat-pendidikan" className="narasumber-label">
                Tingkat Pendidikan
              </label>
              <input
                type="text"
                id="tingkat-pendidikan"
                className="narasumber-input-field"
                placeholder="Contoh: Sarjana"
              />
            </div>
            <div className="narasumber-form-input-wrapper">
              <label htmlFor="nama-sekolah" className="narasumber-label">
                Nama Sekolah/Kampus
              </label>
              <input
                type="text"
                id="nama-sekolah"
                className="narasumber-input-field"
                placeholder="Contoh: Universitas Indonesia"
              />
            </div>
            <div className="narasumber-form-dropdown-wrapper">
              <label htmlFor="bidang" className="narasumber-label">
                Bidang yang didalami
              </label>
              <div className="custom-dropdown-wrapper">
                <input
                  type="text"
                  id="bidang"
                  className="narasumber-custom-dropdown"
                />
                <span className="dropdown-icon-span">
                  <RiArrowDropDownLine className="dropdown-icon" />
                </span>
              </div>
            </div>
            <div className="narasumber-form-file-wrapper">
              <label className="narasumber-label">Curriculum Vitae (CV)</label>
              <label htmlFor="cv">
                <div className="custom-label-file">
                  {fileCVName === "" ? (
                    <div className="custom-btn-file">Pilih File</div>
                  ) : (
                    <div className="custom-file-name">{fileCVName}</div>
                  )}
                </div>
                <input
                  type="file"
                  id="cv"
                  style={{ display: "none" }}
                  onChange={(e) => handleChangeCV(e)}
                />
              </label>
            </div>
            <div className="narasumber-form-file-wrapper">
              <label className="narasumber-label">Portofolio</label>
              <label htmlFor="porto">
                <div className="custom-label-file">
                  {filePortoName === "" ? (
                    <div className="custom-btn-file">Pilih File</div>
                  ) : (
                    <div className="custom-file-name">{filePortoName}</div>
                  )}
                </div>
                <input
                  type="file"
                  id="porto"
                  style={{ display: "none" }}
                  onChange={(e) => handleChangePorto(e)}
                />
              </label>
            </div>
            <div className="narasuber-form-terms-wrapper">
              <input
                type="checkbox"
                id="narasumber-terms"
                className="custom-checkbox"
              />
              <label htmlFor="narasumber-terms">
                Saya telah membaca dan menyetujui{" "}
                <a className="terms-anchor" href="">
                  Persyaratan & Kebijakan
                </a>
                dari pihak NaraSource.
              </label>
            </div>
            <div className="narasumber-form-btn">
              <AuthButton size="sm">Kirim</AuthButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MenjadiNarasumber;
