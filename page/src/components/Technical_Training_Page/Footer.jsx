// import React from "react";
// import {
//   FaFacebookF,
//   FaYoutube,
//   FaLinkedinIn,
//   FaClock,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
// import SubscribeSection from "./SubscribeSection"; // ✅ Make sure this file exists
// import OA from "../assets/OA.png"; // ✅ Update path to your image

const Footer = () => {
  return (
    <footer className="bg-[#003B57] text-white">
      {/* ✅ Newsletter Section */}
      {/* <SubscribeSection /> */}

      {/* ✅ Main Footer Section */}
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto px-4 md:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-12 text-center sm:text-left">
          {/* About Section */}
          <div className="flex justify-center sm:justify-start">
            <div>
              <h2 className="text-[24px] md:text-[28px] font-bold flex flex-col items-center sm:items-start gap-3 mb-4">
                {/* <img src={OA} alt="Ocean Academy" width={200} height={100} /> */}
              </h2>
              <div className="mt-4 text-[14px] md:text-[16px] leading-relaxed text-gray-200">
                <p>
                  Ocean was founded on the principle of building and implementing
                  great ideas that drive progress for the students and clients.
                </p>
              </div>

              {/* Social Links */}
              <h3 className="mt-6 font-semibold text-[16px] md:text-[18px] text-sky-400">
                Follow Us
              </h3>
              <div className="flex justify-center sm:justify-start gap-3 mt-4 flex-wrap">
                <a
                  href="https://www.facebook.com/oceanacademy.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-md bg-[rgba(187,175,175,0.2)] hover:bg-sky-500 transition"
                >
                  {/* <FaFacebookF className="text-[16px] md:text-[18px]" /> */}
                </a>

                <a
                  href="https://www.youtube.com/@ocean_academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-md bg-[rgba(187,175,175,0.2)] hover:bg-sky-500 transition"
                >
                  {/* <FaYoutube className="text-[16px] md:text-[18px]" /> */}
                </a>

                <a
                  href="https://www.instagram.com/oceanacademy_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-md bg-[rgba(187,175,175,0.2)] hover:bg-sky-500 transition"
                >
                  {/* <FaSquareInstagram className="text-[16px] md:text-[18px]" /> */}
                </a>

                <a
                  href="https://www.linkedin.com/company/oceanacademyedu/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-md bg-[rgba(187,175,175,0.2)] hover:bg-sky-500 transition"
                >
                  {/* <FaLinkedinIn className="text-[16px] md:text-[18px]" /> */}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex justify-center sm:justify-start">
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-4 text-sky-400">
                Contact Info
              </h3>

              <div className="flex flex-row items-start gap-2 mb-4 text-[14px] md:text-[16px] text-gray-200 leading-relaxed justify-center sm:justify-start">
                {/* <FaMapMarkerAlt className="text-[16px] md:text-[18px] shrink-0 mt-1" /> */}
                <p className="text-center sm:text-left">
                  No. 10, 2nd Floor, 45 Feet Road, Vengateswara Nagar, Near HDFC
                  Bank, Saram, Puducherry-605013.
                </p>
              </div>

              <p className="flex justify-center sm:justify-start items-center gap-3 mb-2 text-[14px] md:text-[16px] text-gray-200">
                {/* <FaPhoneAlt className="text-[14px] md:text-[16px] shrink-0" /> */}
                0413-2240580
              </p>

              <p className="flex justify-center sm:justify-start items-center gap-3 text-[14px] md:text-[16px] text-gray-200">
                {/* <FaEnvelope className="text-[14px] md:text-[16px] shrink-0" /> */}
                info@oceanacademy.in
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center sm:justify-start">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-sky-400">
                Quick Links
              </h3>
              <ul className="space-y-3 md:space-y-4 text-[14px] md:text-[16px] text-gray-200">
                <li><a href="/courses" className="hover:text-sky-400">Courses</a></li>
                <li><a href="/contact-us" className="hover:text-sky-400">Contact Us</a></li>
                <li>
                  <a href="https://placement.oceanacademy.co.in/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">Placement</a>
                </li>
                <li><a href="/services" className="hover:text-sky-400">Services</a></li>
                <li><a href="/gallery" className="hover:text-sky-400">Gallery</a></li>
                <li>
                  <a href="https://candidate.oceanacademy.co.in/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">Job Portal</a>
                </li>
                <li><a href="/career" className="hover:text-sky-400">Career</a></li>
                <li><a href="/faq" className="hover:text-sky-400">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* More + Office Hours */}
          <div className="flex justify-center sm:justify-start">
            <div className="w-full">
              <ul className="space-y-3 md:space-y-4 text-[14px] md:text-[16px] text-gray-200 mb-6">
                <li><a href="/terms-conditions" className="hover:text-sky-400">Terms and Conditions</a></li>
                <li><a href="/privacy-policy" className="hover:text-sky-400">Privacy Policies</a></li>
                <li><a href="/about-us" className="hover:text-sky-400">About Us</a></li>
                <li><a href="#" className="hover:text-sky-400">Verify Certificate</a></li>
                <li><a href="/blog" className="hover:text-sky-400">Blog</a></li>
              </ul>

              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-[16px] md:text-[18px] text-sky-400">
                  Office Hours
                </h3>
                <div className="mt-2 text-[14px] md:text-[16px] text-gray-200 leading-relaxed">
                  <div className="flex justify-center sm:justify-start items-center gap-2">
                    {/* <FaClock className="text-[16px] md:text-[18px]" /> */}
                    <span>Monday – Sunday</span>
                  </div>
                  <div className="flex justify-center sm:justify-start items-center gap-2 mt-1">
                    <span>9:30 AM – 9:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-[14px]">
          © {new Date().getFullYear()} Ocean Academy. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;