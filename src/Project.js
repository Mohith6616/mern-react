import React from 'react';
import './Project.css';
import myImage from "./WhatsApp Image 2021-08-02 at 2.12.03 PM.jpeg";
import project from "./project.png";
import yourResumePDF from './My_Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export function Header() {
  return (
    <header>
      <h1>Mohith</h1>
    </header>
  );
}
export function intro() {
    return (
      <div>
        <h3>Introduction</h3>
        <p>
            Hello, I am Mohith, a highly skilled mobile application developer with a strong foundation in Web development. I have some experience in creating user-friendly and innovative mobile apps, I have a passion for turning ideas into functional and visually appealing Android applications.
            In addition to my mobile app development expertise, I am also a proficient android application developer. My web development skills encompass HTML, CSS, JavaScript, Sql, Php and React. This dual proficiency allows me to create seamless and integrated solutions across both mobile and web platforms.
            My dedication to staying updated with the latest industry trends and my commitment to delivering high-quality, performance-driven apps make me a valuable asset to any project. I take pride in transforming concepts into reality and crafting digital experiences that exceed expectations.
            Feel free to explore my portfolio to see examples of my work, and please don't hesitate to reach out if you're interested in collaborating on exciting projects. Together, we can bring your ideas to life in the digital world.
        </p>
      </div>
    );
}
export function image(){
    return(
        <div className="center-image">
            <img src={myImage} alt='profile-pic' className='image1'/>
        </div>
    );
}
export function aboutMe(){
    return(
    <div>
        <h3>About Me</h3>
        <p>👋 Hi, I'm Mohith, a versatile developer with a passion for creating dynamic and user-centric web experiences.
            💼 With a strong foundation in Web Development, I've seamlessly transitioned my skills into the world of android app development, where I've honed my expertise in crafting intuitive and responsive android applications.
            🌐 My journey as a web developer has led me to work on a diverse range of projects, from e-commerce platforms that drive conversions to sleek and interactive web applications that engage users.
            🛠️ I thrive on solving complex problems through clean and efficient code. My toolkit includes a deep understanding of HTML, CSS, JavaScript, and a knack for turning design concepts into pixel-perfect realities.
            🚀 I'm not just a developer; I'm a collaborator who thrives in team environments, sharing insights, and pushing creative boundaries to deliver exceptional results. I believe in staying up-to-date with the latest web technologies to ensure my projects are at the forefront of innovation.
            🌟 Whether you need a website that stands out in a crowded digital landscape or a web application that streamlines your business processes, I'm here to turn your vision into reality.
            📊 Let's connect and discuss how I can bring your web development projects to life and add a touch of expertise that ensures success.</p>
    </div>
    );
}
export function skills(){
    return(
        <div>
            <h3>Skills:</h3>
            <div className="card">
                <div className="header">My Skills</div>
                <div className="body">
                    <div class="skill">
                        <div className="skill-name">HTML</div>
                        <div className="skill-level">
                            <div className="skill-percent ninty-five"></div>
                        </div>
                        <div className="skill-percent-number">95%</div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">CSS</div>
                        <div className="skill-level">
                            <div className="skill-percent ninty"></div>
                        </div>
                        <div className="skill-percent-number">90%</div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">JavaScript</div>
                        <div className="skill-level">
                            <div className="skill-percent eighty-five"></div>
                        </div>
                        <div className="skill-percent-number">85%</div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">PHP</div>
                        <div className="skill-level">
                            <div className="skill-percent ninty"></div>
                        </div>
                        <div className="skill-percent-number">90%</div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">SQL</div>
                        <div className="skill-level">
                            <div className="skill-percent ninty"></div>
                        </div>
                        <div className="skill-percent-number">90%</div>
                    </div>
                    <div className="skill">
                        <div className="skill-name">React</div>
                        <div className="skill-level">
                            <div className="skill-percent eighty"></div>
                        </div>
                        <div className="skill-percent-number">80%</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export function task() {
    return (
      <div>
        <h3>Project details</h3>
        <div className="project_card">
          <svg viewBox="0 0 100 100" 
              className="card__image">
            <image
              xlinkHref={project}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </svg>
          <div className="card__content">
            <p className="card__title">PG Life</p>
            <p className="card__description">
              PG life, or Paying Guest life, is a housing arrangement where individuals rent a room or portion of a private residence owned by someone else. It often involves shared facilities, potential meal options, and fosters a sense of community among residents, making it a cost-effective and flexible housing choice for students and young professionals.
            </p>
          </div>
        </div>
      </div>
    );
  }
  export function resume() {
    const openResumeInNewTab = () => {
        window.open(yourResumePDF, '_blank');
    };
    return (
        <div>
            <button className="button" id="downloadButton" onClick={openResumeInNewTab}>
                Resume
            </button>
        </div>
    );
}
export function footer(){
    return(
        <div className="align">
            <p className="color"><FontAwesomeIcon icon="copyright"/> Copyrights 2023</p>
            <h3>For Contact:</h3>
            <p className="align_center">Phone: 7780460906</p>
            <p className="align_center">Email: mohith21bce7056@gmail.com</p>
            <p className="align_center">Linkedin: Mohith Tadi</p>
        </div>
    );
}