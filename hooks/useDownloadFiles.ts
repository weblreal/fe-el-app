import { getAkamayUrl } from "../logic/utilities";
import { useState } from "react";
import axios from "axios";

const useDownloadFiles = (
  fileUrls: { url: string; fileName: string; type?: string }[]
): [isDownloading: boolean, startDownload: () => void] => {
  // Hooks
  const [isDownloading, setIsDownloading] = useState(false);

  // Functions
  const startDownload = () => {
    const filteredUrls = fileUrls?.filter((file) => file?.url);
    const download = async () => {
      // Start
      setIsDownloading(true);
      const promises = filteredUrls.map(async (url) => {
        const response = await axios.get(url?.url, {
          responseType: "blob",
        });

        const blob = new Blob([response.data], {
          type: url?.type || "application/octet-stream",
        });

        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = url?.fileName || url?.url?.split("/")?.pop() || "";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
      await Promise.all(promises);

      // End
      setIsDownloading(false);
    };

    if (filteredUrls?.length > 0) {
      download();
    }
  };

  return [isDownloading, startDownload];
};

export default useDownloadFiles;
