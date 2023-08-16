import styled from "styled-components";
import useGetTheme from "../../../hooks/useGetTheme";
import { IIcon, ISvg } from "../../../models/components/IIcon";

const Icon = ({
  type,
  color,
  size = 50,
  className,
  onClick,
  onMouseLeave,
}: IIcon) => {
  // Hooks
  const theme = useGetTheme();
  const parentColor = color?.split(".")?.[0];
  const parentColorVariant = color?.split(".")?.[1];
  const selectedThemeColor =
    parentColor && parentColorVariant
      ? theme?.colors?.[parentColor]?.[parentColorVariant]
      : null;

  // Functions
  const renderIcon = () => {
    switch (type) {
      case "arrow-down":
        return (
          <ArrowDown
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "angle-down":
        return (
          <AngleDown
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "essilor-dot":
        return (
          <EssilorDot
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "angle-left":
        return (
          <AngleLeft
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "angle-right":
        return (
          <AngleRight
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "angle-right-b":
        return (
          <AngleRightB
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "angle-up":
        return (
          <AngleUp
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "arrow-left":
        return (
          <ArrowLeft
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "arrow-right":
        return (
          <ArrowRight
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "calendar":
        return (
          <Calendar
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "check":
        return (
          <Check
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "clock":
        return (
          <Clock
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "close":
        return (
          <Close
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "copy":
        return (
          <Copy
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "download":
        return (
          <Download
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "alert":
        return (
          <Alert
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "file":
        return (
          <File
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "filter":
        return (
          <Filter
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "pause":
        return (
          <Pause
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "player":
        return (
          <Player
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "player2":
        return (
          <PlayerThin
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "search":
        return (
          <Search
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "upload":
        return (
          <Upload
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "external-link":
        return (
          <ExternalLink
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "linkedin":
        return (
          <LinkedIn
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "facebook":
        return (
          <Facebook
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "twitter":
        return (
          <Twitter
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "instagram":
        return (
          <Instagram
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "mail":
        return (
          <Mail
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "plus":
        return (
          <Plus
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "checkboxchecked":
        return (
          <CheckboxChecked
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "checkboxempty":
        return (
          <CheckboxEmpty
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "cancel":
        return (
          <Cancel
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "announcement":
        return (
          <Announcement
            color={selectedThemeColor || color}
            size={size}
            className={className}
          />
        );
      case "infotip":
        return (
          <Infotip
            color={selectedThemeColor || color}
            size={size}
            className={className}
            onClick={onClick}
            onMouseLeave={onMouseLeave}
          />
        );
      default:
        return null;
    }
  };

  return renderIcon();
};

const SVG = styled.svg`
  user-select: none;

  * {
    fill: ${({ fill, theme }) => (fill ? fill : theme.colors.text)};
  }

  .stroke {
    stroke: ${({ fill, theme }) => (fill ? fill : theme.colors.text)};
  }
`;

const ArrowDown = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width="20.017"
      height="20"
      viewBox="0 0 20.017 20"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
    >
      <path
        id="Path_9"
        d="M29.517,19.317a1.668,1.668,0,0,0-2.367,0l-5.483,5.5V12.167a1.667,1.667,0,1,0-3.334,0v12.65l-5.483-5.5a1.673,1.673,0,1,0-2.367,2.366l8.334,8.334a1.68,1.68,0,0,0,.55.35,1.568,1.568,0,0,0,1.266,0,1.68,1.68,0,0,0,.55-.35l8.334-8.334a1.665,1.665,0,0,0,0-2.366Z"
        transform="translate(-9.993 -10.5)"
        fill={color}
      />
    </SVG>
  );
};

const AngleDown = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m18.177 9.963-5.59 5.062a.51.51 0 0 1-.738 0L6.19 9.963a.523.523 0 0 1-.035-.774.523.523 0 0 1 .774-.035l5.273 4.711 5.238-4.71a.523.523 0 0 1 .774.034c.21.211.21.563-.036.774z"
        fill={color}
      />
    </SVG>
  );
};

const AngleLeft = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width="6.184"
      height="12.337"
      viewBox="0 0 6.184 12.337"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
    >
      <path
        id="i_angle-left-regular"
        d="M15.03,17.41a.548.548,0,1,1-.809.738L9.158,12.523a.51.51,0,0,1,0-.739l5.063-5.59a.557.557,0,0,1,.773-.07.565.565,0,0,1,.035.809l-4.71,5.2,4.71,5.273Z"
        transform="translate(-9 -6)"
        fill={color}
      />
    </SVG>
  );
};

const AngleRight = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      width="32"
      height="32"
      viewBox="0 0 32 32"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m20.034 16.737-6.75 7.5a.697.697 0 0 1-1.032.047.698.698 0 0 1-.047-1.032l6.282-7.031-6.282-6.984a.698.698 0 0 1 .047-1.032.697.697 0 0 1 1.031.047l6.75 7.453c.282.329.282.75 0 1.032z"
        fill={color}
      />
    </SVG>
  );
};

const AngleRightB = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
      fill={color}
    >
      <path
        d="M15.54 11.29 9.88 5.64a1 1 0 1 0-1.42 1.41l4.95 5L8.46 17a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.3.999.999 0 0 0 .71-.3l5.66-5.65a1 1 0 0 0 0-1.47z"
        fill={color}
      />
    </SVG>
  );
};

const AngleUp = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.213 14.994a.523.523 0 0 1-.774.035l-5.238-4.71-5.274 4.71a.523.523 0 0 1-.773-.035c-.21-.21-.21-.598.035-.773l5.59-5.063a.51.51 0 0 1 .738 0l5.59 5.063a.484.484 0 0 1 .106.773z"
        fill={color}
      />
    </SVG>
  );
};

const ArrowLeft = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width="15.768"
      height="13.479"
      viewBox="0 0 15.768 13.479"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
    >
      <path
        id="i_arrow-left"
        d="M19.768,11.728a.586.586,0,0,1-.6.563H5.916l4.922,5.273a.545.545,0,0,1-.422.914.473.473,0,0,1-.422-.176L4.158,12.115a.51.51,0,0,1,0-.738L9.994,5.189a.563.563,0,0,1,.809-.035.524.524,0,0,1,.035.774L5.916,11.166H19.17a.611.611,0,0,1,.6.562Z"
        transform="translate(-4 -5)"
        fill={color}
      />
    </SVG>
  );
};

<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="m19.574 12.115-5.836 6.187c-.105.141-.281.176-.422.176a.529.529 0 0 1-.386-.14.523.523 0 0 1-.035-.774l4.921-5.273H4.563c-.317 0-.563-.246-.563-.528 0-.28.246-.597.563-.597h13.253l-4.921-5.239a.523.523 0 0 1 .035-.773c.246-.21.597-.21.808.035l5.836 6.188a.51.51 0 0 1 0 .738z"
    fill="#000"
  />
</svg>;

const ArrowRight = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
    >
      <path
        id="i_arrow-right"
        d="m19.574 12.115-5.836 6.187c-.105.141-.281.176-.422.176a.529.529 0 0 1-.386-.14.523.523 0 0 1-.035-.774l4.921-5.273H4.563c-.317 0-.563-.246-.563-.528 0-.28.246-.597.563-.597h13.253l-4.921-5.239a.523.523 0 0 1 .035-.773c.246-.21.597-.21.808.035l5.836 6.188a.51.51 0 0 1 0 .738z"
        fill={color}
      />
    </SVG>
  );
};

const Calendar = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.938 3c.28 0 .562.281.562.563V5.25h6.75V3.562c0-.28.246-.562.563-.562.28 0 .562.281.562.563V5.25H17.5c1.23 0 2.25 1.02 2.25 2.25v11.25c0 1.266-1.02 2.25-2.25 2.25H6.25A2.221 2.221 0 0 1 4 18.75V7.5c0-1.23.984-2.25 2.25-2.25h1.125V3.562c0-.28.246-.562.563-.562zm10.687 6.75h-13.5v9a1.11 1.11 0 0 0 1.125 1.125H17.5c.598 0 1.125-.492 1.125-1.125v-9zM17.5 6.375H6.25c-.633 0-1.125.527-1.125 1.125v1.125h13.5V7.5c0-.598-.527-1.125-1.125-1.125z"
        fill={color}
      />
    </SVG>
  );
};

const Check = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width="15.75"
      height="10.686"
      viewBox="0 0 15.75 10.686"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
    >
      <path
        id="i_check"
        d="M19.592,7.158a.6.6,0,0,1,0,.809l-9.563,9.562a.6.6,0,0,1-.808,0L4.158,12.467a.572.572,0,0,1,.809-.809l4.676,4.676,9.14-9.176a.6.6,0,0,1,.809,0Z"
        transform="translate(-4 -7)"
        fill={color}
      />
    </SVG>
  );
};

const Clock = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
    >
      <path
        id="i_clock"
        d="M11.438,6.938A.578.578,0,0,1,12,6.375a.605.605,0,0,1,.563.563v4.78l3.093,2.075a.561.561,0,0,1-.6.949l-3.375-2.25A.561.561,0,0,1,11.4,12l.036-5.063ZM12,3a9,9,0,1,1-9,9A9.017,9.017,0,0,1,12,3ZM4.125,12A7.875,7.875,0,1,0,12,4.125,7.862,7.862,0,0,0,4.125,12Z"
        transform="translate(-3 -3)"
        fill={color}
      />
    </SVG>
  );
};

const Close = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      width="24"
      height="25"
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
    >
      <path
        d="M17.092 17.592a.596.596 0 0 1-.809 0l-4.64-4.676-4.676 4.676a.596.596 0 0 1-.809 0 .596.596 0 0 1 0-.809l4.676-4.676-4.676-4.64a.596.596 0 0 1 0-.809c.211-.21.598-.21.809 0l4.676 4.676 4.64-4.676c.211-.21.598-.21.809 0 .21.211.21.598 0 .809l-4.676 4.64 4.676 4.676c.21.211.21.598 0 .809z"
        fill={color}
      />
    </SVG>
  );
};

const Copy = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width="18.035"
      height="18"
      viewBox="0 0 18.035 18"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
    >
      <path
        id="i_copy"
        d="M12.6,17.625a.578.578,0,0,0-.563.563v.562a1.132,1.132,0,0,1-1.125,1.125H5.285A1.11,1.11,0,0,1,4.16,18.75v-9A1.132,1.132,0,0,1,5.285,8.625H9.223a.578.578,0,0,0,.562-.563A.605.605,0,0,0,9.223,7.5H5.25A2.266,2.266,0,0,0,3,9.75l.035,9A2.221,2.221,0,0,0,5.285,21H10.91a2.243,2.243,0,0,0,2.25-2.25v-.563A.605.605,0,0,0,12.6,17.625ZM20.684,6.059,17.977,3.352A1.145,1.145,0,0,0,17.168,3H13.16a2.243,2.243,0,0,0-2.25,2.25v9a2.221,2.221,0,0,0,2.25,2.25h5.625a2.243,2.243,0,0,0,2.25-2.25V6.867A1.143,1.143,0,0,0,20.684,6.059ZM17.66,4.617l1.758,1.758H17.66Zm2.25,9.633a1.132,1.132,0,0,1-1.125,1.125H13.16a1.11,1.11,0,0,1-1.125-1.125v-9A1.132,1.132,0,0,1,13.16,4.125h3.375v2.25A1.11,1.11,0,0,0,17.66,7.5h2.25Z"
        transform="translate(-3 -3)"
        fill={color}
      />
    </SVG>
  );
};

const Download = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      width="25"
      height="24"
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
    >
      <path
        d="M12.375 15.625c.14 0 .281-.035.387-.14l5.062-5.063a.596.596 0 0 0 0-.809.596.596 0 0 0-.808 0l-4.078 4.114V3.812c0-.28-.282-.562-.563-.562a.578.578 0 0 0-.563.563v9.914L7.7 9.613a.596.596 0 0 0-.808 0 .596.596 0 0 0 0 .809l5.062 5.062c.106.106.246.141.422.141zm7.875 2.813v-3.375c0-.282-.281-.563-.563-.563a.578.578 0 0 0-.562.563v3.374c0 .95-.773 1.688-1.688 1.688H7.313c-.949 0-1.687-.738-1.687-1.688v-3.375c0-.28-.281-.562-.563-.562a.578.578 0 0 0-.562.563v3.374a2.777 2.777 0 0 0 2.813 2.813h10.125a2.798 2.798 0 0 0 2.812-2.813z"
        fill={color}
      />
    </SVG>
  );
};

const Alert = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width="18.001"
      height="15.75"
      viewBox="0 0 18.001 15.75"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
    >
      <path
        id="i_error"
        d="M12.018,15.531a.844.844,0,1,0,0,1.688.845.845,0,0,0,0-1.688Zm0-1.406a.549.549,0,0,0,.527-.563V8.5a.545.545,0,1,0-1.09,0v5.063A.555.555,0,0,0,12.018,14.125Zm8.718,2.742L13.706,4.984A2.045,2.045,0,0,0,12.018,4a1.98,1.98,0,0,0-1.723.984L3.264,16.867a1.84,1.84,0,0,0,0,1.9,1.909,1.909,0,0,0,1.722.984H19.05a1.893,1.893,0,0,0,1.687-.984,1.84,1.84,0,0,0,0-1.9ZM19.752,18.2a.789.789,0,0,1-.738.422H4.986a.788.788,0,0,1-.738-.422.69.69,0,0,1,0-.773L11.28,5.547a.857.857,0,0,1,.739-.422s-.036,0,0,0a.935.935,0,0,1,.7.422L19.753,17.43a.69.69,0,0,1,0,.773Z"
        transform="translate(-3 -4)"
        fill={color}
      />
    </SVG>
  );
};

const File = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width="13.5"
      height="18"
      viewBox="0 0 13.5 18"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
    >
      <path
        id="i_file"
        d="M5,5.5A2.243,2.243,0,0,1,7.25,3.25h5.484a1.773,1.773,0,0,1,1.2.527L17.973,7.82a1.779,1.779,0,0,1,.527,1.2V19a2.243,2.243,0,0,1-2.25,2.25h-9A2.221,2.221,0,0,1,5,19ZM17.375,10H13.437A1.666,1.666,0,0,1,11.75,8.312V4.376H7.25A1.132,1.132,0,0,0,6.125,5.5V19A1.11,1.11,0,0,0,7.25,20.125h9A1.132,1.132,0,0,0,17.375,19ZM17.2,8.629,13.121,4.55a.858.858,0,0,0-.246-.14v3.9a.555.555,0,0,0,.563.562h3.9a.882.882,0,0,0-.14-.246Z"
        transform="translate(-5 -3.25)"
        fill={color}
      />
    </SVG>
  );
};

const Filter = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="15.75"
      viewBox="0 0 18 15.75"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
    >
      <path
        id="i_filter"
        d="M3,5.406A1.381,1.381,0,0,1,4.371,4H19.594A1.41,1.41,0,0,1,21,5.406a1.385,1.385,0,0,1-.352.88l-6.4,7.769V18.59a1.2,1.2,0,0,1-1.195,1.16,1.1,1.1,0,0,1-.739-.246l-2.144-1.652a1.067,1.067,0,0,1-.422-.88V14.055L3.316,6.285A1.35,1.35,0,0,1,3,5.406Zm1.371-.281a.272.272,0,0,0-.246.281.319.319,0,0,0,.035.176l6.574,7.91a.748.748,0,0,1,.141.352v3.129l2.11,1.652h.07c.035,0,.07,0,.07-.035V13.844a.682.682,0,0,1,.1-.352L19.8,5.582c.035-.07.07-.105.07-.176a.3.3,0,0,0-.281-.281H4.37Z"
        transform="translate(-3 -4)"
        fill={color}
      />
    </SVG>
  );
};

