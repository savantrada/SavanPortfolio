import React, { useState } from "react";
import "./Projects.css";
import Modal from "./Modal";

export default function Projects() {
  const [isModalActive, setIsModalActive] = useState(null);
  const [type, setType] = useState(null);
  const handleModal = type => {
    if (isModalActive) {
      setIsModalActive(null);
    } else {
      setType(type);
      setIsModalActive("is-active");
    }
  };
  return (
    <section className="hero projects is-fullheight" id="projects">
     <div className="hero-head">
        <p className="has-text-black">
          Legend(for the project caption): M(major project), S(Side project)
        </p>
      </div>
      <div className="hero-body">
        <div className="container">
          <h1 className="has-text-black">Projects</h1>
          <div className="tile is-ancestor">
            <div className="tile is-parent is-vertical">
              <div className="tile is-child">
                <div className="box first">
                  <h2>Image-Search(S)</h2>
                  <p>
                      Search images from unsplash, write any words to serach images 
                  </p>
                  <div className="project-foot">
                    <div className="columns is-flex-mobile">
                      <div className="column git">
                        <a
                          href="https://github.com/savantrada/Image-search"
                          aria-label="imageserach github link"
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                      <div className="column other">
                        <a
                          href="https://savantrada.github.io/Image-search/"
                          aria-label="imageserach website"
                          className="web"
                        >
                          <i className="fas fa-link" />
                        </a>
                      </div>
                      <div className="column detail">
                        <span
                          onClick={() => {
                            handleModal("imageserach");
                          }}
                        >
                          <i className="fas fa-info-circle" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-child">
                <div className="box second">
                  <h2>securebox-dashboard(M)</h2>
                  <p>
                    Dashboard for securebox toolkit. Displays graphs for
                    different params, shows audit, traces, anomalies and
                    function benchmarks.
                  </p>
                  <div className="project-foot">
                    <div className="columns is-flex-mobile">
                      <div className="column git">
                        <a
                          href="https://github.com/savantrada/securebox-dashboard"
                          aria-label="securebox dashboard github link"
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                      <div className="column other is-offset-1" />
                      <div className="column detail">
                        <span
                          onClick={() => {
                            handleModal("secureboxDashboard");
                          }}
                        >
                          <i className="fas fa-info-circle" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <div className="tile is-child">
                <div className="box third">
                  <h2>satellite Image Cropping System(M)</h2>
                  <p>
                   Developed web application to redirect satellite images to google maps.
                  </p>
                  <div className="project-foot">
                    <div className="columns is-flex-mobile">
                      <div className="column detail">
                        <span
                          onClick={() => {
                            handleModal("sict");
                          }}
                        >
                          <i className="fas fa-info-circle" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-child">
                <div className="box fourth">
                  <h2>portfolio(S)</h2>
                  <p>
                    My personal portfolio built with react and bulma
                  </p>
                  <div className="project-foot">
                    <div className="columns is-flex-mobile">
                      <div className="column git">
                        <a
                          href="https://github.com/savantrada/savanportfolio"
                          aria-label="template github link"
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                      <div className="column other">
                        <a
                          href="https://www.savantrada.com"
                          aria-label="template website"
                          className="web"
                        >
                          <i className="fas fa-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent is-vertical">
              <div className="tile is-child">
                <div className="box fifth">
                  <h2>TalentMap(M)</h2>
                  <p>
                    Connect students, companies and colleges 
                    to fulfill each other's requirements.
                  </p>
                  <div className="project-foot">
                    <div className="columns is-flex-mobile">
                      <div className="column git">
                        <a
                          href="https://github.com/savantrada/talentmap_dev"
                          aria-label="talentmap github link"
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                      <div className="column is-offset-1" />
                      <div className="column detail">
                        <span
                          onClick={() => {
                            handleModal("talentmap");
                          }}
                        >
                          <i className="fas fa-info-circle" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-child">
                <div className="box sixth">
                  <h2>The venue(S)</h2>
                  <p>
                    A simple musical event registration appliction made with react
                  </p>
                  <div className="project-foot">
                    <div className="columns is-flex-mobile">
                      <div className="column git">
                        <a
                          href="https://github.com/savantrada/venue"
                          aria-label="vids github link"
                        >
                          <i className="fab fa-github" />
                        </a>
                      </div>
                      <div className="column other">
                        <a
                          href="https://savantrada.github.io/venue/"
                          aria-label="template website"
                          className="web"
                        >
                          <i className="fas fa-link" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="more">
            <a
              className="button is-outlined is-inverted is-rounded is-medium"
              href="https://github.com/savantrada"
            >
              More on &nbsp;
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
      <Modal
        isBox={false}
        heading={null}
        description={null}
        handleModal={handleModal}
        isActive={isModalActive}
        type={type}
      />
    
    </section>
  );
}
