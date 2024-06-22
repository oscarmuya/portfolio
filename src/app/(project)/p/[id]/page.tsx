import ProjectView from "@/app/_components/projectview/ProjectView";
import db from "@/firebase/firebase";
import { projectProps } from "@/types";
import { doc, getDoc } from "firebase/firestore";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  const res = await getDoc(doc(db, "projects", params.id));
  const data = res.data() as projectProps;

  return <ProjectView project={data} />;
}