const Player = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
    >
      <path
        id="i_player-video"
        d="M15.516,11.3a.843.843,0,0,1,.421.7.857.857,0,0,1-.421.738l-5.063,3.094a.811.811,0,0,1-.844,0,.79.79,0,0,1-.421-.738V8.906a.773.773,0,0,1,.421-.7.74.74,0,0,1,.844,0L15.516,11.3Zm-5.2-1.863V14.6l4.22-2.6ZM3,12a9,9,0,1,1,9,9A8.995,8.995,0,0,1,3,12Zm9,7.875a7.862,7.862,0,1,0-5.572-2.3A7.885,7.885,0,0,0,12,19.875Z"
        transform="translate(-3 -3)"
        fill={color}
      />
    </SVG>
  );
};

const PlayerThin = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#zouhxvvlpa)" stroke={color}>
        <path
          clipRule="evenodd"
          d="M20 1.177a18.823 18.823 0 1 1 0 37.647 18.823 18.823 0 0 1 0-37.647v0z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 14.907v10.186a.5.5 0 0 0 .767.423l8.064-5.093a.5.5 0 0 0 0-.846l-8.064-5.093a.5.5 0 0 0-.767.423z"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="zouhxvvlpa">
          <path fill={color} d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
    </SVG>
  );
};

