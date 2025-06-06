import { IoIosArrowForward } from "react-icons/io";
import Container from "../../Container";
import { NavLink } from "react-router-dom";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";

const Attributions = () => {
  const socialLinks = [
    {
      title: "GitHub",
      tag: <VscGithubInverted size={20} />,
      url: "https://github.com/AnoopRn09",
    },
    {
      title: "Instagram",
      tag: <BiLogoInstagramAlt size={20} />,
      url: "https://instagram.com/anoop.mahi.09",
    },
    {
      title: "LinkedIn",
      tag: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/anoop-rn-b14659335/",
    },
    {
      title: "GeeksforGeeks",
      tag: <SiGeeksforgeeks size={20} />,
      url: "https://www.geeksforgeeks.org/batch/dsa-1-siddaganaga?tab=Chapters",
    },
  ];

  return (
    <Container>
      <div className="max-w-screen-md text-white px-4 flex flex-col gap-5">
        <div className="flex flex-row gap-2 items-center">
          <NavLink
            to="/"
            className="hover:underline transition flex items-center gap-1"
          >
            Home <IoIosArrowForward />
          </NavLink>
          <span className="hover:underline">Attributions</span>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-xl">Attributions</h2>
          <div className="flex flex-col flex-wrap gap-4 justify-center md:justify-start py-4">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.title}
                className="text-sm text-amber-50 hover:text-blue-400 flex items-center gap-1"
              >
                {item.tag}
                <span>{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Attributions;
