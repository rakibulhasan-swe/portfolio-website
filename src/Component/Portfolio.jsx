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
    },
    {
      id: 2,
      src: cookingChronicles,
      title: "Cooking Chronicles",
    },
    {
      id: 3,
      src: toytopia,
      title: "Toytopia",
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
            {projects.map(({ id, src, title }) => (
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
                        href=""
                        className="text-decoration-none text-dark fw-bold"
                      >
                        Client Side Code <FaGithub />
                      </a>
                      <a
                        href=""
                        className="text-decoration-none text-dark fw-bold px-3"
                      >
                        Server Side Code <FaGithub />
                      </a>
                      <a
                        href=""
                        className="text-decoration-none text-dark fw-bold"
                      >
                        Live Site <BsBoxArrowUpRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
