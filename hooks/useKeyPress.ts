import { useState, useEffect, useCallback } from "react";
import useThrottling from "./useThrottling";

const useKeyPress = ({
  callBack,
  disable,
  enter,
  exit,
}: {
  callBack: (event: KeyboardEvent) => void;
  disable?: boolean;
  enter?: () => void;
  exit?: () => void;
}) => {
  const [isThrottle, throttle] = useThrottling(25);
  const [keyPressed, setKeyPressed] = useState<string>("");

  const enterHandler = useCallback(() => {
    if (enter) enter();
  }, [enter]);

  const exitHandler = useCallback(() => {
    if (exit) exit();
  }, [exit]);

  useEffect(() => {
    if (disable) return;
    const downHandler = (event: KeyboardEvent) => {

      if(isThrottle) return;

      throttle();

      if (callBack) callBack(event);

      setKeyPressed(event.key);

      if (event.key === "Enter") {
        enterHandler();
      }

      if(event.key === "Escape") {
        exitHandler();
      }
    };

    document.body?.addEventListener("keydown", downHandler);

    return () => {
      document.body?.removeEventListener("keydown", downHandler);
    };
  }, [disable, enterHandler, exitHandler]);

  return keyPressed;
};

export default useKeyPress;
