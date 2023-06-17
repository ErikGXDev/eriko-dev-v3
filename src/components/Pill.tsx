interface Props {
  color: string;
  children: string;
}

import { colors } from "../util/util";

export default function Pill({ color, children }: Props) {
  return (
    <div
      class={
        "rounded-full p-2 px-4 " +
        (colors[color as keyof typeof colors] || "bg-amber-500")
      }
    >
      {children}
    </div>
  );
}
