import React from "react";
import { close_black } from "../../../../assets";
import { AuthButton, Modal } from "../../../../components";
import "./ModalTerms.css";

interface TermsModalProps {
  onClose: () => void;
  onClick: () => void;
}

const ModalTerms: React.FC<TermsModalProps> = (props) => {
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
          <span className="modal-terms-content-wrapper">
            <span className="modal-terms-bold-text">
              Selamat datang di Narasource
            </span>
            <span className="modal-terms-text">
              Dengan mengunduh, memasang, dan/atau menggunakan Platform
              Narasource (sesuai yang didefinisikan di bawah ini), Anda
              menyetujui bahwa Anda telah membaca, memahami, dan menyetujui
              Syarat dan Ketentuan (“Syarat dan Ketentuan”) ini.
            </span>
            <span className="modal-terms-text">
              Syarat dan Ketentuan ini menandakan perjanjian hukum antara Anda
              dan NaraSource dan berlaku untuk kunjungan Anda ke dan penggunaan
              Anda atas Platform dan Layanan kami (sesuai yang didefinisikan di
              bawah ini). Namun, harap diperhatikan bahwa syarat, batasan, dan
              kebijakan privasi tambahan dapat berlaku.
            </span>
            <span className="modal-terms-text">
              Jika Anda tidak menyetujui Syarat dan Ketentuan ini, jangan
              mengakses dan/atau menggunakan Platform dan/atau Layanan ini.
            </span>
            <span className="modal-terms-text">
              Peran platform ini adalah memfasilitasi komunikasi antara Anda
              dengan para Narasumber/pakar yang terpercaya dalam bentuk layanan
              wawancara. Anda memiliki hak untuk mengkonsiderasi dan memilih
              apabila layanan ini sesuai atau tidak untuk Anda.
            </span>
            <span className="modal-terms-text">
              · Narasumber tidak diperuntukan dan berhak menolak untuk
              pertanyaan di luar topik dari bidang Narasumber.
            </span>
            <span className="modal-terms-text">
              · Narasumber dari Narasource dapat menolak memberikan jawaban atau
              melakukan pertemuan bilamana terdapat potensi penyalahgunaan
              layanan.
            </span>
            <span className="modal-terms-text">
              · Pengguna mengetahui bahwa Narasumber akan memberikan wawancara
              sesuai dengan data Pengguna yang didaftarkan pada saat registrasi
              dan informasi yang telah disampaikan.
            </span>
            <span className="modal-terms-text">
              · Narasource bukan merupakan penyedia layanan , maka Narasource
              tidak mempekerjakan pakar yang tergabung dalam platform sebagai
              penyedia layanan, dan kami tidak bertanggung jawab atas tindakan,
              kecerobohan, kelalaian, dan/atau kelengahan penyedia layanan.
              Platform merupakan layanan informasi dan komunikasi online yang
              disediakan oleh Narasource.
            </span>
            <span className="modal-terms-bold-text">A.DEFINISI</span>
            <span className="modal-terms-text">
              “Kami” atau “Narasource“, berarti pemilik, pengembang, dan
              pengelola situs www.NaraSource.com, dan berbagai Platform lainya.
            </span>
            <span className="modal-terms-text">
              “Anda“, berarti setiap orang yang mengakses dan menggunakan
              layanan dan jasa yang disediakan oleh Kami.
            </span>
            <span className="modal-terms-text">
              “Penyedia Layanan” merupakan: i) Narasumber profesional yang
              memiliki portofolio yang akurat serta mengikuti peraturan
              berkaitan Peraturan Menteri Dalam Negeri (Permendagri) yaitu dalam
              Pasal 1 Angka 13 Permendagri No. 33 Tahun 2007 Berdasarkan pedoman
              penyelenggaraan penelitian dan pengembangan di lingkungan
              Departemen Dalam Negeri dan Pemerintahan Daerah, tenaga ahli atau
              narasumber adalah orang yang memiliki kompetensi di bidang ilmu
              atau keahlian tertentu.
            </span>
            <span className="modal-terms-text">
              Kami melakukan verifikasi dan seleksi terhadap Narasumber kami
              untuk memastikan kualifikasinya; dan/atau ii) individu (pakar)
              yang memiliki latar belakang pendidikan sesuai dan portofolio yang
              akurat sesuai bidangnya.
            </span>
            <span className="modal-terms-text">
              “Pengguna“, merupakan individu yang memiliki hak untuk mengadakan
              perjanjian terikat berdasarkan hukum Republik Indonesia untuk
              menggunakan layanan wawancara yang disediakan oleh Kami.
            </span>
            <span className="modal-terms-text">
              “Platform” merupakan segala produk di bidang teknologi informasi
              yang dikembangkan dan dikelola oleh Narasource, termasuk namun
              tidak terbatas pada segala bentuk fitur, layanan, konten, ataupun
              informasi yang terdapat dalam aplikasi dan situs Narasource,
              seperti layanan wawancara dalam bentuk pertemuan Daring, layanan,
              konten, ataupun informasi yang terdapat dalam aplikasi dan situs
              NaraSource sebagaimana disebutkan di dalam Perjanjian ini dapat
              berubah dari waktu ke waktu, berdasarkan keputusan internal
              Narasource.
            </span>
            <span className="modal-terms-text">
              “Informasi Pribadi“, berarti tiap dan seluruh data pribadi yang
              diberikan oleh Pengguna Platform Narasource, termasuk namun tidak
              terbatas pada nama, nomor identifikasi, data konsultasi, lokasi
              pengguna, kontak pengguna, serta dokumen dan data lainnya
              sebagaimana diminta pada formulir pendaftaran akun atau formulir
              lainnya pada saat menggunakan Platform Narasource.
            </span>
            <span className="modal-terms-bold-text">B.LAYANAN</span>
            <span className="modal-terms-text">
              Jenis-jenis layanan yang dapat diakses melalui Platform adalah
              sebagai berikut:
            </span>
            <span className="modal-terms-text">
              Konten Narasource. Konten Narasource yang ditawarkan di Platform
              Narasource hanya bersifat umum dan digunakan untuk memberikan
              informasi kepada Customer. Bagian mana pun dalam konten sebaiknya
              tidak dianggap atau digunakan sebagai pengganti untuk saran
              Narasources.
            </span>
            <span className="modal-terms-text">
              Wawancara dalam bentuk pertemuan Daring, dengan pilihan topik
              sesuai dengan bidang dari Narasumber.
            </span>
            <span className="modal-terms-text">
              Layanan lain apa pun yang dapat kami tambahkan dari waktu ke
              waktu.
            </span>
            <span className="modal-terms-text">
              Informasi yang terdapat dalam Platform Narasource ditampilkan
              sesuai keadaan kenyataan untuk tujuan informasi umum. Kami
              berusaha untuk selalu menyediakan dan menampilkan informasi yang
              terbaru dan akurat, namun Kami tidak menjamin bahwa segala
              informasi sesuai dengan ketepatan waktu atau relevansi dengan
              kebutuhan Anda.
            </span>
            <span className="modal-terms-text">
              Layanan yang Kami berikan tidak bersifat memaksa atau mengikat,
              serta tidak mengharuskan Anda untuk mengikuti informasi yang
              tersedia. Tidak ada situasi atau keadaan apapun yang dapat membuat
              Kami dikenakan tanggung jawab atas kemungkinan kerugian yang Anda
              alami karena pengambilan keputusan yang dilakukan oleh Anda
              sendiri terkait tindakan atas informasi produk yang kami sampaikan
              di Platform Narasource.
            </span>
            <span className="modal-terms-bold-text">C.PENGGUNA LAYANAN</span>
            <span className="modal-terms-text">
              Dengan Anda melanjutkan penggunaan atau pengaksesan Platform
              Narasource, berarti Anda telah menyatakan serta menjamin kepada
              Kami bahwa:
            </span>
            <span className="modal-terms-text">
              Anda hanya diperkenankan untuk mengakses dan/atau menggunakan
              Platform NaraSource untuk keperluan pribadi dan non-komersil, yang
              berarti bahwa Platform NaraSource hanya boleh diakses dan
              digunakan secara langsung oleh Pengguna. Akses dan penggunaan
              Platform NaraSource diluar dari keperluan pribadi atau
              non-komersil dilarang keras, dan melanggar Syarat dan Ketentuan
              ini.
            </span>
            <span className="modal-terms-text">
              Anda menyatakan dan menjamin bahwa Anda adalah individu yang
              secara hukum berhak untuk mengadakan perjanjian yang mengikat
              berdasarkan hukum Negara Republik Indonesia. Jika tidak, Kami atau
              Penyedia Layanan berhak berdasarkan hukum untuk membatalkan
              perjanjian yang dibuat dengan Anda.
            </span>
            <span className="modal-terms-text">
              Anda tidak diperkenankan untuk menanyakan hal-hal yang bersifat
              pribadi kepada Penyedia Layanan (termasuk di dalamnya adalah nomor
              telepon, selular, dan e-mail dari Penyedia Layanan).
            </span>
            <span className="modal-terms-text">
              Anda tidak diperkenankan untuk, serta berjanji untuk tidak
              melakukan hal-hal berikut ini:
            </span>
            <span className="modal-terms-text">
              Mengalihkan akun Pengguna di Platform Narasource kepada pihak
              ketiga lainnya tanpa persetujuan tertulis Narasource.
            </span>
            <span className="modal-terms-text">
              Menyebarkan virus, spam atau teknologi sejenis lainnya yang dapat
              merusak dan/atau merugikan Narasource dan/atau Pengguna lainnya.
            </span>
            <span className="modal-terms-text">
              Menyakiti, menyiksa, mempermalukan, memfitnah, mencemarkan nama
              baik, mengancam, mengintimidasi atau mengganggu orang atau bisnis
              lain, atau apapun yang melanggar privasi atau yang Kami anggap
              cabul, menghina, penuh kebencian, tidak senonoh, tidak patut,
              tidak pantas, tidak dapat diterima, mendiskriminasikan atau
              merusak.
            </span>
            <span className="modal-terms-text">
              Menggunakan Platform Narasource untuk tujuan pelanggaran hukum,
              tindakan penipuan atau tindakan komersil.
            </span>
            <span className="modal-terms-text">
              Menggunakan Platform Narasource untuk mendistribusikan iklan atau
              materi lainnya yang tidak diinginkan atau diizinkan oleh
              Narasource.
            </span>
            <span className="modal-terms-text">
              Melanggar atau menyalahi hak orang lain, termasuk tanpa kecuali:
              hak paten, merek dagang, hak cipta, rahasia dagang, publisitas,
              dan hak milik lainnya.
            </span>
            <span className="modal-terms-text">
              Membuat, memeriksa, memperbarui, mengubah atau memperbaiki
              database, rekaman atau direktori Anda ataupun orang lain.
            </span>
            <span className="modal-terms-text">
              Mengambil atau mengumpulkan data pribadi dari Pengguna lain,
              termasuk namun tidak terbatas pada alamat e-mail, tanpa
              persetujuan Pengguna tersebut.
            </span>
            <span className="modal-terms-text">
              Memasukkan atau memindahkan fitur pada Platform Narasource tanpa
              persetujuan tertulis dari Narasource.
            </span>
            <span className="modal-terms-text">
              Menempatkan informasi atau aplikasi lain yang melanggar hak
              kekayaan intelektual pihak ketiga lainnya di dalam Platform
              Narasource.
            </span>
            <span className="modal-terms-text">
              Mengubah atau mengatur ulang bagian apapun dalam Platform
              Narasource yang akan mengganggu atau menaruh beban berlebihan pada
              sistem komunikasi dan teknis kami.
            </span>
            <span className="modal-terms-text">
              Menggunakan kode komputer otomatis, proses, program, robot, net
              crawler, spider, pemrosesan data, trawling atau kode computer,
              proses, program atau sistem ‘screen scraping’ alternatif.
            </span>
            <span className="modal-terms-text">
              Melanggar Syarat dan Ketentuan, atau petunjuk lainnya yang ada
              pada Platform Narasource.
            </span>
            <span className="modal-terms-text">
              Kami akan menjamin keamanan dan kerahasiaan Informasi Pribadi
              Anda, termasuk di dalamnya segala bentuk pertemuan secara daring.
            </span>
            <span className="modal-terms-text">
              Anda memberikan Kami lisensi non-eksklusif untuk menggunakan
              materi atau informasi yang Anda kirimkan di Platform dan/atau
              berikan kepada Kami, termasuk tetapi tidak terbatas pada
              pertanyaan, ulasan, komentar, dan saran.
            </span>
            <span className="modal-terms-text">
              Kami tidak bertanggung jawab atas cedera, kematian atau kerugian
              langsung maupun tidak langsung yang disebabkan oleh interaksi atau
              Penyedia Layanan dengan Pengguna. Narasource juga tidak
              bertanggung jawab atas kesalahan atau tindakan kriminal yang
              dilakukan oleh para Penyedia Layanan selama pemberian jasa atau
              layanan melalui Platform Narasource. Dalam hal ini, Penyedia
              Layanan hanyalah merupakan mitra kerja Narasource.
            </span>
            <span className="modal-terms-text">
              Kami tidak bertanggung jawab atas kehilangan atau kerusakan yang
              di luar perkiraan saat Pengguna mengakses atau menggunakan
              Platform Narasource. Ini termasuk kehilangan penghematan yang
              diharapkan, kerugian finansial atau fisik karena adanya kesalahan
              dalam pengambilan tindakan oleh Penyedia Layanan atau kehilangan
              atau kerusakan dalam bentuk apapun yang Anda harus alami akibat
              penggunaan Platform Narasource.
            </span>
            <span className="modal-terms-bold-text">
              D. HAK KEKAYAAN INTELEKTUAL
            </span>
            <span className="modal-terms-text">
              Semua Hak Kekayaan Intelektual yang ada di dalam Platform
              Narasource adalah kepunyaan dari Kami.
            </span>
            <span className="modal-terms-text">
              Tiap atau keseluruhan informasi dan materi dan konten, termasuk
              tetapi tidak terbatas pada, tulisan, perangkat lunak, teks, data,
              grafik, gambar, audio, video, logo, ikon atau kode-kode html dan
              kode-kode lain yang ada di Platform Narasource dilarang
              dipublikasikan, dimodifikasi, disalin, digandakan atau diubah
              dengan cara apapun di luar area Platform Narasource tanpa
              persetujuan tertulis dari Kami.
            </span>
            <span className="modal-terms-text">
              Pelanggaran terhadap hak-hak dalam Platform Narasource dapat
              ditindak sesuai dengan peraturan yang berlaku.
            </span>
            <span className="modal-terms-text">
              Anda dapat menggunakan informasi atau isi dalam Platform
              Narasource hanya untuk penggunaan pribadi non-komersil. Kecuali
              ditentukan sebaliknya dan/atau diperbolehkan secara tegas oleh
              undang-undang hak cipta, maka Pengguna dilarang untuk menyalin,
              membagikan ulang, mentransmisi ulang, mempublikasi atau melakukan
              tindakan eksploitasi komersial dari pengunduhan yang dilakukan
              tanpa persetujuan tertutlis pemilik Hak Kekayaan Intelektual
              tersebut. Dalam hal Pengguna telah mendapatkan izin yang
              diperlukan maka Pengguna dilarang melakukan perubahan atau
              penghapusan. Pengguna dengan ini menyatakan menerima dan
              mengetahui bahwa dengan mengunduh materi Hak Kekayaan Intelektual
              bukan berarti mendapatkan hak kepemilikan atas pengunduhan materi
              Hak Kekayaan Intelektual tersebut.
            </span>
            <span className="modal-terms-bold-text">E.PENUTUP</span>
            <span className="modal-terms-text">
              Penggunaan dan akses ke Platform Narasource diatur oleh Syarat dan
              Ketentuan serta Kebijakan Privasi Kami. Dengan mengakses atau
              menggunakan Platform Narasource, berarti Anda telah memahami dan
              menyetujui serta terikat dan tunduk dengan segala syarat dan
              ketentuan yang berlaku.
            </span>
            <span className="modal-terms-text">
              Hubungan antara Narasource dan Pengguna merupakan suatu hubungan
              independen dan tidak memiliki hubungan keagenan, kemitraan, usaha
              patungan, karyawan-perusahaan atau pemilik waralaba-pewaralaba
              yang akan dibuat atau dibuat dengan adanya Perjanjian ini.
            </span>
            <span className="modal-terms-text">
              Judul di dalam Perjanjian ini dibuat hanya sebagai acuan, dan sama
              sekali tidak menetapkan, membatasi, menjelaskan atau menjabarkan
              apa yang termaktub dalam pasal atau ketentuan tersebut.
            </span>
            <span className="modal-terms-text">
              Kami berhak untuk menutup atau mengubah atau memperbaharui Syarat
              dan Ketentuan ini setiap saat tanpa pemberitahuan, dan berhak
              untuk membuat keputusan akhir jika tidak ada ketidakcocokan. Kami
              tidak bertanggung jawab atas kerugian dalam bentuk apa pun yang
              timbul akibat perubahan pada Syarat dan Ketentuan.
            </span>
            <span className="modal-terms-text">
              Kami memiliki hak untuk menginvestigasi dan menuntut hak untuk
              setiap pelanggaran atas Perjanjian ini sepanjang yang dimungkinkan
              dan diperkenankan oleh hukum.
            </span>
            <span className="modal-terms-text">
              Pengguna dengan ini mengakui bahwa NaraSource memiliki hak untuk
              memonitor akses penggunaan Platform NaraSource untuk memastikan
              kepatuhan para pihak atas Perjanjian ini, atau untuk mematuhi
              peraturan yang berlaku atau perintah atau persyaratan dari
              pengadilan, lembaga administratif atau badan pemerintahan lainnya
              di Republik Indonesia.
            </span>
            <span className="modal-terms-text">
              Apabila terdapat 1 (satu) atau lebih ketentuan di dalam Perjanjian
              ini yang dinyatakan tidak berlaku, melawan hukum atau tidak dapat
              dilaksanakan berdasarkan ketentuan perundang-undangan yang berlaku
              di Republik Indonesia maka keadaan tersebut tidak akan
              mempengaruhi keberlakuan ketentuan-ketentuan lain dalam Perjanjian
              ini. Dalam hal terjadi keadaan tersebut, para pihak berjanji untuk
              tetap berusaha memenuhi segala ketentuan yang terdapat di dalam
              Perjanjian ini.
            </span>
            <span className="modal-terms-text">
              Segala sengketa yang berkaitan dengan Perjanjian ini, akan
              pertama-tama diselesaikan secara musyawarah untuk mufakat oleh
              para pihak. Dalam hal penyelesaian secara musyawarah untuk mufakat
              tidak dapat dilakukan, para pihak memutuskan untuk menyelesaikan
              konflik yang terjadi melalui Badan Arbitrase Nasional Indonesia
              (BANI) sesuai dengan prosedur yang berlaku di BANI.
            </span>
            <span className="modal-terms-text">
              Perjanjian ini diatur, ditafsirkan, serta dilaksanakan berdasarkan
              hukum yang berlaku di Republik Indonesia dan para pihak diwajibkan
              untuk tunduk kepada semua peraturan yang berlaku di Indonesia.
            </span>
          </span>
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

export default ModalTerms;