const Pause = ({ className, color, size }: ISvg) => {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#pbx75xs5fa)" clipRule="evenodd">
        <path
          d="M28 1.647a26.353 26.353 0 1 1 0 52.706 26.353 26.353 0 0 1 0-52.706v0z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          d="M32.941 18.611a1.318 1.318 0 0 1 1.318 1.318v15.812a1.318 1.318 0 1 1-2.636 0V19.929a1.318 1.318 0 0 1 1.318-1.318zM23.059 18.611a1.318 1.318 0 0 1 1.317 1.318v15.812a1.318 1.318 0 1 1-2.635 0V19.929a1.318 1.318 0 0 1 1.318-1.318z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="pbx75xs5fa">
          <path fill={color} d="M0 0h56v56H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Search = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill={color}
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m27.766 26.734-6.657-6.609c1.5-1.734 2.344-3.938 2.344-6.375 0-5.344-4.406-9.75-9.75-9.75C8.313 4 4 8.406 4 13.75c0 5.39 4.36 9.75 9.703 9.75 2.39 0 4.594-.844 6.328-2.344l6.61 6.657c.187.14.375.187.609.187.188 0 .375-.047.516-.188.28-.28.28-.796 0-1.078zM13.75 22a8.232 8.232 0 0 1-8.25-8.25 8.232 8.232 0 0 1 8.25-8.25c4.547 0 8.25 3.703 8.25 8.25A8.232 8.232 0 0 1 13.75 22z"
        fill={color}
      />
    </SVG>
  );
};

