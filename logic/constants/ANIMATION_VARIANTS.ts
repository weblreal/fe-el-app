const OPACITY_VARIANT = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
};

const EXPAND_VARIANT = {
  initial: { height: 0, transition: { duration: 0.5, delay: 0.5 } },
  animate: { height: "auto", transition: { duration: 0.5 } },
  exit: { height: 0, transition: { duration: 0.5, delay: 0.5 } },
};

const EXPAND_VARIANT_NO_DELAY = {
  initial: { height: 0, transition: { duration: 0.5, delay: 0 } },
  animate: { height: "auto", transition: { duration: 0.5 } },
  exit: { height: 0, transition: { duration: 0.5, delay: 0 } },
};

const SLIDE_DOWN_50_VARIANT = {
  initial: {
    opacity: 0,
    y: "-50px",
  },
  animate: {
    opacity: 1,
    y: "0",
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

const SLIDE_LEFT_50_VARIANT = {
  initial: {
    opacity: 0,
    x: "-50px",
  },
  animate: {
    opacity: 1,
    x: "0",
  },
  exit: {
    opacity: 0,
  },
};

const SLIDE_LEFT_FULL_VARIANT = {
  initial: {
    x: "-100%",
  },
  animate: {
    x: "0",
  },
  exit: {
    x: "-100%",
  },
};

const SLIDE_RIGHT_FULL_VARIANT = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "0",
  },
  exit: {
    x: "100%",
  },
};

const SLIDE_RESIZE_VARIANT = {
  initial: {
    width: 0,
  },
  animate: {
    width: "100%",
    zIndex: 2,
  },
  exit: {
    opacity: 1,
    zIndex: 1,
  },
  exitSlow: {
    opacity: 1,
    zIndex: 1,
    transition: {
      delay: 10,
    },
  },
};

const HOVERED_SCALE_10 = {
  hovered: {
    scale: 1.1,
    transition: { duration: 0.2, ease: "linear" },
  },
  unhovered: { scale: 1 },
};

const HOVERED_OPACITY_40 = {
  unhovered: {
    backgroundColor: "rgba(18, 18, 18, 0.22)",
    transition: { duration: 0, ease: "linear" },
  },
  hovered: {
    backgroundColor: "rgba(18, 18, 18, 0.44)",
    transition: { duration: 0.02, ease: "linear" },
  },
};

const DYNAMIC_SLIDE_UP_ITEMS_80 = {
  visible: {
    y: 0,
    transition: { ease: "easeOut", duration: 0.48 },
  },
  hidden: (key: number) => ({
    y: key === 0 ? 0 : key * 80,
    transition: { ease: "easeOut", duration: 0.48 },
  }),
};

const STAGGERED_UPWARD_OPACITY_REVEAL = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  hidden: { opacity: 0 },
};

const SLIDE_UPWARD_REVEAL_DELAY_05 = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.2,
      ease: "easeInOut",
    },
    y: 0,
  },
  hidden: { y: 60, opacity: 0 },
};

const SLIDE_UPWARD_30_REVEAL = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
    },
    y: 0,
  },
  hide: { y: 30, opacity: 0 },
};

const SLIDE_UPWARD_20_REVEAL = {
  show: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
    y: 0,
  },
  hide: { y: 20, opacity: 0 },
};

const SLIDE_LEFT_REVEAL = {
  animate: {
    opacity: 1,
    x: 0,
    transition: { ease: "easeInOut", delay: 1, duration: 0.6 },
  },
  initial: { opacity: 0, x: 60 },
};

const SLIDE_UPWARD_DELAY_1 = {
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.3,
    },
    y: 0,
  },
  hidden: { y: 40, opacity: 0 },
};

const SLIDE_STAGGER_UPWARD_DELAY_1 = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delay: 1,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const SLIDE_UPWARD_40 = {
  visible: {
    y: 0,
  },
  hidden: {
    y: 40,
  },
};

const SLIDE_UPWARD_300 = {
  visible: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  },
  hidden: {
    y: 300,
  },
};

