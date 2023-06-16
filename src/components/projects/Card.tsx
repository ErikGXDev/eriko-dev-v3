import Dot from "./Dot";

interface Props {
  data: {
    title: string;
    description: string;
    link: string;
    category: number[];
  };
}

const colors = ["amber", "pink", "fuchsia"];

export default function Card({ data }: Props) {
  return (
    <a href={data.link} class="block" target="_blank">
      <article class="p-4 rounded-lg bg-light/2 hover:bg-light/5 border border-light/10 transition-colors h-full">
        <div class="flex justify-between gap-2">
          <h2 class="text-xl font-black mb-1">{data.title}</h2>
          <div class="flex gap-1">
            {data.category.map((cat) => (
              <Dot color={colors[cat - 1]} />
            ))}
          </div>
        </div>
        <p>{data.description}</p>
      </article>
    </a>
  );
}
