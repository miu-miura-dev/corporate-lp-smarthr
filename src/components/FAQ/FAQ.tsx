import { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "リモートワークは可能ですか？",
    answer: "はい、ポジションによりフルリモートが可能です。",
  },
  {
    question: "未経験でも応募できますか？",
    answer: "ポジションによりますが、意欲を重視しています。",
  },
  {
    question: "選考フローを教えてください。",
    answer: "書類選考 → 面接（2〜3回）→ 内定 となります。",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <h2>FAQ</h2>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>

              <div
                className={`faq-answer ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;