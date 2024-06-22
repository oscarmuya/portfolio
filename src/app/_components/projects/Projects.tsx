import ph from "../../../../public/pb.jpg";
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

      <div className="p-4 w-full gap-4 md:gap-2 grid grid-cols-1 md:grid-cols-4">
        {projects.map((project, i) => {
          const t = i + 1;
          let span =
            t % 5 === 1
              ? "md:col-span-2 md:row-span-2 md:h-[400px]"
              : t % 5 === 2
              ? "md:col-span-2 md:row-span-1 md:h-[200px]"
              : t % 5 === 4 || t % 5 === 5
              ? "md:h-[200px] spanned md:col-span-1 md:row-span-1"
              : t % 5 === 3
              ? "md:col-span-2 md:row-span-2 md:h-[400px]"
              : "md:h-[200px] spanned";
          span = "md:min-h-[300px]";

          return (
            <div
              aria-label={String(i)}
              key={i}
              className={`${span} group/projects bg-black after:bg-black/40 after:top-0 after:left-0 after:w-full after:h-full after:absolute relative overflow-hidden z-[1] text-white rounded-xl border bg-cover`}
            >
              <Link className="w-full h-full" href={"p/" + project.id}>
                <div className="w-full h-full p-4">
                  <Image
                    className="h-full w-full group-hover/projects:scale-110 transition-transform object-cover absolute top-0 left-0"
                    alt="bg"
                    src={ph}
                  />
                  <div className="flex-col flex items-start gap-4 h-full justify-center z-[2] relative">
                    <h1 className="text-5xl text-start font-bold">
                      {project.name}
                    </h1>
                    <p className="trunc w-full left-0">{project.description}</p>
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
