import db from "@/firebase/firebase";
import { projectProps } from "@/types";
import { query, collection, getDocs, where } from "firebase/firestore";
import Image from "next/image";
import Footer from "../_components/footer/Footer";
import Clients from "./Clients";
import "./linkinbio.css";

export default async function Page() {
  let projects: projectProps[] = [];
  const q = query(collection(db, "projects"), where("inbio", "==", true));
  const res = await getDocs(q);

  res.docs.map((doc) => {
    const t = doc.data() as projectProps;
    projects.push({ ...t, id: doc.id });
  });

  return (
    <>
      <div className="z-30 pointer-events-auto">
        <Footer theme="light" />
      </div>
      <div className="header flex flex-col lg:flex-row gap-10 relative items-center justify-start p-[30px]">
        <div className="background overflow-hidden">
          <div className="circle__1"></div>
          <div className="circle__2"></div>
          <div className="circle__3"></div>
          <div className="falling__1 bounce"></div>
        </div>
        <div className="content text-secondaryColor">
          <div className="content__top">
            <span>Links</span>
          </div>
          <div className="content__middle text-secondaryColor">
            <span>InBio</span>
            <div className="content__middle-desc"></div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center">
          <div className="links w-full lg:px-10 flex flex-col gap-4 z-[2]">
            {projects.map((item) => (
              <Clients key={item.id} item={item}>
                <div className="bg-white w-full flex gap-2 items-center border shadow rounded p-4">
                  <div
                    className={`${
                      item.name.toLowerCase() === "myfit" && "bg-black rounded"
                    } `}
                  >
                    {item.logo && (
                      <Image
                        className="rounded object-cover"
                        height={50}
                        width={50}
                        src={item.logo}
                        alt="logo"
                      />
                    )}
                  </div>
                  <div className="">
                    <h1>{item.name}</h1>
                    <span className="text-xs text-gray-700 italic">
                      {item.link}
                    </span>
                    <p className="text-xs relative z-[2] text-gray-800">
                      {item.short}
                    </p>
                  </div>
                </div>
              </Clients>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