const Upload = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
    >
      <path
        d="M19.75 18.438v-3.375c0-.282-.281-.563-.563-.563a.578.578 0 0 0-.562.563v3.374c0 .95-.773 1.688-1.688 1.688H6.813c-.949 0-1.687-.738-1.687-1.688v-3.375c0-.28-.281-.562-.563-.562a.578.578 0 0 0-.562.563v3.374a2.777 2.777 0 0 0 2.813 2.813h10.125a2.798 2.798 0 0 0 2.812-2.813z"
        fill={color}
      />
      <path
        d="M11.453 3.39a.529.529 0 0 1 .387-.14c.176 0 .316.035.422.14l5.062 5.063a.596.596 0 0 1 0 .809.596.596 0 0 1-.808 0l-4.114-4.114v9.915a.578.578 0 0 1-.562.562c-.281 0-.563-.281-.563-.563V5.149L7.2 9.262a.596.596 0 0 1-.808 0 .596.596 0 0 1 0-.809l5.062-5.062z"
        fill={color}
      />
    </SVG>
  );
};

const ExternalLink = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 18 18 5m0 0H9m9 0v8" stroke={color} />
    </SVG>
  );
};

const EssilorDot = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
      fill={color}
    >
      <circle
        id="Ellipse_1"
        data-name="Ellipse 1"
        cx="25"
        cy="25"
        r="25"
        fill={color}
      />
    </SVG>
  );
};

