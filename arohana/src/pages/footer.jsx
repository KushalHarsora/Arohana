import React from "react";
import "../css/footer.css";
import introduction from "../assets/introduction.png";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";

export default function footer() {
  return (
    <>
      <div className="mainFooter">
        <div className="footerPhoto">
          <img src={introduction} />
        </div>
        <div className="mainFooterInside">
          <div className="footer">
            <div className="footerName">
              <h2>Arohana</h2>
              <p>Uniting for Change, One Platform, One World.</p>
            </div>
            <div className="footerlinks">
              <div>
                <ul>
                  <li>
                    <a href="/footer">About us</a>
                  </li>
                  <li>
                    <a href="/footer">Contact us</a>
                  </li>
                  <li>
                    <a href="/footer">Guidelines</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerlinks">
              <div>
                <ul>
                  <li>
                    <a href="/footer">Services</a>
                  </li>
                  <li>
                    <a href="/footer">Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerlinks">
              <div>
                <ul>
                  <li>
                    <a href="/footer">Join us</a>
                  </li>
                  <li>
                    <a href="/footer">Career</a>
                  </li>
                  <li>
                    <a href="/footer">Sponsership</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footerlinks">
              <div>
                <ul>
                  <li>
                    <a href="/footer">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/footer">Affiliates</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footerLine">
            <span></span>
          </div>
          <div className="footerIcons">
            <div className="footerIconsInside">
              <a href="/footer">
                <img src={fb} alt="facebook" />
              </a>
              <a href="/footer">
                <img src={twitter} alt="twitter" />
              </a>
              <a href="/footer">
                <img src={instagram} alt="instagram" />
              </a>
              <a href="/footer">
                <img src={youtube} alt="youtube" />
              </a>
            </div>
          </div>
          <div className="footerCopyright">
            <p>© Copyright | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}
