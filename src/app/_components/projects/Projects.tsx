import db from "@/firebase/firebase";
import Image from "next/image";
import { projectProps } from "@/types";
import { query, collection, getDocs, where } from "firebase/firestore";
import "./projects.css";
import Link from "next/link";

type Props = {};

async function Projects({}: Props) {
  let projects: projectProps[] = [];
  const q = query(collection(db, "projects"), where("show", "==", true));
  const res = await getDocs(q);

  res.docs.map((doc) => {
    const t = doc.data() as projectProps;
    projects.push({ ...t, id: doc.id });
  });

  return (
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

      <div className="md:p-4 w-full gap-6 flex flex-col">
        {projects.map((project, i) => {
          const flex = i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row";

          return (
            <div
              aria-label={String(i)}
              key={i}
              className={`g-fit group/projects bg-transparent after:bg-transparent after:top-0 after:left-0 after:w-full after:h-full after:absolute relative overflow-hidden z-[1] text-white rounded-xl`}
            >
              <Link
                className="w-full hide flex items-center justify-center h-full"
                href={"p/" + project.id}
              >
                <div
                  className={`${flex} w-full gap-0 md:gap-0 flex flex-col relative h-full md:p-4`}
                >
                  <Image
                    className="w-full md:w-2/3 aspect-auto object-contain group-hover/projects:scale-105 transition-transform"
                    alt="bg"
                    width={1920}
                    height={1080}
                    src={project?.banner ?? ""}
                  />
                  <div className="p-4 md:p-0 flex-col h-fill w-full md:w-1/3 flex items-center md:items-start gap-4 justify-center z-[2] relative">
                    <h1 className="text-5xl text-center text-gray-900 md:text-start font-bold">
                      {project.name}
                    </h1>
                    <p className="trunc text-center md:text-start md:text-xl text-gray-900 w-full left-0">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
