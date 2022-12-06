import React, { useState } from "react";
import { arrow_right_black } from "../../../../../assets";
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
          <span>
            Mencari Narasumber Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Recusandae doloribus debitis rerum? Iste odit
            architecto molestiae fuga facilis nihil amet beatae, vitae totam,
            maxime vel repudiandae recusandae numquam, minima quaerat! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Dicta odit
            nesciunt esse quas mollitia doloremque temporibus, rem
            necessitatibus fugit quis labore sit aliquid ipsa ratione obcaecati?
            At beatae quibusdam amet! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deleniti minus error placeat corporis impedit,
            sapiente provident nemo asperiores magnam, dolorem vitae architecto
            id numquam possimus deserunt. Ea fugit sapiente doloribus. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
            nesciunt animi quasi sed alias. Ex dignissimos facere omnis laborum
            officia voluptatum sequi exercitationem, ab quas minima laudantium
            ducimus fugit doloribus. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptates odio porro in accusamus, ad facere aut
            libero ipsam reprehenderit. Illum suscipit similique tempore iste
            aut, sint eaque nesciunt consectetur fuga. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Repellat accusantium vel ad
            mollitia, amet assumenda ex, in accusamus non porro sequi, ut nihil
            iste minus. Adipisci aspernatur qui voluptatem aperiam.
          </span>
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
          <span>
            Narasource memberikan layanan untuk para calon Narasumber untuk
            mendapatkan penghasilan. Dengan menjadi Narasumber Anda bisa
            mendapatkan penghasilan tambahan melalui tawaran-tawaran wawancara
            yang ada. Anda perlu melengkapi dokumen yang dibutuhkan oleh
            Narasource untuk divalidasi agar menjadi Narasumber. Ketika menjadi
            Narasumber, anda dapat menyesuaikan waktu pertemuan sesuai dengan
            ketersediaan Anda.
          </span>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Petunjuk;
