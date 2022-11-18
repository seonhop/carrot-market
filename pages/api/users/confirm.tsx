import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { IResponse } from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
	const { token } = req.body;
	console.log(token);
	res.status(200).end();
}

export default withHandler("POST", handler);
