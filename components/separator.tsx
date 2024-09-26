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
        "bg-[hsl(0_0%_14.9%)] rounded-xl",
        orientation === "horizontal" ? "w-full h-[1px]" : "h-full w-[1px]",
        className
      )}></div>
  );
};
