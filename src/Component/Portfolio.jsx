import React from "react";
import fluencyFusion from "../assets/fluencyFusion.png";
import cookingChronicles from "../assets/cookingChronicles.png";
import toytopia from "../assets/toytopia.png";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: fluencyFusion,
      title: "Fluency Fusion",
      clientCode:
        "https://github.com/Rakibhasan-programmer/fluency-fusion-client",
      serverCode:
        "https://github.com/Rakibhasan-programmer/fluency-fusion-server",
      liveSite: "https://fluency-fusion.web.app/",
    },
    {
      id: 2,
      src: cookingChronicles,
      title: "Cooking Chronicles",
      clientCode:
        "https://github.com/Rakibhasan-programmer/cooking-chronicles-client",
      serverCode:
        "https://github.com/Rakibhasan-programmer/cooking-chronicles-server",
      liveSite: "https://cooking-chronicles.web.app/",
    },
    {
      id: 3,
      src: toytopia,
      title: "Toytopia",
      clientCode: "https://github.com/Rakibhasan-programmer/toytopia-client",
      serverCode: "https://github.com/Rakibhasan-programmer/toytopia-server",
      liveSite: "https://toytopia-59627.web.app/",
    },
  ];
  return (
    <>
      <div className="container py-5">
        <div className="text-center">
          <h1 className="fw-bold">Projects</h1>
          <p className="fw-light pt-2 text-uppercase">
            Each project is a unique piece of development
          </p>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-10 mx-auto">
            {projects.map(
              ({ id, src, title, liveSite, clientCode, serverCode }) => (
                <div
                  key={id}
                  className="row mt-5 p-3 rounded shadow d-flex justify-content-center align-items-center"
                >
                  <div className="col-md-12 col-lg-6">
                    <img className="img-fluid rounded" src={src} alt="" />
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="p-5">
                      <h4>{title}</h4>
                      <p className="py-3 fw-light">
                        A car rental website is an online platform that allows
                        users to rent cars for personal or business use. The
                        website provides an interface for searching, comparing,
                        and reserving cars.
                      </p>
                      <div>
                        <a
                          href={clientCode}
                          target="_blank"
                          className="text-decoration-none text-dark fw-bold codeLink"
                        >
                          Client Side Code <FaGithub />
                        </a>
                        <a
                          href={serverCode}
                          target="_blank"
                          className="text-decoration-none text-dark fw-bold px-3 codeLink"
                        >
                          Server Side Code <FaGithub />
                        </a>
                        <a
                          href={liveSite}
                          target="_blank"
                          className="text-decoration-none text-dark fw-bold codeLink"
                        >
                          Live Site <BsBoxArrowUpRight />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
