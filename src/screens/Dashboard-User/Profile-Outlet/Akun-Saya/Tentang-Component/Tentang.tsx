import React from "react";
import { brand } from "../../../../../assets";
import "./Tentang.css";

const Tentang: React.FC = () => {
  return (
    <div className="tentang-wrapper">
      <img src={brand} alt="logo brand" />
      <div className="tentang-text-wrapper">
        <h1 className="tentang-paragraf">
          <span className="brand-name">NaraSource </span>
          merupakan aplikasi Narasumber yang membantu kesulitan Anda menjadi
          kemudahan. Misi kami adalah menjadikan aplikasi penghubung antara
          narasumber dan customer dalam layanan teknologi informasi dan
          komunikasi. Kami menghubungkan antara narasumber dan pewawancara
          melalui Aplikasi kami.
        </h1>
        <span className="tentang-paragraf">
          Kami berusaha untuk mengembangkan Aplikasi ini dan target kami agar
          seluruh Indonesia menggunakannya. Kami menyediakan layanan janji temu
          lewat aplikasi kami. Tim kami bekerja tanpa lelah untuk berusaha
          mengembangkan Aplikasi ini untuk membuat Anda nyaman menggunakannya
          dan menyelesaikan permasalahan Anda dalam kesulitan mencari Narasumber
          yang terpercaya dan mempunyai portofolio sesuai bidang dari Narasumber
          tersebut.
        </span>
      </div>
    </div>
  );
};

export default Tentang;
