import { Github } from "lucide-react";
import { FC } from "react";
import { FancyImage } from "~/components/fancy-image";
import { Separator } from "~/components/separator";

export const Navbar: FC = () => {
  return (
    <nav className="fixed top-0 z-[3] w-full bg-neutral-900 ease-in-out">
      <div className="grid w-full grid-cols-[1fr_auto_1fr] px-2 py-2 md:px-4">
        <div className="grid w-max grid-cols-[max-content_auto] place-items-center gap-2">
          <div className="h-6 w-6">
            <FancyImage src="/assets/icon.png" />
          </div>
          <span className="text-emerald-500">mtab</span>
        </div>
        <div></div>
        <a
          href="https://github.com/maxhu08/mtab"
          target="_blank"
          className="ml-auto cursor-pointer text-blue-500 transition hover:text-blue-600"
        >
          <div className="grid w-max grid-cols-[max-content_auto] place-items-center gap-2">
            <Github className="h-4 w-4" />
            <span>github</span>
          </div>
        </a>
      </div>
      <Separator orientation="horizontal" />
    </nav>
  );
};
