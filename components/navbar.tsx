import { FC } from "react";
import { Separator } from "~/components/separator";

export const Navbar: FC = () => {
  return (
    <nav className="fixed z-[3] w-full top-0 ease-in-out bg-neutral-900">
      <div className="py-2 px-2 md:px-4 grid grid-cols-[1fr_auto_1fr] w-full">
        <div className="w-max text-emerald-500">mtab</div>
        <div></div>
        <a href="https://github.com/maxhu08/mtab" target="_blank" className="ml-auto text-blue-500">
          github
        </a>
      </div>
      <Separator orientation="horizontal" />
    </nav>
  );
};
