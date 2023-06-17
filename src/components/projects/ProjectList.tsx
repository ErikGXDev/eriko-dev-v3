import Pill from "../Pill";
import projects from "../../assets/projects.json";
import Card from "./Card";
import { useState } from "preact/hooks";
export default function ProjectList() {
  const [filterCategory, setFilterCategory] = useState(0);

  const pills = [
    { color: "neutral", text: "No Filter" },
    { color: "amber", text: "Programming" },
    { color: "pink", text: "Design" },
    { color: "fuchsia", text: "Pixel Art" },
  ];

  return (
    <>
      <div class="flex flex-wrap gap-2 justify-center md:justify-start">
        {pills.map((pill, i) => (
          <div
            class={
              "transition-all cursor-pointer select-none " +
              (filterCategory == i ? "" : "brightness-75")
            }
            data-i={i}
            key={i}
            onClick={(e) => {
              setFilterCategory(i);
            }}
          >
            <Pill color={pill.color}>{pill.text}</Pill>
          </div>
        ))}
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
        {projects
          .filter(
            (project) =>
              filterCategory == 0 || project.category.includes(filterCategory)
          )
          .map((project, i) => (
            <Card key={i} data={project} dots />
          ))}
      </div>
    </>
  );
}
