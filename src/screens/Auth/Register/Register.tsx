import React from "react";
import { Link } from "react-router-dom";
import { FormRegister } from "../../../components";
import "./Register.css";

const Register: React.FC = () => {
  return (
    <div className="form-register-wrapper">
      <div className="form-register">
        <FormRegister />
      </div>
      <div className="form-login--footer">
        <p className="akun">Sudah punya akun ?</p>
        <p className="daftar">
          <Link to="/auth/login" className="link">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
