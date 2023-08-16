import { useEffect, useRef, useCallback } from "react";

const useClickedOutside = ({
  trigger,
  callBack,
}: {
  trigger: any;
  callBack: () => void;
}) => {
  // Hooks
  const ref = useRef<HTMLElement>(null);

  const callBackHandler = useCallback(() => {
    if (callBack) callBack();
  }, [callBack]);

  useEffect(() => {
    const closeOpenMenus = (e: any) => {
      const inside = ref.current?.contains(e.target);

      if (ref.current && trigger && !inside) {
        callBackHandler();
      }
    };

    document.addEventListener("mousedown", closeOpenMenus);
    return () => document.removeEventListener("mousedown", closeOpenMenus);
  }, [ref, trigger, callBackHandler]);

  return { ref };
};

export default useClickedOutside;
