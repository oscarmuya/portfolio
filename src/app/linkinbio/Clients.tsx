"use client";

import db from "@/firebase/firebase";
import { projectProps } from "@/types";
import { doc, increment, updateDoc } from "firebase/firestore";
import Link from "next/link";

type Props = {
  item: projectProps;
  children: React.ReactNode;
};

const Clients = ({ item, children }: Props) => {
  const handleUpdateCount = () => {
    const ref = new URL(document.referrer);
    const id = item.link.includes("hdstatus")
      ? "hdstatus"
      : item.link.includes("frima")
      ? "frima"
      : item.link.includes("ratemylecturer")
      ? "rml"
      : "unknown";
    const d = doc(db, "admin", id);
    updateDoc(d, { [`${ref.host}`]: increment(1) });
  };

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleUpdateCount}
      className="relative short w-full"
      href={item.link}
    >
      {children}
    </Link>
  );
};

export default Clients;
