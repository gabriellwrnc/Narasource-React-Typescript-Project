import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { arrow_left_landing, landing_logo } from "../../assets";
import { ContentCard } from "../../components";
import "./LadingPage.css";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page-wrapper">
      <div className="landing-page-navbar">
        <div className="landing-page-navbar-left">
          <img src={landing_logo} alt="landing logo" />
        </div>
        <div className="landing-page-navbar-right">
          <div className="landing-navbar-right-list">Beranda</div>
          <div className="landing-navbar-right-list">Bidang</div>
          <div className="landing-navbar-right-list">Layanan</div>
          <div className="landing-navbar-right-list">Tentang Kami</div>
          <Link to={"/auth/login"} className="link-white">
            <div className="landing-navbar-right-btn">Masuk</div>
          </Link>
        </div>
      </div>
      <div className="landing-page-1">
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
          <div className="landing-page-title-btn">Daftar Sekarang!</div>
          <div className="landing-page-title-footer">
            #WawancaraTanpa KhawatirDitolak
          </div>
        </div>
      </div>
      <div className="landing-page-2">
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
      <div className="landing-page-3">
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
    </div>
  );
};

export default LandingPage;
