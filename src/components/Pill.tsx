interface Props {
  color: string;
  children: string;
  inflate?: boolean;
}

import { colors } from "../util";

export default function Pill({ color, children, inflate }: Props) {
  return (
    <div
      class={
        "rounded-full " +
        (inflate ? "text-sm p-2 px-2" : "text-sm p-1 px-2") +
        "md:text-lg md:p-2 md:px-4 bg-light/5 " +
        ("text-" + colors[color as keyof typeof colors] || "bg-amber-500")
      }
    >
      {children}
    </div>
  );
}
