import { colors } from "../../util/colors";
import { useState } from "preact/hooks";

export default function Filter({
  children,
  color,
  onClick,
}: {
  children: string;
  color: string;
  onClick: any;
}) {
  const [isToggled, setToggle] = useState(true);

  return (
    <button
      class={
        "rounded-full p-2 px-4 hover:scale-110 transition-all cursor-pointer " +
        (colors[color as keyof typeof colors] || "bg-amber-500") +
        " " +
        (isToggled || "brightness-75")
      }
      onClick={() => {
        setToggle(!isToggled);
      }}
    >
      {children}
    </button>
  );
}
