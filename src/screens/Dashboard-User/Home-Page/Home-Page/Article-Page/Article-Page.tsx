import React from "react";
import { facebook, instagram, uiux, whatsapp } from "../../../../../assets";
import "./Article-Page.css";

const ArticlePage: React.FC = () => {
  return (
    <div className="article-page-layout">
      <div className="article-title">
        <h1>UI/UX Desainer</h1>
      </div>
      <div className="article-category">
        <h1>Teknologi</h1>
      </div>
      <div className="article-description">
        <div className="article-desc-left">
          <div className="desc-date">01 Oktober 2022</div>
          <div className="desc-admin">
            Ditambahkan oleh <span className="admin-by">Mushonnef Anwar</span>
          </div>
        </div>
        <div className="article-desc-right">
          <img src={instagram} />
          <img src={facebook} />
          <img src={whatsapp} />
        </div>
      </div>
      <div className="article-content">
        <img src={uiux} className="article-img" />
        <div className="content-text">
          <h1 className="text-title">
            Kamu tau nggak ui/ux itu kerjaannya apa aja?
          </h1>
          <h4>Yuk simak penjelasannya,</h4>
          <h4 className="text-paragraf">
            User Interface (UI) Designer tidak bisa dipisahkan dengan User
            Experience (UX) Designer. UI Designer memiliki tugas menentukan
            tampilan aplikasi dan/atau situs. Nah kalau UX Designer menentukan
            bagaimana suatu aplikasi dan/atau situs bisa beroperasi dengan
            mudah. Tapi dalam bekerja, keduanya harus berlandaskan pada hasil
            riset supaya aplikasi dan/atau situs yang dirancang benar-benar
            efektif.
          </h4>
          <h4 className="text-paragraf">
            Jadi, UI Designer merupakan sebutan untuk orang yang mendesain
            interface untuk perangkat lunak komputer, ponsel pintar, dan
            lainnya. UI Designer punya tanggung jawab untuk mendesain tampilan
            secara menarik baik dari sisi bentuk, warna, juga tulisan. Nggak
            heran kalau UI Designer akan bekerja mengatur tata letak, skema
            warna, bentuk tombol-tombol yang bisa diklik beserta jenis dan
            ukuran teks. Nah, semua item ini berinteraksi sama pengguna.
            Pokoknya semua elemen visual di sebuah aplikasi dan/atau situs
            menjadi tanggung jawab UI Designer.
          </h4>
          <h1 className="text-title">• Jenjang Karier</h1>
          <h1 className="text-title">
            Kamu mau tau nggak jenjang karirnya UX/UI itu gimana? Nah.. ini
            penjelasannya
          </h1>
          <h4 className="text-paragraf">
            memulai karier sebagai UI/UX Designer di perusahaan start-up,
            perusahaan teknologi, atau perusahaan di bidang lain. Nah, seiring
            berjalannya waktu dan dengan bertambahnya jam kerja, kamu akan
            semakin kaya pengalaman. Kamu pun bisa menapaki jenjang karier yang
            lebih tinggi, begitu pula dengan penghasilan yang kamu terima.
          </h4>
          <br />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