const LinkedIn = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
      fill={color}
    >
      <g clipPath="url(#a52zkrjcla)" fill={color}>
        <path d="M22 0H2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm1 22c0 .552-.448 1-1 1H2c-.552 0-1-.448-1-1V2c0-.552.448-1 1-1h20c.552 0 1 .448 1 1v20z" />
        <path d="M7.918 10.483H4.957v9.522h2.96v-9.522zM6.438 5.75a1.715 1.715 0 1 0 0 3.43 1.715 1.715 0 0 0 0-3.43zM15.454 10.246c-1.44 0-2.405.79-2.8 1.538h-.04v-1.3h-2.84v9.521h2.958v-4.71c0-1.242.236-2.445 1.775-2.445 1.517 0 1.538 1.42 1.538 2.525v4.63h2.956v-5.222c0-2.565-.553-4.537-3.547-4.537z" />
      </g>
      <defs>
        <clipPath id="a52zkrjcla">
          <path fill={color} d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </SVG>
  );
};

const Facebook = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
      fill={color}
    >
      <g clipPath="url(#bfh41yez8a)" fill={color}>
        <path d="M10.726 8.82v1.573H8.884v2.133h1.842V18h2.203v-5.473h1.837l.275-2.134H12.93V9.031c0-.617.171-1.039 1.057-1.039h1.13V6.084A15.09 15.09 0 0 0 13.47 6c-1.63 0-2.744.994-2.744 2.82z" />
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 23C5.934 23 1 18.066 1 12S5.934 1 12 1s11 4.934 11 11-4.934 11-11 11z" />
      </g>
      <defs>
        <clipPath id="bfh41yez8a">
          <path fill={color} d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </SVG>
  );
};

