import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../website-text";
import ProjectsData from "./projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const Projects =(props) => {
    const theme = props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
                  src={require(`../../assets/images/${projectsHeader["avatar_image_path"]}`)}
                  alt=""
                /> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <ProjectCard repo={repo} theme={theme} />;
          })}
        </div>
        <Footer theme={props.theme} onToggle={props.onToggle} />
      </div>
    );
  }

export default Projects;
