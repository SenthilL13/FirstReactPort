import React, { useState } from "react";
import gitpic from "../assets/git.jpg";
import instapic from "../assets/insta.jpg";
import linkdpic from "../assets/linkd.jpg";
import whappic from "../assets/whap.png";
import twtpic from "../assets/twt.jpeg";
import {
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Instagram,
} from "lucide-react";
export default function SocialProfiles() {
  const [profileData, setProfileData] = useState({
    github: { followers: 100, following: 50 },
    linkedin: { connections: "500+", endorsements: "50+" },
    whatsapp: {},
    twitter: { followers_count: "100+", statuses_count: "500+" },
    instagram: { username: "Senthilnayagn" },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* GitHub Section */}
        <div className="text-center m-4 bg-gray-900 text-black p-6 rounded-lg shadow-lg fade-in-animation">
          <h1 className="font-bold text-orange-500 text-2xl mb-4 flex items-center justify-center gap-2">
            <Github className="w-8 h-8" /> GitHub Profile
          </h1>

          <div className="bg-gray-300 p-4 rounded-lg mb-6">
            <p className="font-medium text-lg mb-2">
              Followers:{" "}
              <span className="text-indigo-600">
                {profileData.github?.followers || 0}
              </span>
            </p>
            <p className="font-medium text-lg">
              Following:{" "}
              <span className="text-indigo-600">
                {profileData.github?.following || 0}
              </span>
            </p>
          </div>

          <img
            className="rounded-full border-4 border-indigo-500 mb-6 mx-auto
              transition-transform duration-300 ease-in-out transform hover:scale-105"
            // src="/placeholder.svg?height=250&width=250"
            // src="/githuppofile.jpg"
            src={gitpic}
            alt="GitHub Profile"
            width={250}
            height={250}
          />

          <a
            href="https://github.com/SenthilL13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white
              py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            View GitHub Profile
          </a>
        </div>

        {/* LinkedIn Section */}
        <div className="text-center m-4 bg-blue-700 text-white p-6 rounded-lg shadow-lg fade-in-animation">
          <h1 className="font-bold text-2xl mb-4 flex items-center justify-center gap-2">
            <Linkedin className="w-8 h-8" /> LinkedIn Profile
          </h1>

          <div className="bg-white/90 text-blue-700 p-4 rounded-lg mb-6">
            <p className="font-medium text-lg mb-2">
              Connections:{" "}
              <span className="text-indigo-600">
                {profileData.linkedin?.connections || "500+"}
              </span>
            </p>
            <p className="font-medium text-lg">
              Endorsements:{" "}
              <span className="text-indigo-600">
                {profileData.linkedin?.endorsements || "50+"}
              </span>
            </p>
          </div>

          <img
            className="rounded-full border-4 border-white mb-6 mx-auto
              transition-transform duration-300 ease-in-out transform hover:scale-105"
            // src="/placeholder.svg?height=250&width=250"
            // src="/linkd.jpg"
            src={linkdpic}
            alt="LinkedIn Profile"
            width={250}
            height={250}
          />

          <a
            href="https://www.linkedin.com/in/senthil-nayagan-976b58277/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-700 font-semibold
              py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View LinkedIn Profile
          </a>
        </div>

        {/* Instagram Section */}
        <div className="text-center m-4 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-6 rounded-lg shadow-lg fade-in-animation">
          <h1 className="font-bold text-white text-2xl mb-4 flex items-center justify-center gap-2">
            <Instagram className="w-8 h-8" /> Instagram Feed
          </h1>

          <div className="bg-white/90 text-purple-700 p-4 rounded-lg mb-6">
            <p className="font-medium text-lg mb-2">
              Username:{" "}
              <span className="text-indigo-600">
                {profileData.instagram?.username || "N/A"}
              </span>
            </p>
          </div>

          <img
            className="rounded-full border-4 border-white mb-6 mx-auto
              transition-transform duration-300 ease-in-out transform hover:scale-105"
            // src="/placeholder.svg?height=250&width=250"
            // src="/insta.jpg"
            src={instapic}
            alt="Instagram Profile"
            width={250}
            height={250}
          />

          <a
            href="https://www.instagram.com/p/CYbGIrHsJky/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-purple-600 font-semibold
              py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View on Instagram
          </a>
        </div>

        {/* WhatsApp Section */}
        <div className="text-center m-4 bg-green-500 text-white p-6 rounded-lg shadow-lg fade-in-animation">
          <h1 className="font-bold text-2xl mb-4 flex items-center justify-center gap-2">
            <MessageSquare className="w-8 h-8" /> WhatsApp
          </h1>

          <div className="bg-white/90 text-green-700 p-4 rounded-lg mb-6">
            <p className="font-medium text-lg">
              Contact me on WhatsApp for quick responses!
            </p>
          </div>

          <img
            className="rounded-full border-4 border-white mb-6 mx-auto
              transition-transform duration-300 ease-in-out transform hover:scale-105"
            // src="/placeholder.svg?height=250&width=250"
            // src="/whap.jpg"
            src={whappic}
            alt="WhatsApp Profile"
            width={250}
            height={250}
          />

          <a
            href="https://api.whatsapp.com/send/?phone=9345222105&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-600 font-semibold
              py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* Twitter Section */}
        <div className="text-center m-4 bg-sky-400 text-white p-6 rounded-lg shadow-lg fade-in-animation">
          <h1 className="font-bold text-2xl mb-4 flex items-center justify-center gap-2">
            <Twitter className="w-8 h-8" /> Twitter Profile
          </h1>

          <div className="bg-white/90 text-sky-700 p-4 rounded-lg mb-6">
            <p className="font-medium text-lg mb-2">
              Followers:{" "}
              <span className="text-indigo-600">
                {profileData.twitter?.followers_count || "100+"}
              </span>
            </p>
            <p className="font-medium text-lg">
              Tweets:{" "}
              <span className="text-indigo-600">
                {profileData.twitter?.statuses_count || "500+"}
              </span>
            </p>
          </div>

          <img
            className="rounded-full border-4 border-white mb-6 mx-auto
              transition-transform duration-300 ease-in-out transform hover:scale-105"
            // src="/placeholder.svg?height=250&width=250"
            src={twtpic}
            alt="Twitter Profile"
            width={250}
            height={250}
          />

          <a
            href="https://x.com/SSenthilNa18305?t=8YdG052AzDx1qwCqithnDg&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-sky-500 font-semibold
              py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Twitter Profile
          </a>
        </div>
      </div>
    </div>
  );
}
