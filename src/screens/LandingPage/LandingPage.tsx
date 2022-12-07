import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ardhy_landing,
  arrow_left_landing,
  bambang_landing,
  gabriel_landing,
  icon_bca,
  icon_bri,
  icon_cimb,
  icon_gopay,
  icon_ovo,
  icon_shopee,
  landing_footer,
  landing_logo,
  maria_landing,
  mka,
  novita_landing,
  pic_page_4,
  sonef_landing,
} from "../../assets";
import { ContentCard } from "../../components";
import "./LadingPage.css";

const LandingPage: React.FC = () => {
  const [colorShown, setColorShown] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 700) {
      setColorShown(true);
    } else {
      setColorShown(false);
    }

    window.addEventListener("scroll", changeColor);
  };

  useEffect(() => {
    changeColor();
  }, [window.scrollY]);
  return (
    <div className="landing-page-wrapper">
      <div
        className={`landing-page-navbar ${
          colorShown ? "bg-navbar-active" : "bg-navbar"
        } `}
      >
        <div className="landing-page-navbar-left">
          <img src={landing_logo} alt="landing logo" />
        </div>
        <div className="landing-page-navbar-right">
          <a href="#page-1" className="landing-navbar-right-list">
            Beranda
          </a>
          <a href="#page-2" className="landing-navbar-right-list">
            Bidang
          </a>
          <a href="#page-3" className="landing-navbar-right-list">
            Layanan
          </a>
          <a href="#page-5" className="landing-navbar-right-list">
            Tentang Kami
          </a>
          <Link to={"/auth/login"} className="link-white">
            <div className="landing-navbar-right-btn">Masuk</div>
          </Link>
        </div>
      </div>
      <div className="landing-page-1" id="page-1">
        <div className="landing-img"></div>
        <div className="landing-page-title-wrapper">
          <div className="landing-page-title-header">
            <h1>Wawancara</h1> Kapanpun, Dimanapun Dengan{" "}
            <span className="color-blue">Wawancara</span>
          </div>
          <span className="landing-page-title-desc">
            Narasource merupakan platform yang memudahkan pengguna dalam
            menemukan Narasumber yang sesuai kriteria serta bersedia
            diwawancarai.
          </span>
          <Link to={"/auth/register"} className="link-white">
            <div className="landing-page-title-btn">Daftar Sekarang!</div>
          </Link>
          <div className="landing-page-title-footer">
            #WawancaraTanpa KhawatirDitolak
          </div>
        </div>
      </div>
      <div className="landing-page-2" id="page-2">
        <div className="landing-page-2-box">
          <div className="landing-page-2-title">
            <div className="page-2-rekomendasi">Rekomendasi Bidang</div>
            <div className="page-2-show">
              <a className="show-text">Lihat Semua</a>
              <img src={arrow_left_landing} alt="arrow right" />
            </div>
          </div>
          <div className="landing-page-2-content">
            <ContentCard
              judul="UI/UX"
              kategori="Teknologi"
              gambar="UI/UX"
              link="/dashboard-user/home-page/article-page"
            />
            <ContentCard
              judul="Frontend"
              kategori="Teknologi"
              gambar="frontend"
              link="/dashboard-user/home-page/article-page"
            />
            <ContentCard
              judul="Backend"
              kategori="Teknologi"
              gambar="backend"
              link="/dashboard-user/home-page/article-page"
            />
            <ContentCard
              judul="Mobile"
              kategori="Teknologi"
              gambar="mobile"
              link="/dashboard-user/home-page/article-page"
            />
          </div>
        </div>
      </div>
      <div className="landing-page-3" id="page-3">
        <div className="landing-page-3-box">
          <div className="landing-page-3-title">
            <div className="page-2-rekomendasi">Keunggulan Layanan</div>
          </div>
          <div className="landing-page-3-content">
            <div className="page-3-content-wrapper">
              <div className="page-3-content-angka">01</div>
              <div className="page-3-content-text">
                Memudahkan pelajar, Mahasiswa, dan Masyarakat Umum untuk
                mendapat Narasumber
              </div>
            </div>
            <div className="page-3-content-wrapper">
              <div className="page-3-content-angka">02</div>
              <div className="page-3-content-text">
                Mengurangi biaya mobilitas serta lebih meningkatkan efisiensi
                waktu
              </div>
            </div>
            <div className="page-3-content-wrapper">
              <div className="page-3-content-angka">03</div>
              <div className="page-3-content-text">
                Kemudahan dalam menemukan Narasumber yang bersedia diwawancarai
                dan sesuai kriteria
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-4" id="page-4">
        <div className="landing-page-4-box">
          <div className="landing-page-4-content">
            <div className="page-4-content-left">
              <img
                src={pic_page_4}
                alt="mobile ver narasource"
                className="pic-page-4"
              />
            </div>
            <div className="page-4-content-right">
              <div className="page-4-tersedia">Tersedia versi mobile</div>
              <div className="page-4-dapatkan">
                Dapatkan notifikasi wawancara dan info menarik seputar bidang IT
                dengan lebih mudah.
              </div>
              <div className="page-4-btn">Unduh Sekarang!</div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-5" id="page-5">
        <div className="landing-page-5-box">
          <div className="landing-page-5-title">
            <div className="page-2-rekomendasi">Tentang Kami</div>
          </div>
          <div className="landing-page-5-content">
            <div className="page-5-content-top">
              <div className="page-5-content-pic">
                <img src={sonef_landing} alt="landing pic" />
                <span className="landing-kategori">UI/UX Design</span>
                <span className="landing-name">Mushonnef Anwar</span>
              </div>
              <div className="page-5-content-pic">
                <img src={bambang_landing} alt="landing pic" />
                <span className="landing-kategori-mid">Product Manager</span>
                <span className="landing-name">Bambang Herlandi</span>
              </div>
              <div className="page-5-content-pic">
                <img src={ardhy_landing} alt="landing pic" />
                <span className="landing-kategori">Mobile Developer</span>
                <span className="landing-name">Ardhy Satrio</span>
              </div>
            </div>
            <div className="page-5-content-bottom">
              <div className="page-5-content-pic">
                <img src={novita_landing} alt="landing pic" />
                <span className="landing-kategori">Backend Developer</span>
                <span className="landing-name">Novite Nava A.</span>
              </div>
              <div className="page-5-content-pic">
                <img src={gabriel_landing} alt="landing pic" />
                <span className="landing-kategori">Frontend Developer</span>
                <span className="landing-name">Gabriel D Lawrence</span>
              </div>
              <div className="page-5-content-pic">
                <img src={maria_landing} alt="landing pic" />
                <span className="landing-kategori">Business Analyst</span>
                <span className="landing-name">Maria Trianita</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-6">
        <div className="landing-page-6-box">
          <div className="landing-page-6-content">
            <img src={landing_footer} alt="landing footer" />
            <span className="page-6-content-platform">
              Platform Wawancara Online
            </span>
            <span className="page-6-content-slogan">
              #WawancaraTanpaKhawatirDitolak
            </span>
            <span className="page-6-content-copyright">
              Copyright Narasource, 2022
            </span>
          </div>
          <div className="landing-page-6-content">
            <span className="page-6-content-title">Pembayaran</span>
            <div className="page-6-content-2-footer">
              <span className="content-2-footer-title">Virtual Account</span>
              <div className="content-2-footer-picture">
                <a href="https://bri.co.id/" target="_blank">
                  <img src={icon_bri} alt="icon bri" className="icon-footer" />
                </a>
                <a href="https://www.klikbca.com/" target="_blank">
                  <img src={icon_bca} alt="icon bri" className="icon-footer" />
                </a>
                <a href="https://www.cimbniaga.co.id/" target="_blank">
                  <img src={icon_cimb} alt="icon bri" className="icon-footer" />
                </a>
              </div>
            </div>
            <div className="page-6-content-2-footer">
              <span className="content-2-footer-title">E-Wallet</span>
              <div className="content-2-footer-picture">
                <a href="https://gopay.co.id/" target="_blank">
                  <img
                    src={icon_gopay}
                    alt="icon gopay"
                    className="icon-footer"
                  />
                </a>
                <a href="https://www.ovo.id/" target="_blank">
                  <img src={icon_ovo} alt="icon ovo" className="icon-footer" />
                </a>
                <a href="https://shopeepay.co.id/" target="_blank">
                  <img
                    src={icon_shopee}
                    alt="icon shopeepay"
                    className="icon-footer"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="landing-page-6-content">
            <span className="page-6-content-title">Informasi</span>
            <span className="content-2-footer-title margin-bottom">
              Panduan
            </span>
            <span className="content-2-footer-title">Syarat & Ketentuan</span>
            <span className="page-6-content-title margin-top">Alamat</span>
            <a
              href="https://goo.gl/maps/7FD12RDfCKHLfzPj6"
              target="_blank"
              className="link-footer-map"
            >
              <span className="content-2-footer-title margin-bottom">
                Komplek Ruko,
              </span>
              <span className="content-2-footer-title margin-bottom">
                Jl. Borneo Paradiso No.3,
              </span>
              <span className="content-2-footer-title margin-bottom">
                Sepinggan, Balikpapan Selatan,{" "}
              </span>
              <span className="content-2-footer-title">
                Balikpapan City, East Kalimantan 76116
              </span>
            </a>
          </div>
          <div className="landing-page-6-content">
            <span className="page-6-content-title">Kontak</span>
            <span className="content-2-footer-title margin-bottom">
              Email: narasource.id@gmail.com
            </span>
            <span className="content-2-footer-title">
              Nomor Hp: 082292194591
            </span>
            <span className="page-6-content-title margin-top">Bagian Dari</span>
            <div className="logo-footer-mka-wrapper">
              <div className="logo-footer-mka">
                <a href="http://mediakreasiabadi.co.id/" target="_blank">
                  <img src={mka} alt="logo mka" />
                </a>
              </div>
              <span className="logo-footer-mka-name">Media Kreasi Abadi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
