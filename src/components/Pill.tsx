interface Props {
  color: string;
  children: string;
}

import { colors } from "../util/util";

export default function Pill({ color, children }: Props) {
  return (
    <div
      class={
        "rounded-full p-1 px-2 md:p-2 md:px-4 " +
        ("bg-" + colors[color as keyof typeof colors] || "bg-amber-500")
      }
    >
      {children}
    </div>
  );
}
