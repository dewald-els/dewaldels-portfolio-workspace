import { ProjectQueryResult } from "@/lib/sanity/types";
import Image from "next/image";
import { useState } from "react";
import ProjectLinks from "./project-links";
import ProjectDialogue from "./project-dialogue";

interface ProjectListProps {
  projects: ProjectQueryResult[];
}

const ProjectList = (props: ProjectListProps) => {
  const { projects } = props;
  const [dialogueProject, setDialogueProject] = useState<
    ProjectQueryResult | undefined
  >();

  const handleProjectClick = (project: ProjectQueryResult) => {
    setDialogueProject(project);
  };

  return (
    <>
      <ul className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <li key={project.id} className="nes-container is-rounded !p-0 !m-0">
            <div className="mb-2 border-b-4 border-black">
              {/* <Image
              unoptimized
              src={project.image[0].url}
              alt={project.title || "Project"}
              width={200}
              height={200}
            /> */}
              <img
                src={project.thumbnailUrl}
                className="w-full object-cover h-60"
                alt={project.title}
              />
            </div>
            <div className="p-4">
              <div className="mb-6">
                <span className="font-bold text-lg nes-text is-primary">
                  {project.title}
                </span>
              </div>
              <div>
                <button
                  className="nes-btn is-primary"
                  onClick={() => handleProjectClick(project)}
                >
                  ?
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ProjectDialogue
        project={dialogueProject}
        onDismiss={() => {
          setDialogueProject(undefined);
        }}
      />
    </>
  );
};

export default ProjectList;

// <ul key={"stupid-fucking-react"}>
//   {projects.map((project) => (
//     <li key={project._id} className="nes-container mb-8">
//       {/* <span className="nes-text">{project.title}</span> */}
//       {/*
//       <div>
//         <Image
//           src={project.image[0].url}
//           alt={project.title || "Project"}
//           width={"200"}
//           layout="fill"
//         />
//       </div> */}

{
  /* <div className="flex gap-4">
        {project.projectTags?.map((tag) => (
          <div key={`${project._id}_${tag?.title}`} className="nes-badge">
            <span className="is-primary">{tag?.title}</span>
          </div>
        ))}
      </div> */
}
//     </li>
//   ))}
// </ul>
