import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(
  `*[_type == "project" && defined(slug.current)][0...12]{
  "id": _id,
  title,
  image[]->{
    "url": screenshot.asset->url,
    caption
  },
  links,
  techStack[]->{
  title
  },
   projectTags[]->{
   title
 }}`
);
