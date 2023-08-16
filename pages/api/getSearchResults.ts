import type { NextApiRequest, NextApiResponse } from "next";
import { cmsRepo } from "../../logic/graphql/CMSRepo";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  return new Promise((resolve: any, reject: any) => {
    const search: any = req?.query?.search;
    const localeId: any = req?.query?.localeId;

    if (search && localeId) {
      cmsRepo
        .getSearchResults(localeId, search)
        .then((response: any) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.setHeader("Cache-Control", "max-age=180000");
          res.end(JSON.stringify(response));
          resolve();
        })
        .catch((error) => {
          res.json(error);
          res.status(405).end();
          resolve();
        });
    } else {
      res.status(404).json(null);
    }
  });
}