const Twitter = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
      fill={color}
    >
      <g clipPath="url(#ican40mp5a)" fill={color}>
        <path d="M17.231 7.667c-.439.26-.925.449-1.442.551a2.272 2.272 0 0 0-3.873 2.072 6.45 6.45 0 0 1-4.683-2.374 2.27 2.27 0 0 0 .704 3.033 2.26 2.26 0 0 1-1.03-.284v.029c0 1.1.784 2.019 1.823 2.227a2.276 2.276 0 0 1-1.026.04 2.275 2.275 0 0 0 2.123 1.578 4.558 4.558 0 0 1-3.364.94A6.431 6.431 0 0 0 9.945 16.5c4.18 0 6.465-3.462 6.465-6.464a6.34 6.34 0 0 0-.007-.294c.444-.32.83-.721 1.134-1.177a4.53 4.53 0 0 1-1.305.358 2.28 2.28 0 0 0 1-1.256z" />
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 23C5.934 23 1 18.066 1 12S5.934 1 12 1s11 4.934 11 11-4.934 11-11 11z" />
      </g>
      <defs>
        <clipPath id="ican40mp5a">
          <path fill={color} d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </SVG>
  );
};

const Instagram = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
      fill={color}
    >
      <g clipPath="url(#zdqydrhnma)" fill={color}>
        <path d="M18.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 11c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
        <path d="M16.887 0H7.113A7.113 7.113 0 0 0 0 7.113v9.774A7.113 7.113 0 0 0 7.113 24h9.774A7.113 7.113 0 0 0 24 16.887V7.113A7.113 7.113 0 0 0 16.887 0zM23 16.887A6.12 6.12 0 0 1 16.887 23H7.113A6.12 6.12 0 0 1 1 16.887V7.113A6.12 6.12 0 0 1 7.113 1h9.774A6.12 6.12 0 0 1 23 7.113v9.774z" />
      </g>
      <defs>
        <clipPath id="zdqydrhnma">
          <path fill={color} d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </SVG>
  );
};

const Mail = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      width="25"
      height="24"
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
      fill={color}
    >
      <g clipPath="url(#d49pu8o4ga)">
        <path
          d="M23.5 3h-22a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-.503 1-10.165 9.036a.5.5 0 0 1-.665 0L2.003 4h20.995zM1.5 20V4.892l10.004 8.892a1.498 1.498 0 0 0 1.992 0L23.5 4.89V20h-22z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="d49pu8o4ga">
          <path fill="#fff" transform="translate(.5)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </SVG>
  );
};

const Plus = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      width="24"
      height="25"
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: `${size}px`, height: "auto" }}
      className={className || ""}
      fill={color}
    >
      <path
        d="M19.625 12.777a.578.578 0 0 1-.563.563h-6.187v6.187c0 .317-.281.598-.563.598-.316 0-.562-.281-.562-.598V13.34H5.562c-.316 0-.562-.246-.562-.527 0-.317.246-.598.563-.598h6.187V6.027c0-.28.246-.527.563-.527.28 0 .562.246.562.527v6.188h6.188c.28 0 .562.281.562.562z"
        fill={color}
      />
    </SVG>
  );
};

const CheckboxChecked = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      style={{
        width: `${size}px`,
        height: "auto",
        backgroundColor: "white",
        borderRadius: "4px",
      }}
      className={className || ""}
      fill={color}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m12.118 5.159.008.008.008.007a.168.168 0 0 1 .04.19.168.168 0 0 1-.04.055l-.007.007-.007.007-5.44 5.44-.002.002a.168.168 0 0 1-.054.036l.192.462-.192-.462a.168.168 0 0 1-.128 0l-.192.462.192-.462a.168.168 0 0 1-.054-.037l-.002-.001-2.56-2.56-.006-.006a.181.181 0 0 1-.043-.197l-.465-.183.465.183a.181.181 0 0 1 .293-.066l2.082 2.089.354.355.354-.355L11.88 5.16l.002-.001a.167.167 0 0 1 .236 0z"
        fill="#fff"
        stroke="#000"
      />
    </SVG>
  );
};

