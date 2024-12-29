import { ProjectQueryResult } from "@/lib/sanity/types";
import { useEffect, useState } from "react";
import ProjectLinks from "./project-links";
import ProjectTechStack from "./project-techstack";
import ProjectDialogueDivider from "./project-dialogue-divider";

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
              className="nes-container is-rounded opacity-100 z-[999] relative !mx-4"
              style={{
                backgroundColor: "var(--background)",
              }}
            >
              <div className="flex justify-between items-center gap-4 mb-6">
                <h1 className="nes-text text-lg font-bold is-primary">
                  {project.title}
                </h1>
                <div className="flex justify-end mb-4">
                  <button className="nes-btn is-error" onClick={onDismiss}>
                    x
                  </button>
                </div>
              </div>

              <p>Project info here</p>
              <ProjectDialogueDivider />

              <div className="mb-6">
                <ProjectTechStack
                  techStack={project.techStack}
                  projectId={project.id}
                />
              </div>

              <ProjectDialogueDivider />

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
