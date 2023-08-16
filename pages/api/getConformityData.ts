import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function fetchMockData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { input } = req.query;

  try {
    const { data } = await axios.get(
      `https://loplmsto01.blob.core.windows.net/docs/${input || ""}.json`
    );

    if (data) {
      res.status(200).json(data);
    }
  } catch (_) {
    res.status(404);
    res.end();
  }
}
