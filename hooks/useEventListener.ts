import { useEffect, useRef } from "react";

const useEventListener = (
  handler: Function,
  event: string,
  element: { current: HTMLElement | null | Window } = { current: window },
  passive: undefined | boolean = false
) => {
  const savedHandler: { current: any } = useRef<Function | null>(null);

  // Update handler
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Element
    const selectedElement = element.current;

    // If element supports the event
    const isSupported = selectedElement && selectedElement.addEventListener;
    if (!isSupported) return;

    // Handler setup
    const eventListener = (event: any) => savedHandler.current(event);

    // Call event
    selectedElement.addEventListener(event, eventListener, {
      passive: passive,
    });

    // Clean up function
    return () => {
      selectedElement.removeEventListener(event, eventListener);
    };
  }, [event, element]);
  return;
};

export default useEventListener;
