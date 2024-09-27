import { Animate } from "~/components/animate";
import { FancyImage } from "~/components/fancy-image";
import { ShowcaseCarousel } from "~/components/showcase-carousel";

const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-flow-row gap-4 py-20">
        <div className="grid place-items-center py-4 md:py-10 lg:py-20">
          <Animate delay={0}>
            <h1 className="text-white text-2xl md:text-4xl lg:text-6xl text-center">
              the <span className="text-emerald-500">modern</span> new tab extension
            </h1>
          </Animate>
          <div className="grid grid-cols-2 gap-2 md:gap-4 pt-4 md:pt-10">
            <Animate delay={100}>
              <a
                href="https://chromewebstore.google.com/detail/mtab/fdaphilojaklgkoocegabckfanjoacjg"
                target="_blank"
                className="cursor-pointer">
                <div className="w-[6rem] md:w-[10rem]">
                  <FancyImage src="/assets/download-chrome.svg" />
                </div>
              </a>
            </Animate>
            <Animate delay={200}>
              <a
                href="https://addons.mozilla.org/en-US/firefox/addon/mtab"
                target="_blank"
                className="cursor-pointer">
                <div className="w-[6rem] md:w-[10rem]">
                  <FancyImage src="/assets/download-firefox.svg" />
                </div>
              </a>
            </Animate>
          </div>
        </div>
        <Animate delay={300} className="grid place-items-center">
          <ShowcaseCarousel />
        </Animate>
      </div>
      {/* <!-- <3 --> */}
      <div className="px-2 py-4">
        <p className="text-base text-white text-center">Made with ❤️ by Max Hu et al.</p>
      </div>
    </div>
  );
};

export default Page;
