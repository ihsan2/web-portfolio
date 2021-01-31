import React, { useState } from "react";
import Modal from "react-modal";
import AwesomeSlider from "react-awesome-slider";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/styled/cube-animation/cube-animation.scss";
import { useMediaQuery } from "react-responsive";

const customStyles = {
  content: {
    top: "10%",
    left: "5%",
    minWidth: "80%",
    minHeight: "80%",
  },
};

const Portfolio = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [folder, setFolder] = useState("");
  const [imgModal, setImgModal] = useState([]);

  const verySmall = useMediaQuery({ query: "(max-width: 275px)" });
  const small = useMediaQuery({ query: "(max-width: 375px)" });
  const bigSmall = useMediaQuery({ query: "(max-width: 475px)" });

  const veryMedium = useMediaQuery({ query: "(max-width: 575px)" });
  const medium = useMediaQuery({ query: "(max-width: 675px)" });
  const bigMedium = useMediaQuery({ query: "(max-width: 775px)" });

  const veryLarge = useMediaQuery({ query: "(max-width: 875px)" });
  const large = useMediaQuery({ query: "(max-width: 975px)" });
  const bigLarge = useMediaQuery({ query: "(max-width: 1075px)" });

  const openModal = (project) => {
    const { works } = data;
    let work = works.filter((i) => i.id === project.id);
    setModal(true);
    setImgModal(work[0].images);
    setFolder(project.id);
  };

  const closeModal = () => {
    setModal(false);
  };

  const content = (project) => {
    var projectImage = "images/portfolio/" + project.thumbnail;

    return (
      <div key={project.title} className="columns portfolio-item">
        <div className="item-wrap">
          <div onClick={() => openModal(project)}>
            <img alt={project.title} src={projectImage} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{project.title}</h5>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {project.tech.map((i, index) => (
                    <label
                      style={{
                        backgroundColor: "rgba(29,175,212,0.8)",
                        margin: 4,
                        marginLeft: index === 0 ? 0 : 4,
                        paddingLeft: 5,
                        paddingRight: 5,
                        borderRadius: 5,
                        fontSize: 8,
                      }}
                    >
                      {i}
                    </label>
                  ))}
                </div>
                <p>{project.desc}</p>
              </div>
            </div>
          </div>
        </div>

        <a
          target={"_blank"}
          href={project.link}
          style={{
            // marginLeft: "1rem",
            textAlign: "center",
            color: "#fff",
            // backgroundColor: ,
            backgroundColor: project.link
              ? "rgba(29,175,212,0.6)"
              : "rgba(124,124,124,0.6)",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <i className="fa fa-link" style={{ marginRight: 8 }}></i>
          {project.link ? "Link" : "Private Link"}
        </a>
      </div>
    );
  };

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {data && data.works.map((item) => content(item))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            position: "absolute",
            zIndex: 99,
            top: -5,
            right: 0,
          }}
          onClick={closeModal}
        >
          <i style={{ fontSize: 20 }} className="fa fa-times"></i>
        </div>
        <AwesomeSlider
          animation="cubeAnimation"
          cssModule={[CoreStyles, AnimationStyles]}
          style={{
            "--slider-height-percentage": verySmall
              ? "210%"
              : small
              ? "150%"
              : bigSmall
              ? "110%"
              : veryMedium
              ? "105%"
              : medium
              ? "95%"
              : bigMedium
              ? "75%"
              : veryLarge
              ? "70%"
              : large
              ? "60%"
              : bigLarge
              ? "55%"
              : "45%",
          }}
          // className="slider"
        >
          {imgModal.map((i) => (
            <div>
              <img
                src={`images/portfolio/${folder}/${i}`}
                alt={i}
                className="imgModal"
                style={{ height: 540 }}
              />
            </div>
          ))}
        </AwesomeSlider>
      </Modal>
    </section>
  );
};

export default Portfolio;
