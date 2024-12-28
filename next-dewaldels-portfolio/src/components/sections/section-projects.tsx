import { queryProjects } from "@/lib/sanity/requests";
import { ProjectQueryResult } from "@/lib/sanity/types";
import { useEffect, useMemo, useState } from "react";
import ProjectList from "./projects/project-list";

const SectionProjects = () => {
  const [projects, setProjects] = useState<ProjectQueryResult[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      const projects = await queryProjects();
      setProjects(projects);
    };

    getProjects();
  }, []);

  return (
    <>
      <section className="nes-container with-title mb-8">
        <h3 className="title">Projects</h3>
        <p>Here are some projects I work on in my spare time.</p>
      </section>

      <div>
        <ProjectList projects={projects} />
      </div>
    </>
  );
};

export default SectionProjects;
