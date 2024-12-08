import "./partner-page.css";
import Chevronright from "../../assets/chevron-right.png";
import FirstComponent from "./partner-page_1st-component/FirstComponent";
import FourthComponent from "./partner-page_4th-component/FourthComponent";
import FifthComponent from "./partner-page_5th-component/FifthComponent";
import CompanyDetail from "./CompanyDetail/CompanyDetail";
import ThirdComponent from "./partner-page_3rd-component/ThirdComponent";
import SecondComponent from "./partner-page_2nd-component/SecondComponent";
import Blogs from "../Reusecomponents/Blogs/Blogs";
import GlobalInfoPart from "../Reusecomponents/GlobalBlock/GlobalBlock";
import HubnexUser from "../Reusecomponents/Hubnex/Hubnex";
import AdvertisingBanner from "../Reusecomponents/Advertising/AdvertisingBanner";


const Partner_page = () => {
  return (
    <div className="partner-page-container">
      <div className="partner-page-nav-portion">
        <span className="shade">Home</span>
        <img src={Chevronright} alt="" />
        Partner Page
      </div>
      <FirstComponent />
      <SecondComponent/>
      <ThirdComponent/>
      <GlobalInfoPart/>
      <FourthComponent/>
      <FifthComponent/>
      <HubnexUser/>
      <CompanyDetail/>
      <AdvertisingBanner/>
      <Blogs/>
    </div>
  );
};

export default Partner_page;
