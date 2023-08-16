// Components
import LinkAngle from "../UI/LinkAngle/LinkAngle";

type IPressReleaseDownloadLinkProps = {
  label?: string;
  size?: number;
  isDownloading?: boolean;
  url: string;
  id?: string | number;
  fileName?: string;
};

const PressReleaseDownloadLink: React.FC<IPressReleaseDownloadLinkProps> = ({
  label,
  size,
  id,
  url,
  fileName,
}) => {
  // Hooks
  const fileSize = size ? `(${Math.round(size / 10000) / 100} MB)` : "";
  return (
    <LinkAngle
      iconType="download"
      gap={1}
      color="#1890ff"
      label={`${label} ${fileSize}`}
      url={id ? `cap/content/${id}/` : url}
      iconVerticalAlign="sub"
      isExternal
    />
  );
};
export default PressReleaseDownloadLink;