const CheckboxEmpty = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      style={{
        width: `${size}px`,
        height: "auto",
        backgroundColor: "white",
        borderRadius: "4px",
      }}
      className={className || ""}
      fill={color}
    >
      <path xmlns="http://www.w3.org/2000/svg" fill="#fff" stroke="#000" />
    </SVG>
  );
};
const Cancel = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: `${size}px`,
        height: "auto",
        borderRadius: "4px",
      }}
      className={className || ""}
      fill={color}
    >
      <path
        d="M3 12c0-4.957 4.008-9 9-9 4.957 0 9 4.043 9 9 0 4.992-4.043 9-9 9-4.992 0-9-4.008-9-9zm6.152-1.652L10.805 12l-1.653 1.652c-.351.352-.351.88 0 1.196a.77.77 0 0 0 1.16 0l1.653-1.653 1.687 1.653a.77.77 0 0 0 1.16 0c.352-.317.352-.844 0-1.196L13.16 12l1.652-1.652c.352-.317.352-.844 0-1.196a.828.828 0 0 0-1.16 0l-1.687 1.688-1.652-1.688a.828.828 0 0 0-1.16 0c-.352.352-.352.88 0 1.196z"
        fill={color}
        fillOpacity=".5"
      />
    </SVG>
  );
};

const Announcement = ({ className, color, size }: ISvg) => {
  return (
    <SVG
      width="40"
      height="40"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: `${size}px`,
        height: "auto",
        borderRadius: "4px",
      }}
      className={className || ""}
      fill={color}
    >
      <path
        d="M35 9.167v21.667c0 .468-.417.833-.833.833a.823.823 0 0 1-.834-.834v-.572l-10.156-2.552a4.918 4.918 0 0 1-4.844 3.958c-2.812 0-5-2.24-5-5 0-.469.052-.938.157-1.354l-6.823-1.72v.574c0 .469-.417.833-.834.833A.823.823 0 0 1 5 24.167v-8.334c0-.416.365-.833.833-.833.417 0 .834.417.834.834v.625l26.666-6.667v-.625c0-.417.365-.833.834-.833.416 0 .833.416.833.833zm-1.667 19.375V11.51L6.667 18.177v3.698l26.666 6.667zm-15 1.458c1.615 0 2.97-1.146 3.23-2.656l-6.459-1.615c-.104.313-.104.625-.104.938C15 28.542 16.458 30 18.333 30z"
        fill={color}
      />
    </SVG>
  );
};

const Infotip = ({ className, color, size, onClick, onMouseLeave }: ISvg) => {
  return (
    <SVG
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      xmlns="http://www.w3.org/2000/svg"
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      style={{ width: `${size}px`, height: "auto", cursor: "pointer" }}
      className={className || ""}
    >
      <g stroke="none" strokeWidth="1" fill={color} fillRule="evenodd">
        <g fill="none">
          <path d="M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z M20.1428657,20.8571403 C20.1428657,20.4665148 19.8192046,20.1428537 19.4285791,20.1428537 L18.7142925,20.1428537 L18.7142925,13.7142746 C18.7142925,13.3236492 18.3906314,12.9999881 18.000006,12.9999881 L13.7142866,12.9999881 C13.3236611,12.9999881 13,13.3236492 13,13.7142746 L13,15.1428478 C13,15.5334732 13.3236611,15.8571343 13.7142866,15.8571343 L14.4285731,15.8571343 L14.4285731,20.1428537 L13.7142866,20.1428537 C13.3236611,20.1428537 13,20.4665148 13,20.8571403 L13,22.2857134 C13,22.6763389 13.3236611,23 13.7142866,23 L19.4285791,23 C19.8192046,23 20.1428657,22.6763389 20.1428657,22.2857134 L20.1428657,20.8571403 Z M18.7142925,7.99998212 C18.7142925,7.60935665 18.3906314,7.28569555 18.000006,7.28569555 L15.1428597,7.28569555 C14.7522342,7.28569555 14.4285731,7.60935665 14.4285731,7.99998212 L14.4285731,10.1428418 C14.4285731,10.5334673 14.7522342,10.8571284 15.1428597,10.8571284 L18.000006,10.8571284 C18.3906314,10.8571284 18.7142925,10.5334673 18.7142925,10.1428418 L18.7142925,7.99998212 Z"></path>
        </g>
      </g>
    </SVG>
  );
};

export default Icon;
