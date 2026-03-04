import "./Hero.css";
import aboutImage from "../../assets/Hero.jpg";
import Button from "../common/Button";



const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <h1>
            働くを、もっと自由に。
            <br />
            SmartHRで未来をつくる。
          </h1>

          <p>
            私たちはテクノロジーで人事・労務の課題を解決し、
            働くすべての人を支えています。
          </p>

          <div className="hero-buttons">
            <Button variant="primary" onClick={() => alert("ダミーです")}>募集職種を見る</Button>
            <Button variant="secondary" onClick={() => alert("ダミーです")}>会社を知る</Button>
          </div>
        </div>

        <div className="hero-visual">
          <img src={aboutImage} alt="チーム写真" />
        </div>
      </div>
    </section>
  );
};

export default Hero;