import { colors } from "../../util";

export default function Dot({ color }: { color: string }) {
  return (
    <div
      class={
        "w-4 h-4 rounded-full " +
        ("bg-" + colors[color as keyof typeof colors] || "bg-amber-500")
      }
    ></div>
  );
}
