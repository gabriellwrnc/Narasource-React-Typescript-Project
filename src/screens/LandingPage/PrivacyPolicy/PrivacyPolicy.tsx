import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  icon_bca,
  icon_bri,
  icon_cimb,
  icon_gopay,
  icon_ovo,
  icon_shopee,
  landing_footer,
  landing_logo,
  mka,
} from "../../../assets";
import "./PrivacyPolicy.css";

const PrivacyPolicy: React.FC = () => {
  const [colorShown, setColorShown] = useState<boolean>(true);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      //   setColorShown(true);
    } else {
      //   setColorShown(false);
    }

    window.addEventListener("scroll", changeColor);
  };

  useEffect(() => {
    changeColor();
  }, [window.scrollY]);
  return (
    <div className="landing-page-wrapper">
      <div
        className={`landing-page-navbar ${
          colorShown ? "bg-navbar-active" : "bg-navbar"
        } `}
      >
        <div className="landing-page-navbar-left">
          <img src={landing_logo} alt="landing logo" />
        </div>
        <div className="landing-page-navbar-right">
          <a href="#page-1" className="landing-navbar-right-list">
            Beranda
          </a>
          <a href="#page-2" className="landing-navbar-right-list">
            Bidang
          </a>
          <a href="#page-3" className="landing-navbar-right-list">
            Layanan
          </a>
          <a href="#page-5" className="landing-navbar-right-list">
            Tentang Kami
          </a>
          <Link to={"/auth/login"} className="link-white">
            <div className="landing-navbar-right-btn">Masuk</div>
          </Link>
        </div>
      </div>
      <div className="privacy-policy-box-1">
        <div className="box-1-content-1">
          <strong className="privacy-title">Privacy Policy</strong>
          <p>
            PT Media Kreasi Abadi built the Narasource app as a Free app. This
            SERVICE is provided by PT Media Kreasi Abadi at no cost and is
            intended for use as is. This page is used to inform visitors
            regarding our policies with the collection, use, and disclosure of
            Personal Information if anyone decided to use our Service.
          </p>
          <p>
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information that we collect is used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy. The terms used in this
            Privacy Policy have the same meanings as in our Terms and
            Conditions, which are accessible at Narasource unless otherwise
            defined in this Privacy Policy.
          </p>
        </div>
        <div className="box-1-content-2">
          <p>
            <strong>Information Collection and Use</strong>
          </p>
          <p>
            For a better experience, while using our Service, we may require you
            to provide us with certain personally identifiable information. The
            information that we request will be retained by us and used as
            described in this privacy policy.
          </p>
          <div>
            <p>
              The app does use third-party services that may collect information
              used to identify you.
            </p>
            <p>
              Link to the privacy policy of third-party service providers used
              by the app
            </p>
            <ul>
              <li>
                <a
                  href="https://www.google.com/policies/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play Services
                </a>
              </li>
            </ul>
          </div>
          <p>
            <strong>Log Data</strong>
          </p>
          <p>
            We want to inform you that whenever you use our Service, in a case
            of an error in the app we collect data and information (through
            third-party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing our Service, the time and date of your use of
            the Service, and other statistics.
          </p>
          <p>
            <strong>Cookies</strong>
          </p>
          <p>
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites that you visit and are stored on your device's internal
            memory.
          </p>
          <p>
            This Service does not use these “cookies” explicitly. However, the
            app may use third-party code and libraries that use “cookies” to
            collect information and improve their services. You have the option
            to either accept or refuse these cookies and know when a cookie is
            being sent to your device. If you choose to refuse our cookies, you
            may not be able to use some portions of this Service.
          </p>
          <p>
            <strong>Service Providers</strong>
          </p>
          <p>
            We may employ third-party companies and individuals due to the
            following reasons:
          </p>
          <ul>
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p>
            We want to inform users of this Service that these third parties
            have access to their Personal Information. The reason is to perform
            the tasks assigned to them on our behalf. However, they are
            obligated not to disclose or use the information for any other
            purpose.
          </p>
          <p>
            <strong>Security</strong>
          </p>
          <p>
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </p>
          <p>
            <strong>Links to Other Sites</strong>
          </p>
          <p>
            This Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by us. Therefore, we strongly advise
            you to review the Privacy Policy of these websites. We have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>
          <p>
            <strong>Children’s Privacy</strong>
          </p>
          <div>
            <p>
              These Services do not address anyone under the age of 13. We do
              not knowingly collect personally identifiable information from
              children under 13 years of age. In the case we discover that a
              child under 13 has provided us with personal information, we
              immediately delete this from our servers. If you are a parent or
              guardian and you are aware that your child has provided us with
              personal information, please contact us so that we will be able to
              do the necessary actions.
            </p>
          </div>
          <p>
            <strong>Changes to This Privacy Policy</strong>
          </p>
          <p>
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page.
          </p>
          <p>This policy is effective as of 2022-12-09</p>
          <p>
            <strong>Contact Us</strong>
          </p>
          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at narasource.id@gmail.com.
          </p>
        </div>
      </div>
      <div className="landing-page-6">
        <div className="landing-page-6-box">
          <div className="landing-page-6-content">
            <img src={landing_footer} alt="landing footer" />
            <span className="page-6-content-platform">
              Platform Wawancara Online
            </span>
            <span className="page-6-content-slogan">
              #WawancaraTanpaKhawatirDitolak
            </span>
            <span className="page-6-content-copyright">
              Copyright Narasource, 2022
            </span>
          </div>
          <div className="landing-page-6-content">
            <span className="page-6-content-title">Pembayaran</span>
            <div className="page-6-content-2-footer">
              <span className="content-2-footer-title">Virtual Account</span>
              <div className="content-2-footer-picture">
                <a href="https://bri.co.id/" target="_blank">
                  <img src={icon_bri} alt="icon bri" className="icon-footer" />
                </a>
                <a href="https://www.klikbca.com/" target="_blank">
                  <img src={icon_bca} alt="icon bri" className="icon-footer" />
                </a>
                <a href="https://www.cimbniaga.co.id/" target="_blank">
                  <img src={icon_cimb} alt="icon bri" className="icon-footer" />
                </a>
              </div>
            </div>
            <div className="page-6-content-2-footer">
              <span className="content-2-footer-title">E-Wallet</span>
              <div className="content-2-footer-picture">
                <a href="https://gopay.co.id/" target="_blank">
                  <img
                    src={icon_gopay}
                    alt="icon gopay"
                    className="icon-footer"
                  />
                </a>
                <a href="https://www.ovo.id/" target="_blank">
                  <img src={icon_ovo} alt="icon ovo" className="icon-footer" />
                </a>
                <a href="https://shopeepay.co.id/" target="_blank">
                  <img
                    src={icon_shopee}
                    alt="icon shopeepay"
                    className="icon-footer"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="landing-page-6-content">
            <span className="page-6-content-title">Informasi</span>
            <span className="content-2-footer-title margin-bottom">
              Syarat & Ketentuan
            </span>
            <Link
              to={"/privacy-policy"}
              className="content-2-footer-title link-none "
            >
              Kebijakan Privasi
            </Link>
            <span className="page-6-content-title margin-top">Alamat</span>
            <a
              href="https://goo.gl/maps/7FD12RDfCKHLfzPj6"
              target="_blank"
              className="link-footer-map"
            >
              <span className="content-2-footer-title margin-bottom">
                Komplek Ruko,
              </span>
              <span className="content-2-footer-title margin-bottom">
                Jl. Borneo Paradiso No.3,
              </span>
              <span className="content-2-footer-title margin-bottom">
                Sepinggan, Balikpapan Selatan,{" "}
              </span>
              <span className="content-2-footer-title">
                Balikpapan City, East Kalimantan 76116
              </span>
            </a>
          </div>
          <div className="landing-page-6-content">
            <span className="page-6-content-title">Kontak</span>
            <span className="content-2-footer-title margin-bottom">
              Email: narasource.id@gmail.com
            </span>
            <span className="content-2-footer-title">
              Nomor Hp: 082292194591
            </span>
            <span className="page-6-content-title margin-top">Bagian Dari</span>
            <div className="logo-footer-mka-wrapper">
              <div className="logo-footer-mka">
                <a href="http://mediakreasiabadi.co.id/" target="_blank">
                  <img src={mka} alt="logo mka" />
                </a>
              </div>
              <span className="logo-footer-mka-name">Media Kreasi Abadi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
