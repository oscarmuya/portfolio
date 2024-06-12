import "./projectview.css";
import { useEffect, useState } from "react";
import close from "../../../assets/close.png";
import { projectProps } from "@/types";

type Props = {
  handleCloseProject: () => void;
  open: boolean;
  project: projectProps;
  previewXloc: string;
  previews: { name: string; video: string; url: string; description: string }[];
};

function ProjectView({
  handleCloseProject,
  open,
  project,
  previewXloc,
  previews,
}: Props) {
  const [videoSrc, setVideoSrc] = useState("");
  useEffect(() => {
    for (var preview in previews) {
      if (
        previews[preview].name.indexOf(project.video) >= 0 &&
        project.video !== ""
      ) {
        setVideoSrc(previews[preview].url);
      }
    }
  }, [project, previews]);
  return (
    <div className={`view ${open && "isOpen"}`}>
      <div className={`view__content __${previewXloc}`}>
        <div className="view__content-preview">
          <video
            src={videoSrc}
            autoPlay={true}
            loop={true}
            playsInline={true}
          ></video>
        </div>
      </div>
      <div className="view__desc">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a target="_blank" rel="noreferrer noopener" href={project.link}>
          Visit Website
        </a>
      </div>
      <button onClick={handleCloseProject}>
        <img src={close.src} alt="" />
      </button>
    </div>
  );
}

export default ProjectView;
