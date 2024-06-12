import { MouseEvent, useEffect, useState } from "react";
import "./projects.css";
import play from "../../../assets/play.png";
import { previewprops, projectProps } from "@/types";
import db, { storage } from "@/firebase/firebase";
import { query, collection, getDocs } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";

type Props = {
  handleOpenProject: (e: MouseEvent) => void;
  passProjects: React.Dispatch<React.SetStateAction<projectProps[]>>;
  passPreviews: React.Dispatch<React.SetStateAction<{}>>;
  handleMouseOverProjectOpen: (e: MouseEvent) => void;
  handleMouseOutProjectOpen: (e: MouseEvent) => void;
};

function Projects({
  handleOpenProject,
  passProjects,
  passPreviews,
  handleMouseOverProjectOpen,
  handleMouseOutProjectOpen,
}: Props) {
  const [projects, setProjects] = useState<projectProps[]>([]);
  const [previews, setPreviews] = useState<previewprops[]>([]);

  useEffect(() => {
    const q = query(collection(db, "projects"));
    let getProjects: projectProps[] = [];

    getDocs(q).then((res) => {
      res.docs.map((doc) => {
        const t = doc.data() as projectProps;
        getProjects.push({ ...t, id: doc.id });
      });

      setProjects(getProjects);
      passProjects(getProjects);

      //get previews
      let storageRef = ref(storage, "previews");

      listAll(storageRef).then((result) => {
        let promises: previewprops[] = [];

        result.items.forEach((preview) => {
          let name = preview.name;
          getDownloadURL(preview).then((result) => {
            promises.push({ name: name, url: result });
            setPreviews(promises);
            passPreviews(promises);
          });
        });
        return Promise.all(promises);
      });
    });
  }, [passProjects]);

  return (
    <>
      <div id="projects" className="projects">
        <div className="projects__background">
          <div className="purple__ball"></div>
          <div className="yellow__ball">
            <span>Move your cursor</span>
            <span>to the right of your sceen</span>
            <span>and click on the mouseball to go</span>
            <span>to next project and left to go</span>
            <span>to previous project.</span>
          </div>
          <div className="orange__ball"></div>
          <div className="pink__triangle"></div>
          <div className="pink__triangle b"></div>
          <div className="tiny__ball"></div>
          <div className="tiny__ball-2"></div>
        </div>
        <div className="projects__content">
          {projects.map((project, key) => {
            return (
              <div key={key} className="projects__project">
                <div className="image">
                  <img src={play.src} alt="" />
                  <img className="play" src={play.src} alt="" />
                </div>
                <h1
                  onMouseOver={handleMouseOverProjectOpen}
                  onMouseOut={handleMouseOutProjectOpen}
                  aria-label={String(key)}
                  onClick={handleOpenProject}
                >
                  {project.name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
