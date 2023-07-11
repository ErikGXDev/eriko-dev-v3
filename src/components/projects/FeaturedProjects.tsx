import projects from "../../assets/projects.json";
import Card from "./Card";
import _ from "lodash";
export default function FeaturedProjects({ count = 2 }: { count: number }) {
  const selectedProjects = projects.filter((project) => project.featured);

  return (
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-4">
      {selectedProjects.map((project) => (
        <Card data={project}></Card>
      ))}
    </div>
  );
}
