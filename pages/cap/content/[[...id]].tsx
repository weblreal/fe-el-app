import axios from "axios";
import type { GetServerSideProps } from "next";
import { PDFDocument } from "pdf-lib";
import { cmsRepo } from "../../../logic/graphql/CMSRepo";
import { elSegmentRemoval, getAkamayUrl } from "../../../logic/utilities";

const PdfPage = () => {
  return <></>;
};

export default PdfPage;

export const getServerSideProps: GetServerSideProps = async ({
  res,
  params,
  query,
}) => {
  const id = params?.id?.[0] as string;
  const download = query?.download;

  try {
    if (id) {
      const { data } = await cmsRepo.getFileLink(id);
      const rawData = data?.content?.content;

      const pdf = {
        url: rawData?.data?.uri,
        filename: rawData?.filename,
        type: rawData?.data?.contentType,
      };

      // EXT Link
      if (!pdf?.url) {
        const url = elSegmentRemoval(rawData?.navigationPath?.map((link: any) => link?.segment)?.join("/"));

        return {
          props: {},
          redirect: {
            destination: url ? `/${url}` : "/",
          },
        };
      }

      const splittedFilename = pdf.filename?.split(".");
      const formattedFilename = `${splittedFilename?.[0]?.replace(/[^a-zA-Z0-9_-\s]/g, "")}.${splittedFilename?.[1]}`;

      res.setHeader("content-disposition", `${download == "true" ? "attachment" : "inline"}; filename="${formattedFilename}";`);
      res.setHeader("content-type", pdf?.type);

      const extpdf = await axios.get(getAkamayUrl(pdf.url), {
        responseType: "arraybuffer",
      });

      if (pdf.type === "application/pdf") {
        const buffer = Buffer.from(extpdf.data);
        const pdfDoc = await PDFDocument.load(buffer);
        pdfDoc.setTitle(pdf.filename);
        const modifiedPDF = await pdfDoc.save();
        res.write(modifiedPDF);
      } else {
        res.write(extpdf.data);
      }
      
      res.end();
    }
  } catch (_) {
    res.end();
  }
  return { props: {} };
};
