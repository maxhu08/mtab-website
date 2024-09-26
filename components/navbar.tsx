import { Github } from "lucide-react";
import { FC } from "react";
import { FancyImage } from "~/components/fancy-image";
import { Separator } from "~/components/separator";

export const Navbar: FC = () => {
  return (
    <nav className="fixed z-[3] w-full top-0 ease-in-out bg-neutral-900">
      <div className="py-2 px-2 md:px-4 grid grid-cols-[1fr_auto_1fr] w-full">
        <div className="w-max grid grid-cols-[max-content_auto] place-items-center gap-2">
          <div className="w-6 h-6">
            <FancyImage src="/assets/icon.png" />
          </div>
          <span className="text-emerald-500">mtab</span>
        </div>
        <div></div>
        <a
          href="https://github.com/maxhu08/mtab"
          target="_blank"
          className="ml-auto text-blue-500 hover:text-blue-600 transition cursor-pointer">
          <div className="w-max grid grid-cols-[max-content_auto] place-items-center gap-2">
            <Github className="w-4 h-4" />
            <span>github</span>
          </div>
        </a>
      </div>
      <Separator orientation="horizontal" />
    </nav>
  );
};