const SLIDE_HORIZONTAL_FADE_IN_OUT = {
  // initial
  initial: {
    x: 0,
  },

  // Desktop animation
  right: {
    opacity: [1, 0, 0, 0, 1],
    x: [1, -120, 120, 0],
    transition: { ease: "easeOut", duration: 1 },
  },
  rightReset: {
    opacity: [1, 0, 0, 0, 1],
    x: [1, -120, 120, 0],
    transition: { ease: "easeOut", duration: 1 },
  },
  left: {
    opacity: [1, 0, 0, 0, 1],
    x: [1, 120, -120, 0],
    transition: { ease: "easeOut", duration: 1 },
  },
  leftReset: {
    opacity: [1, 0, 0, 0, 1],
    x: [1, 120, -120, 0],
    transition: { ease: "easeOut", duration: 1 },
  },

  // Mobile animation
  rightM: {
    opacity: [1, 0, 0, 0, 1],
    x: [0, -20, 20, 0],
    transition: { ease: "easeOut", duration: 0.45, delay: 0.5 },
  },
  rightMReset: {
    opacity: [1, 0, 0, 0, 1],
    x: [0, -20, 20, 0],

    transition: { ease: "easeOut", duration: 0.45, delay: 0.5 },
  },
  leftM: {
    opacity: [1, 0, 0, 0, 1],
    x: [0, 20, -20, 0],
    transition: { ease: "easeOut", duration: 0.45, delay: 0.5 },
  },
  leftMReset: {
    opacity: [1, 0, 0, 0, 1],
    x: [0, 20, -20, 0],
    transition: { ease: "easeOut", duration: 0.45, delay: 0.5 },
  },
};

const SLIDE_UPWARD_60_DELAY_1 = {
  animate: {
    opacity: 1,
    transition: {
      delay: 1.3,
      duration: 0.2,
      ease: "easeInOut",
    },
    y: 0,
  },
  initial: { y: 60, opacity: 0 },
};

const DOT_SPREAD_OUT_SMALL = {
  close: {
    transform: "translateX(0)",
  },
  spreadLeftD: {
    transform: "translateX(6px)",
  },
  spreadRightD: {
    transform: "translateX(-6px)",
  },
  spreadLeftM: {
    transform: "translateX(4px)",
  },
  spreadRightM: {
    transform: "translateX(-4px)",
  },
};

const DOT_SPREAD_OUT_LARGE = {
  close: {
    transform: "translateX(0)",
  },
  spreadLeftD: {
    transform: "translateX(10.5px)",
  },
  spreadRightD: {
    transform: "translateX(-10.5px)",
  },
  spreadLeftM: {
    transform: "translateX(8px)",
  },
  spreadRightM: {
    transform: "translateX(-8px)",
  },
};

export default {
  OPACITY_VARIANT,
  EXPAND_VARIANT,
  EXPAND_VARIANT_NO_DELAY,
  SLIDE_DOWN_50_VARIANT,
  SLIDE_LEFT_50_VARIANT,
  SLIDE_LEFT_FULL_VARIANT,
  SLIDE_RIGHT_FULL_VARIANT,
  SLIDE_RESIZE_VARIANT,
  HOVERED_SCALE_10,
  HOVERED_OPACITY_40,
  DYNAMIC_SLIDE_UP_ITEMS_80,
  STAGGERED_UPWARD_OPACITY_REVEAL,
  SLIDE_UPWARD_REVEAL_DELAY_05,
  SLIDE_LEFT_REVEAL,
  SLIDE_STAGGER_UPWARD_DELAY_1,
  SLIDE_UPWARD_DELAY_1,
  SLIDE_UPWARD_40,
  SLIDE_UPWARD_300,
  SLIDE_HORIZONTAL_FADE_IN_OUT,
  SLIDE_UPWARD_60_DELAY_1,
  DOT_SPREAD_OUT_SMALL,
  DOT_SPREAD_OUT_LARGE,
  SLIDE_UPWARD_30_REVEAL,
  SLIDE_UPWARD_20_REVEAL,
};
