import { ProjectQueryResult } from "@/lib/sanity/types";
import { useEffect, useState } from "react";
import ProjectLinks from "./project-links";
import ProjectTechStack from "./project-techstack";
import ProjectDialogueDivider from "./project-dialogue-divider";
import ProjectTrimableText from "./project-trimable-text";

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
              className="nes-container with-title is-rounded opacity-100 z-[999] relative !mx-4 dialogue"
              style={{
                backgroundColor: "var(--background)",
              }}
            >
              <h3 className="title nes-container is-rounded font-bold max-w-60 nes-text is-primary">
                {project.title}
              </h3>
              <div className="dialogue-content">
                <div className="absolute right-0 top-0">
                  <button className="nes-btn is-error" onClick={onDismiss}>
                    x
                  </button>
                </div>

                {project.body && (
                  <div className="mb-6">
                    <ProjectTrimableText text={[project.body]} />
                  </div>
                )}

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
          </div>
        </>
      )}
    </>
  );
};

export default ProjectDialogue;
