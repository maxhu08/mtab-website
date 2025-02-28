import { FC } from "react";
import { cn } from "~/lib/utils";

interface SeparatorProps {
  orientation: "horizontal" | "vertical";
  className?: string;
}

export const Separator: FC<SeparatorProps> = ({ orientation, className }) => {
  return (
    <div
      className={cn(
        "rounded-xl bg-[hsl(0_0%_14.9%)]",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
    ></div>
  );
};
