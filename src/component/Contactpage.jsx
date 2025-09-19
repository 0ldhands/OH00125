import React from "react";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"; // icons
import handshake from "../assets/handshake.png";

const ContactPage = () => {
  const KEY = import.meta.env.VITE_FORM_KEY; 

  return (
    <div className="min-h-screen flex items-center justify-center px-4 ">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 bg-black/10 shadow-xl rounded-2xl p-8">
        {/* Left side - Contact Info */}
        <div className="flex flex-col justify-start space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            We'd love to hear from you! Reach out through our contact info or
            send us a message.
          </p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <a
                href="mailto:sekar2486@gmail.com"
                className="text-gray-700 hover:text-blue-600"
              >
                sekar2486@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Linkedin className="w-6 h-6 text-blue-600" />
              <a
                href="https://www.linkedin.com/in/sekar2486/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                linkedin.com/in/sekar2486
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-green-600" />
              <a
                href="tel:+919843938246"
                className="text-gray-700 hover:text-green-600"
              >
                +91-9843938246
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-red-600" />
              <span className="text-gray-700">
                No. 58/110, Chamundi Street, Gugai, Salem - 636006
              </span>
            </div>

            <div className="flex justify-center">
              <img src={handshake} alt="handshake" className="w-40" />
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <form
          action={`https://formspree.io/f/${KEY}`}
          method="POST"
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-gray-800">
            Send us a Message
          </h3>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full mt-1 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full mt-1 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Write your message here..."
              className="w-full mt-1 px-4 py-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
