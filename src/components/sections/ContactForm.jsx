import { useState } from "react";
import { isContactApiConfigured, sendContactMessage } from "../../lib/sendContactMessage";
import Button from "../ui/Button";

const initialState = { name: "", email: "", subject: "", message: "", website: "" };

export default function ContactForm({ recipientEmail, config }) {
  const [form, setForm] = useState({ ...initialState, subject: config.subject });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState({});
  const apiReady = isContactApiConfigured();

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address";
    }
    if (!form.message.trim()) nextErrors.message = "Message is required";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (form.website) return;
    if (!validate()) return;

    setStatus("sending");
    setFeedback("");

    try {
      await sendContactMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim() || config.subject,
        message: form.message.trim(),
        recipientEmail,
      });
      setStatus("success");
      setFeedback(config.successMessage);
      setForm({ ...initialState, subject: config.subject });
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || config.errorMessage);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <label className="honeypot" aria-hidden="true">
        <span>Website</span>
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <div className="form-row">
        <label className="form-field">
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <em className="field-error">{errors.name}</em>}
        </label>

        <label className="form-field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <em className="field-error">{errors.email}</em>}
        </label>
      </div>

      <label className="form-field">
        <span>Subject</span>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="What would you like to discuss?"
        />
      </label>

      <label className="form-field">
        <span>Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project or opportunity..."
          rows={5}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <em className="field-error">{errors.message}</em>}
      </label>

      <Button type="submit" icon="Send" variant="primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>

      {!apiReady && (
        <p className="form-error" role="status">
          Add VITE_WEB3FORMS_ACCESS_KEY in `.env` (local) or Vercel Environment Variables (production).
        </p>
      )}

      {status === "success" && (
        <p className="form-success" role="status">
          {feedback}
        </p>
      )}

      {status === "error" && (
        <p className="form-error" role="status">
          {feedback}
        </p>
      )}
    </form>
  );
}
