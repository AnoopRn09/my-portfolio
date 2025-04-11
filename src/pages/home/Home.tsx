import Container from "../../components/Container";
import Footer from "../../components/footers/pages/Footer";

import About from "../about/About";
import Press from "../press/press";
import Education from "../education/Education";


import Socialmedia from "../socialmedia/socialmedia";
import Projects from "../projects/Projects";

const Home = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-10 scroll-smooth font-[poppins]">
          <Socialmedia/>
          <About />
          <Projects />
          <Education />
          <Press/>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;