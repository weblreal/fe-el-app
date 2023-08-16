import type { NextApiRequest, NextApiResponse } from "next";
import { StaticPathsAdapter } from "../../adapters/staticPathsAdapter";
import { cmsRepo } from "../../logic/graphql/CMSRepo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const adapter = new StaticPathsAdapter();

  const cmsPathIds = await cmsRepo.getPathsId();
  const pathIdArr = cmsPathIds?.data?.content?.sites?.map(
    (site: any) => site.id
  );

  const pathList = cmsPathIds?.data?.content?.sites?.map((site: any) => ({
    id: site?.id || "",
    locale: site?.locale || "",
    modificationDate: site?.modificationDate || "",
    hiddenInSitemap: site?.hiddenInSitemap || false,
  }));

  let paths: any[] = [];

  for (const elem of pathIdArr) {
    const res = await cmsRepo.getPathsData(elem);
    const adaptedRes = adapter.adapt(res);
    paths.push(...adaptedRes);
  }

  res.status(200).json({ pathIds: pathList, slugList: paths });
}
