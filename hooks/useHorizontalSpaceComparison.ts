import React, { useState, useEffect } from "react";

const useHorizontalSpaceComparison = (ref: any) => {
  const [horizontalSpace, setHorizontalSpace] = useState("unknown");

  useEffect(() => {
    const compareHorizontalSpace = () => {
      if (!ref || !ref.current) {
        return;
      }

      const { offsetLeft, offsetWidth } = ref.current;
      const leftSpace = offsetLeft;
      const rightSpace = window.innerWidth - leftSpace - offsetWidth;

      if (Math.abs(leftSpace) > Math.abs(rightSpace)) {
        setHorizontalSpace("left");
      } else if (Math.abs(rightSpace) > Math.abs(leftSpace)) {
        setHorizontalSpace("right");
      } else {
        setHorizontalSpace("equal");
      }
    };

    compareHorizontalSpace();

    const handleResize = () => {
      compareHorizontalSpace();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [ref]);

  return { horizontalSpace };
};

export default useHorizontalSpaceComparison;
