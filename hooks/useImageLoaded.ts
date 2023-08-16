import { useState } from "react";

const useImageLoaded = () => {
  const [imageLoadCount, setImageLoadCount] = useState<number>(0);

  const imageLoadedHandler = (): void => {
    setImageLoadCount((count) => count + 1);
  };

  return { imageLoadCount, imageLoadedHandler };
};

export default useImageLoaded;
