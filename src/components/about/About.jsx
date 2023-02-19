import "./about.css";
import Coursera from "../../img/coursera.jpeg";



const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
        Hello world! My name is Dusan Velimirovic and I'm full stack cloud developer and engineer with experience on the 
        both side, front-end and back-end also as a cloud computing.
        In addition to work, the majority owner of my time is my three-year-old daughter . 
        I'm crazy mountains lover and I love hiking. 
        My journey into the world of Web Development and Computer Science in general was completely intuitive and a consequence of pure coincidence.
        Since I have the attitude that in the modern world we need to constantly learn and improve, I chosed the field of Web Development as something that sounded modern and promising. Over time, I realized that the knowledge you gain from Web Development and Cloud technology, no matter what company or industry you work in, is an added
        value and something you can practically use to connect with people.
        </p>
        <div className="a-award">
          <img src={Coursera} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Cloud Application Development Foundations </h4>
            <p className="a-award-desc">
            This sertification help me to:
            <ul className="a-award-desc">
              <li> define cloud computing and explain its essential characteristics, models, benefits, infrastructure, & emerging trends.</li>
              <li> Develop apps with front-end development languages and tools such as HTML, CSS, Javascript and React.</li>
              <li> Program applications with back-end development languages and tools such as Node.js  and NoSQL databases</li>
              <li> Build and deploy applications using Cloud Native methodologies and tools, CI/CD toolchains, and build your portfolio using GitHub</li>
            </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;