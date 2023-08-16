import type { NextApiRequest, NextApiResponse } from "next";
import { cmsRepo } from "../../logic/graphql/CMSRepo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const path: any = req.query?.path;

  if (!path) res.status(404);

  const cmsPathIds = await cmsRepo.getRelatedPaths(path);

  res.status(200).json(cmsPathIds);
}
