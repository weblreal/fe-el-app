import type { NextApiRequest, NextApiResponse } from "next";
import { cmsRepo } from "../../logic/graphql/CMSRepo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const locale: string = req?.query?.locale as string;
  const path: string = req?.query?.path as string;

  if (!locale) res.status(200).json({});

  const genericSettings = await cmsRepo.getCMSSettings(`el-${locale}${path}`, [
    "Annoucement",
    "List",
    "SuperHeader",
    "FilterMostRecentMapping",
    "FiltersContainer",
  ]);

  res.status(200).json(genericSettings);
}
