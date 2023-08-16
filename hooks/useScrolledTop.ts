import { useEffect, useState } from "react";

const useScrolledTop = (ref: any, threshold: number = 0) => {
  // States
  const [onTop, setOnTop] = useState(false);

  // Events
  useEffect(() => {
    if (!ref) return;

    const element = ref.current;

    const callback = () => {
      setOnTop(element?.getBoundingClientRect().y < 0 + threshold);
    };

    window.addEventListener("scroll", callback);
    return () => removeEventListener("scroll", callback);
  }, [ref]);

  return { onTop };
};

export default useScrolledTop;
