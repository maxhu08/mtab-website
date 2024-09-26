import { FancyImage } from "~/components/fancy-image";

const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-flow-row gap-4 py-20">
        <div className="grid place-items-center py-10 lg:py-20">
          <h1 className="text-white text-2xl md:text-4xl lg:text-6xl text-center">
            the <span className="text-emerald-500">modern</span> new tab extension
          </h1>
          <div className="grid grid-cols-2 gap-4 pt-10">
            <a
              href="https://chromewebstore.google.com/detail/mtab/fdaphilojaklgkoocegabckfanjoacjg"
              target="_blank"
              className="cursor-pointer">
              <div className="w-[10rem] lg:w-[14rem]">
                <FancyImage src="/assets/download-chrome.svg" />
              </div>
            </a>
            <a
              href="https://addons.mozilla.org/en-US/firefox/addon/mtab"
              target="_blank"
              className="cursor-pointer">
              <div className="w-[10rem] lg:w-[14rem]">
                <FancyImage src="/assets/download-firefox.svg" />
              </div>
            </a>
          </div>
        </div>
        <div className="grid place-items-center">
          <div className="w-[80%] border-sky-500 border-2 rounded-lg">
            <FancyImage src="/assets/showcase.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
