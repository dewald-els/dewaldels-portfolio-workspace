import { client } from "./client";
import { PROJECTS_QUERY } from "./queries";
import { ProjectQueryResult } from "./types";

const queryProjects = async () => {
  try {
    const projects = await client.fetch<ProjectQueryResult[]>(PROJECTS_QUERY);
    return projects;
  } catch (error) {
    console.log("error: ", error);
    return [];
  }
};

export { queryProjects };
