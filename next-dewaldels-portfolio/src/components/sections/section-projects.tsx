import { queryProjects } from "@/lib/sanity/requests";
import { Project } from "@/lib/sanity/types";
import { useEffect, useState } from "react";
import ProjectList from "./projects/project-list";

const SectionProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await queryProjects();
      setProjects(projects);
    };

    getProjects();
  }, []);

  console.log("projects", projects);

  return (
    <section className="nes-container with-title mb-8">
      <h3 className="title">Projects</h3>
      <p>Here are some projects I work on in my spare time.</p>

      <div>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
};

export default SectionProjects;
