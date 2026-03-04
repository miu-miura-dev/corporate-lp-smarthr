import "./Culture.css";

const Culture = () => {
  return (
    <section id="culture" className="culture">
      <div className="container culture-container">
        <h2>Culture</h2>
        <p className="culture-description">
          私たちが大切にしている価値観と働き方。
        </p>

        <div className="culture-grid">
          <div className="culture-card">
            <div className="icon">🤝</div>
            <h3>チームワーク</h3>
            <p>お互いを尊重し、支え合う文化。</p>
          </div>

          <div className="culture-card">
            <div className="icon">🚀</div>
            <h3>挑戦</h3>
            <p>失敗を恐れず、新しい価値を創造する。</p>
          </div>

          <div className="culture-card">
            <div className="icon">📚</div>
            <h3>成長</h3>
            <p>学び続ける姿勢を大切にする。</p>
          </div>

          <div className="culture-card">
            <div className="icon">🌍</div>
            <h3>多様性</h3>
            <p>多様なバックグラウンドを尊重する。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;