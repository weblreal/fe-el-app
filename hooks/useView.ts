import { useState, useEffect } from "react";

interface RefObject {
  current: any;
}

interface Props {
  once?: boolean;
}

function useView(ref: RefObject, { once = false }: Props = {}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    if (ref.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
          if (once && entry.isIntersecting) {
            observer!.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(ref.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [ref, once]);

  return isVisible;
}

export default useView;
