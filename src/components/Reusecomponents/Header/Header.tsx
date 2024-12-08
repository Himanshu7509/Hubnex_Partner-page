import "./header.css";
import './header-res.css'
import DiagonalArrow from "@/assets/north_west.png";
import Leftalignlogo from "@/assets/Hubnex Labs left align.png";
import Downarrow from "@/assets/arrow_back_ios_new.png";
import Rightarrow from "@/assets/Vector.png";

const Header = () => {
 
  return (
    <header className="header-main-cont">
      <div className="header-upper-part">
        <div className="upper-nav-tabs">
          <div className="upper-nav-tabs-items">
            Jobpreneur
            <span className="right-arrow">
              <img src={DiagonalArrow} alt="" />
            </span>
          </div>
          <span className="vr-line">|</span>
          <div className="upper-nav-tabs-items">
            Skillup
            <span className="right-arrow">
              <img src={DiagonalArrow} alt="" />
            </span>
          </div>
          <span className="vr-line">|</span>
          <div className="upper-nav-tabs-items">
            TechFund
            <span className="right-arrow">
              <img src={DiagonalArrow} alt="" />
            </span>
          </div>
        </div>
      </div>
      <hr className="nav-line" />
      <div className="header-lower-nav-part">
        <img
          src={Leftalignlogo}
          alt=""
          className="nav-logo-left-align"
          
        />
        <div className="lower-nav-tabs">
          <div className="lower-nav-tab-items">
            Explore Services
            <span className="right-arrow">
              <img src={Downarrow} alt="" />
            </span>
          </div>
          <div className="lower-nav-tab-items">
            Resources
            <span className="right-arrow">
              <img src={Downarrow} alt="" />
            </span>
          </div>
          <div className="lower-nav-tab-items">
            Community
            <span className="right-arrow">
              <img src={Downarrow} alt="" />
            </span>
          </div>
          <div className="lower-nav-tab-items">About</div>
          
        </div>
        <div className="login-and-sales-part">
          <p className="login-link">Login</p>
          <button className="conn-sales-btn">
            Connect Sales
            <span className="right-arrow">
              <img src={Rightarrow} alt="" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
