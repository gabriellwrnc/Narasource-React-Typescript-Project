import React from "react";
import { close_black } from "../../../../../assets";
import { AuthButton, Modal } from "../../../../../components";

interface TermsModalMenjadiProps {
  onClose: () => void;
  onClick: () => void;
}

const MenjadiTerms: React.FC<TermsModalMenjadiProps> = (props) => {
  return (
    <Modal>
      <div className="modal-terms-wrapper">
        <div className="modal-terms-header">
          <span className="modal-terms-header-title">Syarat & Ketentuan</span>
          <img
            src={close_black}
            alt="close black"
            className="close-black"
            onClick={() => props.onClose()}
          />
        </div>
        <div className="modal-terms-content">
          <p>
            <span>
              <span className="modal-terms-bold-text">
                Selamat datang di Narasource
              </span>
              <br />
              <br />
              Dengan mendaftarkan diri sebagai Narasumber menggunakan Platform
              NaraSource (sesuai yang didefinisikan di bawah ini), Anda
              menyetujui bahwa Anda telah membaca, memahami, dan menyetujui
              Syarat dan Ketentuan (&ldquo;Syarat dan Ketentuan&rdquo;) ini.
              <br />
              <br />
              Syarat Menjadi Narasumber Untuk menjadi seorang narasumber dalam
              platform ini, Anda Perlu memperhatikan syarat-syarat yang harus
              dipenuhi oleh seorang narasumber di bawah ini:
              <br />
              <br />
              <span className="modal-terms-bold-text">
                SYARAT DAN KETENTUAN:
              </span>
              <br />
              <br />
              &middot; Calon Narasumber Memiliki portofolio yang valid sesuai di
              bidang yang ditekuni
              <br />
              <br />
              &middot; Calon Narasumber memiliki sertifikat yang valid sesuai
              bidang yang ditekuni
              <br />
              <br />
              &middot; Calon Narasumber harus berpengalaman di bidangnya
              <br />
              <br />
              &middot; Calon Narasumber harus mempunyai wawasan yang luas
              <br />
              <br />
              &middot; Calon Narasumber mampu berkomunikasi dengan baik
              <br />
              <br />
              &middot; Calon Narasumber tidak menuntut untuk selalu mendapatkan
              Customer
              <br />
              <br />
              &middot; Calon Narasumber harus bertanggung jawab
              <br />
              <br />
              &middot; Calon Narasumber harus bersedia dikenakan biaya pajak
              <br />
              <br />
              &middot; Calon Narasumber Memiliki pemahaman yang ada di bidangnya
              <br />
              <br />
              &middot; Calon narasumber harus dapat menyampaikan informasi
              dengan metode yang menarik.
              <br />
              <br />
              &middot; Calon Narasumber harus Bertutur kata dengan sopan kepada
              customer
              <br />
              <br />
              &middot; Calon Narasumber harus Bersikap objektif dan jujur
              <br />
              <br />
              &middot; Calon Narasumber harus Mampu memanfaatkan kemajuan
              teknologi.
              <br />
              <br />
              &middot; Calon Narasumber harus Disiplin waktu
              <br />
              <br />
              &middot; Calon Narasumber harus Responsif
              <br />
              <br />
              &middot; Calon harus Komunikatif dan interaktif
              <br />
              <br />
              &middot; Calon Narasumber harus memiliki device yang mendukung
              penggunaan aplikasi Narasource dengan baik
              <br />
              <br />
              &middot; Calon Narasumber bersedia untuk melakukan wawancara
              sesuai janji dengan Customer
              <br />
              <br />
              Dalam platform NaraSource ini Anda sebagai Narasumber akan
              diberikan kesempatan untuk menjadi Narasumber ketika Customer
              mencari sesuai kriteria yang diinginkan Customer, maka sistem dari
              Aplikasi yang menentukan Narasumber. Semakin sering Anda menerima
              permintaan Customer maka semakin sering Anda disarankan untuk
              menjadi Narasumber di dalam platform NaraSource. Pembayaran untuk
              Narasumber ini akan di transferkan setelah wawancara telah
              selesai. Pembiayaannya permenit sebagai berikut ;<br />
              <br />- 10 menit = Rp.10.000.
              <br />
              <br />- 30 menit = Rp.30.000
              <br />
              <br />- 1 jam = Rp.50.000
              <br />
              <br />
              Aplikasi NaraSource ini akan menentukan Narasumber yang mana akan
              melakukan wawancara terhadap Customer sesuai penilaian dari
              Portofolio, sertifikat dan syarat yang sudah dipenuhi oleh Calon
              Narasumber. NaraSource akan memaksimalkan untuk menentukan
              Narasumber yang cocok sesuai yang dibutuhkan oleh Customer.
            </span>
          </p>
        </div>
        <div className="modal-terms-btn">
          <AuthButton
            type="submit"
            color="primary"
            size="sm"
            onClick={() => props.onClick()}
          >
            Setuju
          </AuthButton>
        </div>
      </div>
    </Modal>
  );
};

export default MenjadiTerms;
