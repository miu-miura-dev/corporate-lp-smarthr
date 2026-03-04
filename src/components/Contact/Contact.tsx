import { useState } from "react";
import { sendContact } from "../../api/contact";
import "./Contact.css";
import Button from "../common/Button";



const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await sendContact(form);

    setLoading(false);
    setSuccess(true);

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <label>名前</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label>メールアドレス</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>メッセージ</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <Button type="submit">
          {loading ? "送信中..." : "送信する"}
        </Button>
      </form>

      {success && <p>送信が完了しました！</p>}
    </section>
  );
};

export default Contact;