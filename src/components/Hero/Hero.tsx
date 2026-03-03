import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
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
          <button className="primary">募集職種を見る</button>
          <button className="secondary">会社を知る</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;