import { useRef } from "react";

const useScrollIntoView = ({ block, behavior = "smooth" }: {
  block: "center" | "end" | "nearest" | "start";
  behavior?: ScrollBehavior;
}) => {
  const element = useRef<HTMLElement>(null);

  const scrollToELement = () => {
    if (element?.current) {
      const elem = element?.current;
      setTimeout(() => elem.scrollIntoView({ behavior: behavior, block: block }), 50);
    }
  };

  return { scrollToELement, element };
};

export default useScrollIntoView;
