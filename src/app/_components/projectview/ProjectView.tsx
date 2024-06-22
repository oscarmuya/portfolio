"use client";

import "./projectview.css";
import close from "../../../assets/close.png";
import { projectProps } from "@/types";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Props = {
  project: projectProps;
};

function ProjectView({ project }: Props) {
  const router = useRouter();

  return (
    <div className="view relative isOpen">
      <div className={`view__content __${100}`}>
        <div className="view__content-preview bg-white md:bg-black">
          {project.image && (
            <Image height={200} width={400} src={project.image} alt="" />
          )}
          {/* <video
            src={videoSrc}
            autoPlay={true}
            loop={true}
            playsInline={true}
          ></video> */}
        </div>
      </div>
      <div className="view__desc">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a
          className="bg-primaryColor px-4 p-2 text-white rounded-full "
          target="_blank"
          rel="noreferrer noopener"
          href={project.link}
        >
          Visit Website
        </a>
      </div>
      <button onClick={() => router.back()}>
        <Image src={close} alt="" />
      </button>
    </div>
  );
}

export default ProjectView;
