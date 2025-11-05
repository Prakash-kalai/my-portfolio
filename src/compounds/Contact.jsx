import { TiSocialLinkedin } from "react-icons/ti";
import { FaXTwitter, FaGithub, FaFacebook } from "react-icons/fa6";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_09lb06g",        
        "template_z4lvnhu",       
        form.current,
        "dYWJYE5i9wZREyEVG"
        
      )
      .then(
        (result) => {
          console.log(" Success:", result.text);
          setSent(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error(" Error:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="w-[100%] pt-6">
      <div className="w-full bg-white shadow-lg rounded-2xl p-8 flex gap-8">        
        <div className="w-[70%] bg-gray-50 p-6 rounded-lg border border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Number:</h2>
          <p className="text-gray-600 mb-4">+91 6381105724</p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Email Us:</h2>
          <p className="text-gray-600">jkprakash342@mail.com</p>

          <div className="flex mt-3 space-x-4">
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer text-xl border rounded p-2"><FaFacebook /></p>
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer text-xl border rounded p-2"><FaGithub /></p>
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer text-xl border rounded p-2"><FaXTwitter /></p>
            <p className="text-gray-600 hover:text-blue-600 cursor-pointer text-xl border rounded p-2"><TiSocialLinkedin /></p>
          </div>
        </div>
        
        <div className="w-5/5">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch with Me!</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full name"
                  className="mt-1 w-full p-3 border rounded-lg bg-gray-100"
                  required
                />
              </div>

              <div className="w-1/2">
                <label className="block text-gray-700 font-medium">Email Address</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="hello@websitename.com"
                  className="mt-1 w-full p-3 border rounded-lg bg-gray-100"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Your Message</label>
              <textarea
                name="message"
                placeholder="Write your message"
                rows="4"
                className="mt-1 w-full p-3 border rounded-lg bg-gray-100"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-600 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <p className="text-green-600 font-medium mt-2">
                 Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
