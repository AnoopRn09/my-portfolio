import { BiLogoInstagramAlt } from "react-icons/bi";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";
import { NavLink } from "react-router-dom"; // Use react-router-dom for NavLink

const Footer = () => {
  const socialLinks = [
    {
      tag: <VscGithubInverted size={20} />,
      url: "https://github.com/AnoopRn09",
    },
    {
      tag: <BiLogoInstagramAlt size={20} />,
      url: "https://instagram.com/anoop.mahi.09",
    },
    {
      tag: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/anoop-rn-b14659335/",
    },
    {
      tag: <SiGeeksforgeeks size={20} />,
      url: "https://www.geeksforgeeks.org/batch/dsa-1-siddaganaga?tab=Chapters",
    },
  ];

  return (
    <footer className="bg-gray-700 mt-20">
      <div className="mx-auto w-full max-w-screen-xl">
        {/* Bottom bar */}
        <div className="px-4 py-4 bg-gray-700 md:flex md:items-center md:justify-between">
          <div className="w-full md:w-1/3 text-sm text-gray-400 text-center md:text-left ml-[-55px]">
            Copyright © {new Date().getFullYear()} — All rights reserved by
            Anoop R N
          </div>

          <div className="w-full md:w-1/3 flex justify-center gap-6 text-sm underline underline-offset-4 ml-20">
            <NavLink to="/attributions" className="hover:text-white transition">
              Attributions
            </NavLink>
            <NavLink to="/shout-outs" className="hover:text-white transition">
              Shout Outs
            </NavLink>
            <a href="#" className="hover:text-white transition">
              Affiliates
            </a>
          </div>

          <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0 rtl:space-x-reverse">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-amber-50 hover:text-blue-400 flex items-center gap-1"
              >
                {item.tag}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
