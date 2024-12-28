import { ProjectQueryResult } from "@/lib/sanity/types";
import Image from "next/image";

interface ProjectListProps {
  projects: ProjectQueryResult[];
}

const ProjectList = (props: ProjectListProps) => {
  const { projects } = props;
  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id} className="nes-container  mb-8">
          <span>{project.title}</span>
        </li>
      ))}
    </ul>
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

//       {/* <div className="flex gap-4">
//         {project.projectTags?.map((tag) => (
//           <div key={`${project._id}_${tag?.title}`} className="nes-badge">
//             <span className="is-primary">{tag?.title}</span>
//           </div>
//         ))}
//       </div> */}
//     </li>
//   ))}
// </ul>
