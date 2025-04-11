const About = () => {
    return (
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-7 max-w-screen-md mx-auto px-4">
        <div>
          <h1 className="text-white font-medium text-start md:text-center">
            About
          </h1>
        </div>
        <div className="text-white flex-wrap flex flex-col gap-2 text-start">
          <p>I'm Anoop, a curious and driven Full Stack Developer & Data Analyst.</p>
          <p>
            I specialize in building intuitive and scalable web applications using technologies
            like React, Tailwind CSS, Node.js, Express, PostgreSQL, and MongoDB.
          </p>
          <p>
            I'm also passionate about data analysis, working with tools like Python, Pandas,
            and Power BI to extract insights and tell meaningful stories with data.
          </p>
          <p>
            Deep into DSA and problem solving — I love the challenge of clean logic and elegant
            solutions.
          </p>
          <p>
            Outside of code, I thrive on learning, creating, and collaborating with like-minded people.
            Always exploring new tech and leveling up.
          </p>
        </div>
      </div>
    );
  };
  
  export default About;
  