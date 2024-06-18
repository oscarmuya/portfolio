import "./projects.css";
import { MouseEvent, useEffect, useState } from "react";
import ph from "../../../../public/ph.jpg";
import { previewprops, projectProps } from "@/types";
import db, { storage } from "@/firebase/firebase";
import { query, collection, getDocs } from "firebase/firestore";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Image from "next/image";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
      <div id="projects" className="projects relative overflow-hidden w-full">
        <div className="projects__background">
          <div className="purple__ball"></div>
          <div className="yellow__ball"></div>
          <div className="orange__ball"></div>
          <div className="pink__triangle"></div>
          <div className="pink__triangle b"></div>
          <div className="tiny__ball"></div>
          <div className="tiny__ball-2"></div>
        </div>

        <div className="p-4 w-full gap-4 grid grid-cols-1 md:grid-cols-4">
          {[...projects, ...projects, ...projects].map((project, i) => {
            const t = i + 1;
            const span =
              t % 5 === 1
                ? "md:col-span-2 md:row-span-2 md:h-[400px]"
                : t % 5 === 2
                ? "md:col-span-2 md:row-span-1 md:h-[200px]"
                : t % 5 === 4 || t % 5 === 5
                ? "md:h-[200px] md:col-span-1 md:row-span-1"
                : t % 5 === 3
                ? "md:col-span-2 md:row-span-2 md:h-[400px]"
                : "md:h-[200px]";

            return (
              <div
                onMouseOver={handleMouseOverProjectOpen}
                onMouseOut={handleMouseOutProjectOpen}
                aria-label={String(i)}
                onClick={handleOpenProject}
                key={i}
                className={`${span} group/projects after:bg-black/40 after:top-0 after:left-0 after:w-full after:h-full after:absolute relative overflow-hidden z-[1] text-white p-4 h-[200px] rounded-xl border bg-cover`}
              >
                <Image
                  className="h-full w-full group-hover/projects:scale-110 transition-transform object-cover absolute top-0 left-0"
                  alt="bg"
                  src={ph}
                />
                <div className="flex-col flex items-center gap-4 h-full justify-center z-[2] relative">
                  <h1 className="text-5xl font-bold">{project.name}</h1>
                  <p className="truncate w-full left-0">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
