// Modules
import {
  Children,
  cloneElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ICarousel } from "./ICarousel";
import useThrottling from "../../hooks/useThrottling";
import useDrag from "../../hooks/useDrag";
// Components
import Container from "../UI/Container/Container";
import Grid from "../UI/Grid/Grid";
import Flex from "../UI/Flex/Flex";

const Carousel = ({
  children,
  variableWidth = 1920,
  gap = 0,
  nextHandler,
  prevHandler,
  center,
  infinite,
  duration = 500,
  threshold = 15,
  activeStyle,
  inactiveStyle,
  Next,
  Prev,
  activeSetter,
  drag = true,
  disableInfiniteScroll,
}: ICarousel) => {
  // Variables
  const childLength = Children.count(children);
  const childArr: ReactNode[] = useMemo(
    () => Children.map(children, (e) => e) || [],
    [children]
  );
  const childrenAndClone = useMemo(() => {
    const cloneNext = childArr?.map((x: any) => x);
    const clonePrev = childArr?.map((x: any) => x);

    return [...clonePrev, ...childArr, ...cloneNext];
  }, [childArr]);

  // Hooks
  const { position, ref, isDragging, direction, dragLength } = useDrag({
    dragDirection: "horizontal",
    spring: true,
  });
  const [isThrottling, ThrottlingHandler] = useThrottling(duration + 200);

  const dragPercentage = useMemo(
    () => Math.ceil((dragLength / globalThis?.window?.innerWidth) * 100),
    [dragLength]
  );
  const [active, setActive] = useState(0);
  const [transition, setTransition] = useState(true);

  const nextRestart = active === childLength;
  const prevRestart = active === -1;
  const activeSlide = infinite ? active + childLength - 1 : active;

  // Handlers
  interface ISlideHandler {
    isHandler?: boolean;
    childLength?: number;
    dragPercentage?: number;
    ThrottlingHandler?: () => void;
    isThrottling?: boolean;
    threshold?: number;
    disableInfiniteScroll?: boolean;
    infinite?: boolean;
  }
  const nextSlideHandler = useCallback(
    ({
      isHandler = false,
      childLength,
      dragPercentage,
      ThrottlingHandler,
      isThrottling,
      threshold,
      disableInfiniteScroll,
      infinite,
    }: ISlideHandler) => {
      if (!isThrottling) {
        if (ThrottlingHandler) ThrottlingHandler();

        if (!isHandler && dragPercentage && threshold) {
          if (dragPercentage < threshold) return;
        }

        if (infinite && !disableInfiniteScroll) {
          setActive((prev) => prev + 1);
        } else {
          if (childLength)
            setActive((prev) => (prev >= childLength - 1 ? prev : prev + 1));
        }
      }
    },
    []
  );

  const prevSlideHandler = useCallback(
    ({
      isHandler = false,
      dragPercentage,
      ThrottlingHandler,
      isThrottling,
      threshold,
      disableInfiniteScroll,
      infinite,
    }: ISlideHandler) => {
      if (!isThrottling) {
        if (ThrottlingHandler) ThrottlingHandler();

        if (!isHandler && dragPercentage && threshold) {
          if (dragPercentage < threshold) return;
        }

        if (infinite && !disableInfiniteScroll) {
          setActive((prev) => prev - 1);
        } else {
          setActive((prev) => (prev === 0 ? 0 : prev - 1));
        }
      }
    },
    []
  );

  // Effects
  useEffect(() => {
    if (childLength === 1) return;

    if (!isDragging) {
      if (direction === "left") {
        nextSlideHandler({
          childLength,
          dragPercentage,
          ThrottlingHandler,
          isThrottling,
          threshold,
        });
      }
      if (direction === "right") {
        prevSlideHandler({
          dragPercentage,
          ThrottlingHandler,
          isThrottling,
          threshold,
        });
      }
    }
  }, [
    childLength,
    dragPercentage,
    isThrottling,
    threshold,
    ThrottlingHandler,
    isDragging,
    direction,
    prevSlideHandler,
    nextSlideHandler,
  ]);

  useEffect(() => {
    if (nextHandler) nextHandler(active);
    if (prevHandler) prevHandler(active);
  }, [active, nextHandler, prevHandler]);

  useEffect(() => {
    // If active is clone reset and disable transition
    if (nextRestart && !isThrottling) {
      setTransition(false);
      setActive(0);
    }

    if (prevRestart && !isThrottling) {
      setTransition(false);
      setActive(childLength - 1);
    }
  }, [nextRestart, prevRestart, isThrottling, childLength]);

  useEffect(() => {
    // After reset enable transition
    if (transition) return;
    if (active === 0 || active === childLength - 1) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [active, childLength, transition]);

  useEffect(() => {
    if (activeSetter !== undefined && activeSetter !== null) {
      setActive(activeSetter);
    }
  }, [activeSetter]);

  const setSlidePosition = () => {
    if (childLength === 1) {
      return active;
    }

    if (infinite) {
      return active * 1 + childLength;
    } else {
      return active * 1;
    }
  };

  return (
    <Container position="relative" maxWidth="100vw">
      <Grid
        ref={drag ? ref : undefined}
        gridTemplateColumns={`repeat(${
          infinite
            ? childrenAndClone.length
            : childLength /* Change if you add more clone */
        }, ${variableWidth}px)`} // Add + 2 to add 2 clones in grid
        position="relative"
        gridGap={`${gap}px`}
        style={{
          transition: !isDragging && transition ? `ease ${duration}ms` : "none",
          transform: `translateX(-${
            (variableWidth + gap) * setSlidePosition()
          }px)`, // Add + 1 inorder to move slide to #1 not clone
          left: center
            ? `calc(${position.x}px + 50% - ${variableWidth}px / 2)`
            : `calc(${position.x}px`,
          pointerEvents: isThrottling ? "none" : "all",
        }}
      >
        {childLength > 1 &&
          Children.map(
            infinite ? childrenAndClone : children,
            (child: any, key: number) =>
              cloneElement(child, {
                key: key,
                style:
                  (infinite ? activeSlide + 1 : activeSlide) !== key
                    ? isThrottling
                      ? { ...inactiveStyle }
                      : { ...inactiveStyle, transition: "none" }
                    : isThrottling
                    ? { ...activeStyle }
                    : { ...activeStyle, transition: "none" },
              })
          )}
        {childLength <= 1 && children}
      </Grid>

      {/* Controls */}
      <Flex>
        {/* Prev */}
        <div
          onClick={() =>
            prevSlideHandler({
              isHandler: true,
              dragPercentage,
              isThrottling,
              threshold,
              ThrottlingHandler,
            })
          }
        >
          {Prev}
        </div>
        {/* Next */}
        <div
          onClick={() =>
            nextSlideHandler({
              isHandler: false,
              childLength,
              dragPercentage,
              ThrottlingHandler,
              isThrottling,
              threshold,
            })
          }
        >
          {Next}
        </div>
      </Flex>
    </Container>
  );
};

export default Carousel;
