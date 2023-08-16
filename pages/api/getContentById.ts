import type { NextApiRequest, NextApiResponse } from "next";
import { cmsRepo } from "../../logic/graphql/CMSRepo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const id: any = req?.query?.id;

  if (id) {
    const content = await cmsRepo.getContentById(id);

    res.status(200).json(
      {
        content: content?.data?.content?.content,
        placements: content?.data?.content?.page,
      } || null
    );
  } else {
    res.status(404).json(null);
  }
}
