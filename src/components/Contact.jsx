import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    setStatus("loading");

    const endpoint = "https://formspree.io/f/xankvkao";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });

      if (res.ok) {
        setStatus("sent");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto px-6 mt-24 text-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold text-white"
      >
        Get in Touch
      </motion.h2>

      <p className="text-slate-400 mt-3 text-sm md:text-base">
        Have a project, idea, or opportunity? Let’s build something amazing together.
      </p>

      {/* Contact Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl"
      >
        <form onSubmit={handleSubmit} className="grid gap-5 text-left">
          
          {/* Name Input */}
          <div className="relative">
            <User className="absolute left-3 top-4 w-5 h-5 text-slate-400" />
            <input
              required
              name="name"
              placeholder="Your Name"
              className="w-full p-3 pl-11 rounded-lg bg-white/10 border border-white/10 focus:border-indigo-400 outline-none text-white"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <Mail className="absolute left-3 top-4 w-5 h-5 text-slate-400" />
            <input
              required
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 pl-11 rounded-lg bg-white/10 border border-white/10 focus:border-indigo-400 outline-none text-white"
            />
          </div>

          {/* Message Box */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-slate-400" />
            <textarea
              required
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              className="w-full p-3 pl-11 rounded-lg bg-white/10 border border-white/10 focus:border-indigo-400 outline-none text-white"
            ></textarea>
          </div>

          {/* Submit Button + Status */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition text-white font-semibold shadow-md"
            >
              Send Message
            </button>

            {/* Status messages */}
            {status === "loading" && (
              <div className="text-sm text-slate-300">Sending…</div>
            )}
            {status === "sent" && (
              <div className="text-sm text-emerald-400">
                Message sent — thanks!
              </div>
            )}
            {status === "error" && (
              <div className="text-sm text-rose-400">
                Error sending — try again.
              </div>
            )}
          </div>
        </form>
      </motion.div>
    </section>
  );
}
