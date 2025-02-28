import { FC } from "react";

interface FancyImageProps {
  src: string;
  alt?: string;
}

export const FancyImage: FC<FancyImageProps> = ({ src, alt }) => {
  return (
    <div className="relative h-max w-full overflow-hidden rounded-md md:rounded-lg">
      <img src={src} alt={alt ?? ""} width={0} height={0} sizes="100vw" className="h-auto w-full" />
    </div>
  );
};
