import "./blogs.css";
import './blog-res.css'
import DiagonalArrow from "@/assets/north_west.png";
import CardImg1  from "@/assets/image 24.png";
import CardImg2  from "@/assets/image 14.png";
import CardImg3  from "@/assets/image 301.png";
import Rightarrow from "@/assets/Vector.png";

const Blogs = () => {

  return (
    <div className="blog-main-cont">
      <div className="blog-container">
        <div className="blog-heading">Blogs</div>
        <br />
        <div className="blog-title">Explore the impact we've delivered</div>
        <br />
        <button className="view-btn" >
          View All
          <span className="right-arrow">
            <img src={Rightarrow} alt="" />
          </span>
        </button>
        <br />
        <br />
        <div className="blog-card-cont">
          <div className="blog-card">
            <img src={CardImg1} className="card-image" alt="" />
            <br />
            <button className="marketing-btn">Marketing</button>
            <br />
            <div className="blog-card-title">
              What is Ad Exposure and Why It Matters?
            </div>
            <br />
            <div className="blog-card-para">
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsum.
            </div>
            <br />
            <div className="blog-visit-part">
              Read Full Article
              <span className="right-arrow">
                <img src={DiagonalArrow} alt="" />
              </span>
            </div>
          </div>
          <div className="blog-card card-second">
            <img src={CardImg2} className="card-image" alt="" />
            <br />
            <button className="marketing-btn">Marketing</button>
            <br />
            <div className="blog-card-title">
              What is Ad Exposure and Why It Matters?
            </div>
            <br />
            <div className="blog-card-para">
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsum.
            </div>
            <br />
            <div className="blog-visit-part">
              Read Full Article
              <span className="right-arrow">
                <img src={DiagonalArrow} alt="" />
              </span>
            </div>
          </div>
          <div className="blog-card card-third">
            <img src={CardImg3} className="card-image" alt="" />
            <br />
            <button className="marketing-btn">Marketing</button>
            <br />
            <div className="blog-card-title">
              What is Ad Exposure and Why It Matters?
            </div>
            <br />
            <div className="blog-card-para">
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsum.
            </div>
            <br />
            <div className="blog-visit-part">
              Read Full Article
              <span className="right-arrow">
                <img src={DiagonalArrow} alt="" />
              </span>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Blogs;
