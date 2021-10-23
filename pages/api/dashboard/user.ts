import { NextApiRequest, NextApiResponse } from "next";
import {
  withApiAuthRequired,
  getAccessToken,
  getSession,
} from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function healthcheck(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession(req, res);
  const token = await session?.idToken;

  res.status(200).json({ token });
});
