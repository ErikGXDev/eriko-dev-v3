import { colors } from "../../util/util";

export default function Dot({ color }: { color: string }) {
  return (
    <div
      class={
        "w-4 h-4 rounded-full " +
        (colors[color as keyof typeof colors] || "bg-amber-500")
      }
    ></div>
  );
}
