"use client";

import { FC, useEffect, useRef, useState } from "react";
import { cn } from "~/lib/utils";

interface AnimateProps {
  children: React.ReactNode;
  delay: number;
  className?: string;
}

export const Animate: FC<AnimateProps> = ({ children, delay, className }) => {
  const [classes, setClasses] = useState("opacity-0");
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const timer = setTimeout(() => {
      setClasses("animate-up-bouncy opacity-0");

      // hard coded
      const animationDuration = 1000;

      const cleanupTimer = setTimeout(() => {
        setClasses("");
      }, animationDuration);

      return () => clearTimeout(cleanupTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div ref={elementRef} className={cn(className, classes)}>
      {children}
    </div>
  );
};
