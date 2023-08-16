import { NextApiRequest, NextApiResponse } from "next";
import { jsonToLayoutAdapter } from "../../adapters/JsonToLayoutAdapter";
import { cmsRepo } from "../../logic/graphql/CMSRepo";

export default async function fetchMockData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { locale } = req.query;

  const placementData = await cmsRepo.getLayoutData("el-" + locale, "/");
  const jsonTolayoutData = jsonToLayoutAdapter.adapt(placementData);

  const widgets = jsonTolayoutData?.widgets?.filter(
    (widget: any) =>
      widget.widgetName === "Navigation" || widget.widgetName === "Footer"
  );

  res.status(200).json({
    ...jsonTolayoutData,
    widgets: [
      widgets?.[0],
      { widgetName: "NotFound", widgetContainerId: 10 },
      widgets?.[1],
    ],
  });
}
