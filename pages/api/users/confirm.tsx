import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { IResponse } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withIronSessionApiRoute } from "iron-session/next";

declare module "iron-session" {
	interface IronSessionData {
		user?: {
			id?: number;
		};
	}
}

async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
	const { token } = req.body;
	const exists = await client.token.findUnique({
		where: {
			payload: token,
		},
	});
	if (!exists) res.status(404).end();
	console.log(exists);
	req.session.user = {
		id: exists?.userId,
	};
	await req.session.save();
	res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
	cookieName: "carrotsession",
	password:
		"1241234asdhfkajsdhfkadjshfkadsjweriuoqewiursdjkafan,dfadsfnl5798174972",
});
