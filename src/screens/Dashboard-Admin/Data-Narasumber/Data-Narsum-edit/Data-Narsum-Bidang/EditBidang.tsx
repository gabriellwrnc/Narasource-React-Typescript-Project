import React, { useState } from "react";
import { Link } from "react-router-dom";
import MultiSelect, {
  SelectOption,
} from "../../../../Dashboard-User/Profile-Outlet/Menjadi-Narasumber/MultiSelect/MultiSelect";
import "./EditBidang.css";

const EditBidang: React.FC = () => {
  const options = [
    {
      label: "UI/UX Designer",
      value: 1,
    },
    {
      label: "Graphic Designer",
      value: 2,
    },
    {
      label: "Frontend Developer",
      value: 3,
    },
    {
      label: "Backend Developer",
      value: 4,
    },
    {
      label: "Mobile Developer",
      value: 5,
    },
    {
      label: "Data Scientist",
      value: 6,
    },
    {
      label: "Job Analyst",
      value: 7,
    },
    {
      label: "Business Analyst",
      value: 8,
    },
  ];
  const [value, setValue] = useState<SelectOption[]>([options[0]]);
  return (
    <div className="edit-user-2-wrapper">
      <div className="edit-path">
        <span className="edit-path-judul">Data Narasumber</span> /{" "}
        <span className="edit-path-judul">Narasumber</span> / Bidang yang
        Didalami
      </div>
      <span className="edit-user-title">Pengaturan Data Narasumber</span>
      <div className="edit-bidang-narsum">
        <MultiSelect
          multiple
          options={options}
          value={value}
          onChange={(o) => setValue(o)}
        />
      </div>
      <div className="edit-user-save">
        <Link
          to={"/dashboard-admin/data-narsum/edit-1"}
          className="profile-link"
        >
          <div className="btn-simpan-edit">Simpan</div>
        </Link>
        <Link
          to={"/dashboard-admin/data-narsum/edit-1"}
          className="profile-link"
        >
          <div className="btn-batal-edit">Batal</div>
        </Link>
      </div>
    </div>
  );
};

export default EditBidang;
