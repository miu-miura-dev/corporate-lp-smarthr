import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!form.name) {
      newErrors.name = "名前を入力してください";
      isValid = false;
    }

    if (!form.email) {
      newErrors.email = "メールアドレスを入力してください";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "正しいメールアドレス形式で入力してください";
      isValid = false;
    }

    if (!form.message) {
      newErrors.message = "メッセージを入力してください";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("送信しました（ダミー）");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>名前</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>メールアドレス</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>メッセージ</label>
            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit" className="submit-btn">
            送信する
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;