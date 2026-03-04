import "./About.css";
import aboutImage from "../../assets/About.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            私たちはテクノロジーの力で、
            働くすべての人が本来の力を発揮できる社会を目指しています。
          </p>
          <p>
            プロダクトだけでなく、組織や文化づくりにも本気で向き合い、
            挑戦を楽しめる環境を大切にしています。
          </p>
        </div>

                

        <div className="about-image">
          <img src={aboutImage} alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;