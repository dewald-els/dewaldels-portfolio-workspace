import { ProjectQueryResult } from "@/lib/sanity/types";
import { useEffect, useState } from "react";
import ProjectLinks from "./project-links";

interface ProjectDiaogueProps {
  onDismiss: () => void;
  project?: ProjectQueryResult;
}
const ProjectDialogue = (props: ProjectDiaogueProps) => {
  const { project, onDismiss } = props;
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (project) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [project]);

  return (
    <>
      {visible && project && (
        <>
          <div className="bg-slate-800 opacity-80 fixed top-0 left-0 w-full h-dvh flex justify-center items-center z-[99]"></div>
          <div className="bg-transparent fixed top-0 left-0 w-full h-dvh flex justify-center items-center z-[99]">
            <div
              className="nes-container is-round opacity-100 z-[999] relative"
              style={{
                backgroundColor: "var(--background)",
              }}
            >
              <div className="flex justify-end mb-4">
                <button className="nes-btn is-error" onClick={onDismiss}>
                  x
                </button>
              </div>
              <div className="mb-6">
                <h1>{project.title}</h1>
                <p>Project info here</p>
              </div>

              <div className="mb-6">
                <ProjectLinks
                  projectLinks={project.links}
                  projectId={project.id}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProjectDialogue;
