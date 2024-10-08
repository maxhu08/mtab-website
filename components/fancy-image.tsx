import { FC } from "react";

interface FancyImageProps {
  src: string;
  alt?: string;
}

export const FancyImage: FC<FancyImageProps> = ({ src, alt }) => {
  return (
    <div className="rounded-md md:rounded-lg overflow-hidden relative w-full h-max">
      <img src={src} alt={alt ?? ""} width={0} height={0} sizes="100vw" className="w-full h-auto" />
    </div>
  );
};
