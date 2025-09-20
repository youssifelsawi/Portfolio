import React, { useState } from "react";

const Contact = () => {
  const [toast, setToast] = useState({ show: false, type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ email: "", message: "" });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 3000);
  };

  // 🔹 Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  // 🔹 Validation logic
  const validate = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.message) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }
    return newErrors;
  };

  // 🔹 Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mblanppg", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        showToast("success", "✅ Message sent successfully!");
        setFormData({ email: "", message: "" });
      } else {
        showToast("error", "❌ Oops! Something went wrong.");
      }
    } catch (error) {
      showToast("error", "❌ Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="px-6 py-12 bg-[#0a1930] text-center relative">
      <h3 className="text-3xl font-semibold mb-4 text-[#64C0B6]">Contact</h3>
      <p className="text-[#9AA6C1] mb-2 max-w-xl mx-auto">
        Feel free to get in touch with me for any web development projects or
        opportunities.
      </p>
      <a
        href="mailto:youssifelsawi27@gmail.com"
        className="text-[#64C0B6] hover:underline"
      >
        youssifelsawi27@gmail.com
      </a>
      <p className="text-[#9AA6C1] mt-2">+201004530713</p>

      <div className="mt-8 max-w-md mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-[#112240] p-6 rounded-2xl shadow-lg space-y-4"
        >
          {/* Email */}
          <div className="flex flex-col text-left">
            <label className="text-[#9AA6C1] mb-1">Your email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`px-4 py-2 rounded-lg bg-[#0a1930] border ${
                errors.email ? "border-red-500" : "border-[#64C0B6]"
              } text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-500" : "focus:ring-[#64C0B6]"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col text-left">
            <label className="text-[#9AA6C1] mb-1">Your message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`px-4 py-2 rounded-lg bg-[#0a1930] border ${
                errors.message ? "border-red-500" : "border-[#64C0B6]"
              } text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
                errors.message ? "focus:ring-red-500" : "focus:ring-[#64C0B6]"
              }`}
              placeholder="Write your message..."
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex items-center justify-center gap-2 font-semibold py-2 rounded-lg shadow-md transition ${
              loading
                ? "bg-gray-500 cursor-not-allowed text-white"
                : "bg-[#64C0B6] text-[#0a1930] hover:bg-[#52a59d]"
            }`}
          >
            {loading && (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* 🔔 Floating Toast Notification */}
      {toast.show && (
        <div
          className={`fixed bottom-6 right-6 px-4 py-2 rounded-lg shadow-lg text-white text-sm transition-opacity duration-500 ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )}
    </section>
  );
};

export default Contact;
