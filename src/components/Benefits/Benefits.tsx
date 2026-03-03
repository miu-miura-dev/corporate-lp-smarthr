import "./Benefits.css";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="benefits-container">
        <h2>Benefits</h2>
        <p className="benefits-description">
          働きやすさを支える制度や環境を整えています。
        </p>

        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>フルリモート可</h3>
            <p>場所にとらわれない柔軟な働き方を実現。</p>
          </div>

          <div className="benefit-card">
            <h3>フレックスタイム制</h3>
            <p>ライフスタイルに合わせて勤務時間を調整可能。</p>
          </div>

          <div className="benefit-card">
            <h3>自己研鑽支援</h3>
            <p>書籍購入や学習費用を会社がサポート。</p>
          </div>

          <div className="benefit-card">
            <h3>健康サポート</h3>
            <p>健康診断や各種サポート制度を完備。</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;