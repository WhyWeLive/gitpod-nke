import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  phrase: string;
};

const phrases: {
  [key: string]: string;
} = {
  "4bd20219-672f-4c87-bfcf-b7a967a81b0d": "It's",
  "3a6885df-1602-48d3-b709-fba2993631a3": "Just",
  "e361dd65-8541-46a6-a340-15d9bfafda5f": "Testing",
  "c94d2bff-5ef3-4115-8083-7c05b6faae84": "The",
  "284f37ec-cf1b-43ee-b8fc-6480c3fd5e24": "Thinkg",
  "14047676-8047-44c4-9d79-31e915153520": "",
  "61d78e0f-3cdc-46f1-8c98-3804ef50fefb": "",
  "0efe30c7-0d3e-42c0-901d-39e9ac16f5d8": "",
  "afce79ab-8794-46ea-ac7e-ac0a5992abb1": "",
  "ff876342-6304-4ce8-adc1-11f2ca44686c": "",
  "0230ed7b-7794-492a-bcfb-b25423a1f98c": "",
  "aa265afe-5835-4203-bffd-15ed2e077c6d": "",
  "9b1d528a-90ac-4d66-8ff0-5349695a4a2a": "",
  "4afdc34d-d216-41ce-9d67-9d155610b900": "",
  "2dde5a94-d77f-4652-ae07-f3439efdc373": "",
  "b597e44a-17dd-4c8d-9911-be3ff8bf7d78": "",
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const phrase: string = phrases[req.query.id as string];

  res.status(200).json({ phrase });
}
