import React from "react";
import fluencyFusion from "../assets/fluencyFusion.png";
import cookingChronicles from "../assets/cookingChronicles.png";
import toytopia from "../assets/toytopia.png";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: fluencyFusion,
      title: "Fluency Fusion",
      desc: [
        "Implemented Login/Logout system (email password and Google using Firebase Authentication).",
        "By default, the user gets a student role. Students can enroll in the course and can pay via stripe.",
        "Three different roles student, instructor, and admin. Private and public route.",
      ],
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
      desc: [
        "Implemented Login/Logout system using firebase authentication.",
        "User can see chef's information, view button will show chefs information and his Recipe's.",
        "Without login a user can not see view recipe (private route, public route).",
      ],
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
      desc: [
        "Implemented Login/Logout system using firebase authentication.",
        "Private route, categorywise product showing. User can not add/see toys if he does not logged in.",
        "A particular user can see his added toys. And he can update or delete his/her added toys.",
      ],
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
              ({ id, src, title, liveSite, clientCode, serverCode, desc }) => (
                <div
                  key={id}
                  className="row mt-5 p-3 rounded shadow d-flex justify-content-center align-items-center"
                >
                  <div className="col-md-12 col-lg-6">
                    <img className="img-fluid rounded" src={src} alt="" />
                  </div>
                  <div className="col-md-12 col-lg-6">
                    <div className="p-5">
                      <h4 className="pb-2">{title}</h4>
                      {desc.map((des) => (
                        <span className="fw-light d-block pt-2">
                          <BsLightningChargeFill className="text-warning me-1" />
                          {des}
                        </span>
                      ))}
                      <div className="pt-4">
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
