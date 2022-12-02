import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  cancel_show_password,
  email_icon,
  error_icon,
  password_icon,
  person,
  show_password,
} from "../../../../assets";
import AuthButton from "../../../../components/buttons/Auth_Buttons/AuthButton";
import { useRegister } from "../../../../hooks/useAuth";
import { authService } from "../../../../services";
import { LoginRequest } from "../../../../types/Login";
import { RegisterRequest } from "../../../../types/Register";
import ModalSuccess from "../Modal-Succes/ModalSuccess";
import ModalTerms from "../Modal-Terms/ModalTerms";
import "./Form-Register.css";

const FormRegister: React.FC = () => {
  const history = useNavigate(); //memindahkan langsung direct ke login setelah sukses
  const [password, setPassword] = useState<string>("");
  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const [passwordConfirmShown, setPasswordConfirmShown] =
    useState<boolean>(false);
  const [isEmailMatch, setIsEmailMatch] = useState<boolean>();
  const [isPasswordMatch, setIsPasswordMatch] = useState<boolean>();
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);
  const [showTermsModal, setShowTermsModal] = useState<boolean>(false);
  const [btnDisable, setBtnDisable] = useState<boolean>(true);
  const [agree, setAgree] = useState<boolean>(false);
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const btnDisablbeFn = () => {
    if (
      data.email.length > 0 &&
      data.name.length > 0 &&
      data.username.length > 0 &&
      isPasswordMatch === true &&
      agree === true
    ) {
      return false;
    } else {
      return true;
    }
  };

  const mutationRegister = useRegister();

  const registerWithMutation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const inputObject = Object.fromEntries(formData);

    mutationRegister.mutate(inputObject as any as RegisterRequest, {
      onSuccess: (resp) => {
        console.log("resp", resp);
        setShowSuccessModal(true); //ganti
      },
      onError: (error: any) => {
        if (error.response.data.message == "Email already exist") {
          setIsEmailMatch(false);
        }
        console.log("error.response", error.response);
      },
    });
  };
  const isPasswordMatchCheck = (value: string) => {
    if (value !== password) {
      setIsPasswordMatch(false);
    } else {
      setIsPasswordMatch(true);
    }
  };

  const toggleSuccessModal = () => {
    history("/auth/login");
    setShowSuccessModal((prevState) => !prevState);
  };

  const toggleAgree = () => {
    setAgree((prevState) => !prevState);
  };

  const toggleTermsModal = () => {
    setShowTermsModal((prevState) => !prevState);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglePasswordConfirm = () => {
    setPasswordConfirmShown(!passwordConfirmShown);
  };

  useEffect(() => {
    const state = btnDisablbeFn();
    setBtnDisable(state);
  }, [
    data.email.length,
    data.name.length,
    data.username.length,
    isPasswordMatch,
    agree,
  ]);
  return (
    <div className="form-register-component">
      <form onSubmit={(event) => registerWithMutation(event)}>
        <div className="form-regis-nama">
          <h1 className="input-title sm-input-title">Nama</h1>
          <div className="form-regis-input">
            <label htmlFor="nama" className="input-icon-regis">
              <img src={person} className="icon-regis" />
            </label>
            <input
              name="name" //tergantung backend
              id="nama"
              type="text"
              onChange={(e) => handleChange(e)}
              className="input-field-regis lg-field-regis"
              placeholder="Masukkan nama anda"
            />
          </div>
        </div>
        <div className="form-regis-nama-pengguna mt-form">
          <h1 className="input-title sm-input-title">Nama Pengguna</h1>
          <div className="form-regis-input">
            <label htmlFor="nama-pengguna" className="input-icon-regis">
              <img src={person} className="icon-regis" />
            </label>
            <input
              name="username" //tergantung backend
              id="nama-pengguna"
              type="text"
              onChange={(e) => handleChange(e)}
              className="input-field-regis lg-field-regis"
              placeholder="Masukkan nama pengguna"
            />
          </div>
        </div>
        <div className="form-regis-email mt-form">
          <h1 className="input-title sm-input-title">Email</h1>
          <div
            className={`form-regis-input ${
              isEmailMatch == false ? "red-border" : "none"
            }`}
          >
            <label htmlFor="email-register" className="input-icon-regis">
              <img src={email_icon} className="icon-regis" />
            </label>
            <input
              name="email" //tergantung backend
              id="email-register"
              type="email"
              onChange={(e) => handleChange(e)}
              className="input-field-regis lg-field-regis"
              placeholder="Masukkan nama pengguna"
            />
          </div>
          <div className="register-error-massage">
            {isEmailMatch == false ? (
              <div className="regis-error-output">
                <img src={error_icon} className="icon-error" />
                <span className="text-error">Email Sudah Terdaftar</span>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="form-regis-password mt-form">
          <h1 className="input-title sm-input-title">Kata Sandi</h1>
          <div className="form-regis-input">
            <label htmlFor="password-register" className="input-icon-regis">
              <img src={password_icon} className="icon-regis" />
            </label>
            <input
              name="password" //tergantung backend
              onChange={(e) => setPassword(e.target.value)}
              value={password} //ganti jadi {password} biar jalan handle repeat password
              type={passwordShown ? "text" : "password"}
              id="password-register"
              className="input-field-regis sm-field-regis"
              placeholder="Masukkan sandi anda"
            />
            <img
              src={passwordShown ? cancel_show_password : show_password}
              className="icon icon-show-pass-regis"
              onClick={togglePassword}
            />
          </div>
        </div>
        <div className="form-regis-repeat-pass mt-form">
          <h1 className="input-title sm-input-title">Konfirmasi Kata Sandi</h1>
          <div
            className={`form-regis-input ${
              isPasswordMatch == false ? "red-border" : "none"
            }`}
          >
            <label htmlFor="password-repeat" className="input-icon-regis">
              <img src={password_icon} className="icon-regis" />
            </label>
            <input //tergantung backend
              onChange={(e) => isPasswordMatchCheck(e.target.value)}
              type={passwordConfirmShown ? "text" : "password"}
              id="password-repeat"
              name="confPasswords"
              className="input-field-regis sm-field-regis"
              placeholder="Masukkan ulang sandi anda"
            />
            <img
              src={passwordConfirmShown ? cancel_show_password : show_password}
              className="icon icon-show-pass-regis"
              onClick={togglePasswordConfirm}
            />
          </div>
          <div className="register-error-massage">
            {isPasswordMatch == false ? (
              <div className="regis-error-output">
                <img src={error_icon} className="icon-error" />
                <span className="text-error">Kata sandi tidak cocok</span>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="form-regis-terms">
          <input
            type="checkbox"
            id="terms"
            className="custom-checkbox"
            checked={agree}
            onClick={() => toggleAgree()}
          />
          <span>
            Saya telah membaca dan menyetujui{" "}
            <span className="terms-anchor" onClick={() => toggleTermsModal()}>
              Persyaratan & Kebijakan
            </span>{" "}
            dari pihak NaraSource.
          </span>
        </div>
        <div className="register-btn">
          <AuthButton
            color={`${btnDisable ? "disable" : "primary"}`}
            size="sm"
            disabled={btnDisable}
          >
            Daftar
          </AuthButton>
        </div>
      </form>
      {showTermsModal ? (
        <ModalTerms
          onClose={() => toggleTermsModal()}
          onClick={() => {
            toggleTermsModal();
            toggleAgree();
          }}
        />
      ) : (
        <></>
      )}
      {showSuccessModal ? (
        <ModalSuccess onClose={() => toggleSuccessModal()} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default FormRegister;
