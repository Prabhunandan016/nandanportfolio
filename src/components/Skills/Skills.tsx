import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

import python from "../../assets/python.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import mongodbIcon from "../../assets/mongodb2.png";
import django from "../../assets/django.png";
import scikitlearn from "../../assets/scikitlearn.png";
import numpyicon from "../../assets/numpy.png";
import pandasicon from "../../assets/pandas.png";
import mysqlicon from "../../assets/mysql.png";

export function Skills() {
  const skills = [
    { src: python, name: "Python" },
    { src: django, name: "Django" },
    { src: mongodbIcon, name: "MongoDB" },
    { src: mysqlicon, name: "MySQL" },
    { src: htmlIcon, name: "HTML" },
    { src: cssIcon, name: "CSS" },
    { src: jsIcon, name: "JavaScript" },
    { src: reactIcon, name: "React" },
    { src: scikitlearn, name: "Scikit-learn" },
    { src: numpyicon, name: "NumPy" },
    { src: pandasicon, name: "Pandas" },
    { src: boostrapIcon, name: "Bootstrap" },
  ];

  return (
    <Container id="skills">
        <h2>My Skills</h2>
      

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill" key={skill.name}>
            <ScrollAnimation animateIn="fadeInUp" delay={index * 100}>
              <img src={skill.src} alt={skill.name} />
              <span>{skill.name}</span>
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </Container>
  );
}
