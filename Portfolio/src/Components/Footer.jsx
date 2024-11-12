import React, { useState } from "react";
import { MdOutlineEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    // For this example, we'll just log it and show a success message
    console.log("Form submitted:", { email, message });
    setSubmitStatus("Message sent successfully!");
    setEmail("");
    setMessage("");
    setTimeout(() => setSubmitStatus(""), 3000); // Clear status after 3 seconds
  };

  return (
    <div>
      {/* About Section */}
      <div
        id="About"
        className="flex flex-col items-center justify-center text-center p-10 md:p-20 shadow-xl bg-opacity-30 text-white"
      >
        <h1 className="text-3xl md:text-6xl font-bold mb-4">About Me</h1>
        <p className="text-lg md:text-2xl max-w-3xl mb-8">
          Hello! I'm Senthilnayagan S, a passionate Web Developer with expertise
          in Java, Python, and database engineering. With a knack for creating
          efficient and scalable web applications, I thrive on transforming
          ideas into reality through code. Let's connect and build something
          amazing together!
        </p>
      </div>

      {/* Footer Section */}
      <div
        id="Footer"
        className="flex flex-col md:flex-row justify-between shadow-xl bg-opacity-30 text-white p-6 md:p-12 items-start"
      >
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
          <h3 className="text-sm md:text-2xl font-normal">
            Feel Free To reach out!
          </h3>
        </div>

        <ul className="text-sm md:text-xl space-y-2 mb-6 md:mb-0">
          <li className="flex gap-2 items-center justify-center md:justify-start">
            <MdOutlineEmail size={20} />
            Senthilnayagan100@gmail.com
          </li>
          <li className="flex gap-2 items-center justify-center md:justify-start">
            <MdPhone size={20} />
            9345222105
          </li>
          <li className="flex gap-2 items-center justify-center md:justify-start">
            <MdLocationOn size={20} />
            Coimbatore, Saibaba Colony, Tamil Nadu
          </li>
        </ul>

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/3 bg-gray-300 rounded-xl p-6"
        >
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              required
              placeholder="Your email address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              rows={4}
              required
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Submit
          </button>
          {submitStatus && (
            <p className="mt-4 text-green-600 text-center">{submitStatus}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Footer;
