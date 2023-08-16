import { useRef, useState, useEffect } from "react";

interface IProps {
  initialPosition?: Position;
  spring?: boolean;
  dragDirection: DragDirection;
}

interface IReturn {
  position: Position;
  ref: any;
  direction: Direction;
  isDragging: boolean;
  dragLength: number;
}

interface Position {
  x: number;
  y: number;
}

type Direction = "left" | "right" | "down" | "up" | "initial";
type DragDirection = "horizontal" | "vertical" | "all";

const useDrag = ({
  initialPosition = { x: 0, y: 0 },
  spring,
  dragDirection = "all",
}: IProps): IReturn => {
  // Hooks
  const ref = useRef<HTMLDivElement | null>(null);
  const previousPosition = useRef({ x: 0, y: 0 });

  const [position, setPosition] = useState<Position>(initialPosition);
  const [direction, setDirection] = useState<Direction>("initial");
  const [dragging, setDragging] = useState<boolean>(false);
  const [dragLength, setDragLength] = useState<number>(0);

  useEffect(() => {
    const { x, y } = previousPosition.current;

    if (!dragging) {
      // setDirection("initial");
      return;
    }

    if (position.x > x) {
      setDirection("right");
    } else if (position.x < x) {
      setDirection("left");
    } else if (position.y > y) {
      setDirection("down");
    } else if (position.y < y) {
      setDirection("up");
    }

    previousPosition.current = { x: position.x, y: position.y };
  }, [position, previousPosition, dragging]);

  useEffect(() => {
    let isDragging = false;
    let currentX: number = position.x;
    let currentY: number = position.y;
    let initialX: number;
    let initialY: number;
    let xOffset = 0;
    let yOffset = 0;

    const mouseDownHandler = (event: MouseEvent) => {
      isDragging = true;
      setDragging(isDragging);
      initialX = event.clientX - xOffset;
      initialY = event.clientY - yOffset;
    };

    const mouseMoveHandler = (event: MouseEvent) => {
      if (isDragging) {
        event.preventDefault();
        currentX = event.clientX - initialX;
        currentY = event.clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        if (dragDirection === "horizontal") {
          currentY = 0;
        }

        setPosition({ x: currentX, y: currentY });
      }
    };

    const mouseUpHandler = () => {
      isDragging = false;
      setDragging(isDragging);
      // setDirection("initial");

      setDragLength(Math.abs(currentX));
      if (spring) {
        currentX = 0;
        currentY = 0;
        initialX = 0;
        initialY = 0;
        xOffset = 0;
        yOffset = 0;
        setPosition({ x: 0, y: 0 });
      } else {
        initialX = currentX;
        initialY = currentY;
      }
    };

    const touchStartHandler = (event: TouchEvent) => {
      isDragging = true;
      setDragging(isDragging);

      initialX = event.touches[0].clientX - xOffset;
      initialY = event.touches[0].clientY - yOffset;
    };

    const touchMoveHandler = (event: TouchEvent) => {
      if (isDragging) {
        event.preventDefault();
        currentX = event.touches[0].clientX - initialX;
        currentY = event.touches[0].clientY - initialY;

        xOffset = currentX;
        yOffset = currentY;

        setPosition({ x: currentX, y: currentY });
      }
    };

    const touchEndHandler = () => {
      isDragging = false;
      setDragging(isDragging);
      // setDirection("initial");

      setDragLength(Math.abs(currentX));
      if (spring) {
        currentX = 0;
        currentY = 0;
        initialX = 0;
        initialY = 0;
        xOffset = 0;
        yOffset = 0;
        setPosition({ x: 0, y: 0 });
      } else {
        initialX = currentX;
        initialY = currentY;
      }
    };

    if (ref.current) {
      const elem = ref.current;

      elem.addEventListener("mousedown", mouseDownHandler, { passive: false });
      elem.addEventListener("mousemove", mouseMoveHandler, { passive: false });
      elem.addEventListener("mouseup", mouseUpHandler, { passive: false });
      elem.addEventListener("mouseleave", mouseUpHandler, { passive: false });

      elem.addEventListener("touchstart", touchStartHandler, { passive: false });
      elem.addEventListener("touchmove", touchMoveHandler, { passive: false });
      elem.addEventListener("touchend", touchEndHandler, { passive: false });
      elem.addEventListener("touchcancel", touchEndHandler, { passive: false });
    }

    return () => {
      if (ref.current) {
        const elem = ref.current;

        elem.removeEventListener("mousedown", mouseDownHandler);
        elem.removeEventListener("mousemove", mouseMoveHandler);
        elem.removeEventListener("mouseup", mouseUpHandler);
        elem.removeEventListener("mouseleave", mouseUpHandler);

        elem.removeEventListener("touchstart", touchStartHandler);
        elem.removeEventListener("touchmove", touchMoveHandler);
        elem.removeEventListener("touchend", touchEndHandler);
        elem.removeEventListener("touchcancel", touchEndHandler);
      }
    };
  }, []);

  return { position, ref, direction, isDragging: dragging, dragLength };
};

export default useDrag;
