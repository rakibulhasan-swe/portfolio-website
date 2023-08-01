import React from "react";
import developer from "../assets/developer.json";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import { FaFacebook, FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Container className="pb-5 fw-light">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12 px-5">
            <div>
              <h5 className="fw-normal">
                Hello there,
                <img
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b_1f3fc/512.gif"
                  alt="👋"
                  width="32"
                  height="32"
                ></img>
                I'm
              </h5>
              <h1 className="fw-bold display-3">
                Md. Rakibul Hasan
                {/* <img
                  width="40"
                  src="https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.gif"
                  alt="✨"
                ></img> */}
              </h1>
              <h3 className="fw-normal d-flex">
                <span className="me-2">I'm a</span>
                <Typewriter
                  options={{
                    strings: [
                      "Front-end developer",
                      "React developer",
                      "Fullstack developer",
                      "Problem Solver",
                      "Software Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
            </div>
            <div>
              <a
                href="https://www.facebook.com/rakibulhasan.programmer/"
                rel="noreferrer"
                target="_blank"
                className="fs-2 text-primary me-3"
              >
                <FaFacebook />
              </a>
              <a
                href="mailto:dev.rakibulhassan@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="fs-2 text-danger me-3"
              >
                <SiGmail />
              </a>
              <a
                href="https://www.linkedin.com/in/md-rakibul-hasan-developer/"
                rel="noreferrer"
                target="_blank"
                className="fs-2 text-linkedin me-3"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Rakibhasan-programmer"
                rel="noreferrer"
                target="_blank"
                className="fs-2 text-dark"
              >
                <FaGithub />
              </a>
            </div>
            <div>
              <button className="button-resume fw-bold btn rounded-0 mt-4">
                <FaFileDownload className="me-1" />
                Resume
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div>
              <Lottie animationData={developer} loop={true} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
