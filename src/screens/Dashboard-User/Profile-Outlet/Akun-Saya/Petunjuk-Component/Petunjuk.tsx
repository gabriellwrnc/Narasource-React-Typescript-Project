import React, { useState } from "react";
import {
  arrow_right_black,
  mencari_1,
  mencari_10,
  mencari_11,
  mencari_12,
  mencari_13,
  mencari_14,
  mencari_15,
  mencari_16,
  mencari_17,
  mencari_18,
  mencari_2,
  mencari_3,
  mencari_4,
  mencari_5,
  mencari_6,
  mencari_7,
  mencari_8,
  mencari_9,
  menjadi_1,
  menjadi_2,
  menjadi_3,
  menjadi_4,
  menjadi_5,
  menjadi_6,
  menjadi_7,
} from "../../../../../assets";
import "./Petunjuk.css";

const Petunjuk: React.FC = () => {
  const [mencariPetunjuk, setMencariPetunjuk] = useState<boolean>(false);
  const [menjadiPetunjuk, setMenjadiPetunjuk] = useState<boolean>(false);

  const toggleMencariPetunjuk = () => {
    setMencariPetunjuk((prevState) => !prevState);
  };

  const toggleMenjadiPetunjuk = () => {
    setMenjadiPetunjuk((prevState) => !prevState);
  };
  return (
    <div className="petunjuk-wrapper">
      <div className="petunjuk-option" onClick={() => toggleMencariPetunjuk()}>
        <span>Mencari Narasumber</span>
        <img
          src={arrow_right_black}
          alt="arrow black"
          className={mencariPetunjuk ? "syarat-active" : "syarat-deactive"}
        />
      </div>
      {mencariPetunjuk ? (
        <div className="petunjuk-mencari">
          <p>
            <span>
              <span>
                Kini kamu bisa mencari Narasumber langsung di dalam Aplikasi
                Narasource. Layanan mempertemukan Narasumber dan customer ini
                memiliki portofolio di bidangnya masing-masing. Mulai dari
                pertanyaan riset Anda atau tentang jenjang karir yang Anda
                butuhkan bisa membantu menjawab pertanyaan Anda. narasumber yang
                tersedia dari berbagai macam bidang IT. Untuk memberikan
                informasi atas masalah yang Anda hadapi. <br />
                <br />
                Untuk mencari Narasumber ikuti langkah-langkah sebagai berikut :
                <br />
              </span>
              <br />
            </span>
            <br />
            <span className="display-petunjuk-no">
              1.
              <img src={mencari_1} alt="" />
            </span>
            <br />
            <span>
              <span>
                - Masuk ke beranda
                <br />- Kemudian tekan icon pencarian Narasumber yang ada di
                tengah.
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              2.
              <img src={mencari_2} alt="" />
            </span>
            <br />
            <span>
              <span>
                - Selanjutnya silahkan mengisi judul. Bagian judul ini berisi
                tentang pembahasan apa yang akan Anda berikan kepada Narasumber
                <br />- Contohnya &ldquo;Penelitian Prospek Karir&rdquo;
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              3.
              <img src={mencari_3} alt="" />
            </span>
            <br />
            <span>
              <span>
                - Selanjutnya silahkan mengisi Tujuan. Bagian tujuan ini berisi
                tentang deskripsi lebih lengkap terkait wawancara Anda dengan
                Narasumber.
                <br />- Contoh &ldquo;Meneliti apakah profesi UI/UX designer
                memiliki prospek karir yang menjanjikan di masa mendatang&rdquo;
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              4.
              <img src={mencari_4} alt="" />
            </span>
            <br />
            <span>
              <span>
                - Selanjutnya silahkan mengetikkan kategori/bidang sesuai dengan
                kebutuhan wawancara Anda.
                <br />- Contoh memilih &ldquo;UI/UX Designer
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              5.
              <img src={mencari_5} alt="" />
            </span>
            <br />
            <span>
              <span>
                - Selanjutnya silahkan memilih jumlah Narasumber yang Anda
                butuhkan.
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              6.
              <img src={mencari_6} alt="" />
            </span>
            <br />
            <span>
              <span>
                -&nbsp;
                <span>
                  Jika sudah selesai memasukan data yang diperlukan untuk
                  mencari Narasumber silahkan menekan tombol &ldquo;Oke&rdquo;
                  agar dapat ke halaman selanjutnya.
                </span>
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              7.
              <img src={mencari_7} alt="" />
            </span>
            <br />
            <span>
              <span>
                jika Anda memilih lebih dari 1 Narasumber maka sesi akan
                bertambah sesuai jumlah Narasumber yang Anda pilih.
                <br />- Selanjutnya masuk ke halaman penjadwalan
                <br />- Silahkan mengatur jadwal pertemuan
                <br />- Masukan jam mulai
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              8.
              <img src={mencari_8} alt="" />
            </span>
            <br />
            <span>
              <span>
                - Selanjutnya silahkan memilih tanggal, bulan, dan tahun untuk
                mengatur jadwal wawancara
                <br />- Apabila telah selesai silahkan tekan tombol
                &ldquo;Simpan&rdquo;
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              9.
              <img src={mencari_9} alt="" />
            </span>
            <br />
            <span>
              <span>
                - Selanjutnya silahkan memilih jam pertemuan untuk mengatur
                jadwal wawancara
                <br />- Apabila telah selesai silahkan tekan tombol
                &ldquo;Oke&rdquo;
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              10.
              <img src={mencari_10} alt="" />
            </span>
            <br />
            <span>
              <span>
                Jika sudah mengatur jadwal pertemuan dengan Narasumber
                selanjutnya silahkan menekan tombol &ldquo;Jadwalkan&rdquo;.
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              11.
              <img src={mencari_11} alt="" />
            </span>
            <br />
            <span>
              <span>
                Selanjutnya di halaman rincian bayaran akan menampilkan harga
                sesuai dengan penjadwalan yang Anda lakukan.
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              12.
              <img src={mencari_12} alt="" />
            </span>
            <br />
            <span>
              <span>
                Jika sudah setuju dengan harga yang tertera pada Aplikasi
                Narasource silahkan menekan tombol &ldquo;Lanjutkan&rdquo;.
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              13.
              <img src={mencari_13} alt="" />
            </span>
            <br />
            <span>
              <span>
                Dibagian ini silahkan untuk memilih metode pembayaran yang akan
                Anda lakukan. Memilih Virtual Account atau E-Wallet.
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              14.
              <img src={mencari_14} alt="" />
            </span>
            <br />
            <span>
              <span>
                Jika sudah memilih metode pembayarannya silahkan menekan tombol
                &ldquo;Konfirmasi&rdquo;
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              15.
              <img src={mencari_15} alt="" />
            </span>
            <br />
            <span>
              <span>
                Selanjutnya silahkan melakukan pembayaran melalui Bank atau
                E-Wallet .
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              16.
              <img src={mencari_16} alt="" />
            </span>
            <br />
            <span>
              <span>
                Jika sudah melakukan pembayaran maka Aplikasi Narasource akan
                memberikan informasi bahwa &ldquo;Pembayaran Sukses&rdquo;
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              17.
              <img src={mencari_17} alt="" />
            </span>
            <br />
            <span>
              <span>
                Selanjutnya silahkan menunggu notifikasi dari Narasource jika
                wawancara sudah diterima atau gagal
              </span>
              <br />
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              18.
              <img src={mencari_18} alt="" />
            </span>
            <br />
            <span>
              <span>
                Untuk melihat status wawancara silahkan masuk ke halaman
                aktivitas
              </span>
              <br />
            </span>
            <br />
          </p>
        </div>
      ) : (
        <></>
      )}
      <div className="petunjuk-option" onClick={() => toggleMenjadiPetunjuk()}>
        <span>Menjadi Narasumber</span>
        <img
          src={arrow_right_black}
          alt="arrow black"
          className={menjadiPetunjuk ? "syarat-active" : "syarat-deactive"}
        />
      </div>
      {menjadiPetunjuk ? (
        <div className="petunjuk-menjadi">
          <p>
            <span>
              Narasource memberikan layanan untuk para calon Narasumber untuk
              mendapatkan penghasilan. Dengan menjadi Narasumber Anda bisa
              mendapatkan penghasilan tambahan melalui tawaran-tawaran wawancara
              yang ada. Anda perlu melengkapi dokumen yang dibutuhkan oleh
              Narasource untuk divalidasi agar menjadi Narasumber. Ketika
              menjadi Narasumber, anda dapat menyesuaikan waktu pertemuan sesuai
              dengan ketersediaan Anda.
              <br />
              <br />
              Untuk menjadi Narasumber ikuti langkah-langkah sebagai berikut :
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              1.
              <img src={menjadi_1} alt="" />
            </span>
            <br />
            <span>
              - Masuk ke dalam Halaman Profil melalui Halaman Home &gt; Menu
              utama &gt; Tekan pilihan "Profil"
              <br />- Kemudian klik tulisan &ldquo;Menjadi Narasumber&rdquo;
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              2.
              <img src={menjadi_2} alt="" />
            </span>
            <br />
            <span>
              - Selanjutnya Anda akan masuk ke halam &ldquo;Lengkapi
              Dokumen&rdquo;
              <br />- Dibagian tingkat pendidikan silahkan mengisinya contoh
              &ldquo; Sarjana Komputer (S.Kom).
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              3.
              <img src={menjadi_3} alt="" />
            </span>
            <br />
            <span>
              - Kemudian dokumen selanjutnya ada Nama Sekolah/Kampus silahkan
              mengisinya contoh &ldquo;Universitas Indonesia&rdquo;.
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              4.
              <img src={menjadi_4} alt="" />
            </span>
            <br />
            <span>
              -&nbsp;
              <span>
                Bagian bidang yang didalami silahkan memilih bidang yang
                ditekuni contoh memilih &ldquo;UI/UX Design&rdquo;.
                Diperbolehkan memilih lebih dari 1 bidang.
              </span>
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              5.
              <img src={menjadi_5} alt="" />
            </span>
            <br />
            <span>
              -&nbsp;
              <span>
                Selanjutnya bagian Curriculum Vitae silahkan mengupload file pdf
                dengan format &ldquo;CV_Nama Lengkap&rdquo;
              </span>
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              6.
              <img src={menjadi_6} alt="" />
            </span>
            <br />
            <span>
              -&nbsp;
              <span>
                Kemudian di bagian Portofolio silahkahkan mengupload file pdf
                dengan format &ldquo;Portofolio_Nama Lengkap&rdquo;
              </span>
            </span>
            <br />
            <br />
            <span className="display-petunjuk-no">
              7.
              <img src={menjadi_7} alt="" />
            </span>
            <br />
            <span>
              <span>
                - Langkah akhir yaitu silahkan mencentang bagian persyaratan
                &amp; kebijakan jika sudah membaca dan menyetujuinya.
                <br />- Pastikan data yang Anda masukan sudah sesuai
                <br />- Kemudian tekan tombol &ldquo;Kirim&rdquo;.
              </span>
              <br />
            </span>
            <br />
          </p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Petunjuk;
