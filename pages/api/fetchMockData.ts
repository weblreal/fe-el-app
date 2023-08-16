import { NextApiRequest, NextApiResponse } from "next";

export default async function fetchMockData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let data = null;

  await fetch(`http://${req.headers.host}/mock.json`)
    .then((res) => res.json())
    .then((res) => (data = res));

  res.status(200).json(data);
}
