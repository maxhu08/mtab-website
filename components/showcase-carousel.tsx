"use client";

import Autoplay from "embla-carousel-autoplay";
import { FC } from "react";
import { FancyImage } from "~/components/fancy-image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "~/components/ui/carousel";

export const ShowcaseCarousel: FC = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 5000
        })
      ]}
      className="w-[95vw] md:w-[80vw] lg:w-[75vw]">
      <CarouselContent>
        <CarouselItem>
          <div className="border-sky-500 border-2 rounded-lg">
            <FancyImage src="/assets/showcase-1.png" />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="border-sky-500 border-2 rounded-lg">
            <FancyImage src="/assets/showcase-2.png" />
          </div>
        </CarouselItem>
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
};
