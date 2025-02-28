"use client";

import Autoplay from "embla-carousel-autoplay";
import { FC } from "react";
import { FancyImage } from "~/components/fancy-image";
import { Carousel, CarouselContent, CarouselItem } from "~/components/ui/carousel";

export const ShowcaseCarousel: FC = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000
        })
      ]}
      opts={{
        startIndex: 1
      }}
      className="w-[95vw] md:w-[80vw] lg:w-[75vw]"
    >
      <CarouselContent>
        <CarouselItem>
          <div className="rounded-lg border-2 border-sky-500">
            <FancyImage src="/assets/showcase-3.png" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="rounded-lg border-2 border-sky-500">
            <FancyImage src="/assets/showcase-1.png" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="rounded-lg border-2 border-sky-500">
            <FancyImage src="/assets/showcase-2.png" />
          </div>
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
};
