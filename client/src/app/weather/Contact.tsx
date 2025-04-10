"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/utils";
// import emailjs from "@emailjs/browser/emailjs";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    from_email: "",
    message: "",
  });

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault;
  //   emailjs
  //     .sendForm(
  //       process.env.SERVICE_ID,
  //       process.env.TEMPLATE_ID,
  //       e.target,
  //       process.env.PUBLIC_KEY
  //     )
  //     .then(() => {
  //       alert("Messsage Sent!");
  //       setFormData({ name: "", from_email: "", message: "" });
  //     })
  //     .catch((err: Error) => {
  //       alert("Something went wrong, please try again.");
  //     });
  // };

  return (
    <section
      id="contact"
      className="min-h-[50vh] md:min-h-[80vh] flex items-center justify-center mb-22 mt-34 md:mt-40"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
      >
        <div className="px-4 w-full min-w-[375px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="section-heading">Get In Touch</h2>
          <form
            action=""
            className="space-y-6"
            // onSubmit={handleSubmit(formData)}
          >
            <div className="relative bg-[#0f0f0f]">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="form-input"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="relative bg-[#0f0f0f]">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.from_email}
                className="form-input"
                placeholder="example@email.com"
                onChange={(e) =>
                  setFormData({ ...formData, from_email: e.target.value })
                }
              />
            </div>
            <div className="relative custom-scrollbar bg-[#0f0f0f]">
              <textarea
                name=""
                id="message"
                required
                value={formData.message}
                rows={5}
                className="form-input resize-none w-full h-48"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded
                         font-medium transtion relative overflow-hidden
                         hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,.4)] cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
