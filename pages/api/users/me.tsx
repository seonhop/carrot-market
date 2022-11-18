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
	console.log(req.session.user);
	const profile = await client.user.findUnique({
		where: {
			id: req.session.user?.id,
		},
	});
	res.json({
		ok: true,
		profile,
	});
}

export default withIronSessionApiRoute(withHandler("GET", handler), {
	cookieName: "carrotsession",
	password:
		"1241234asdhfkajsdhfkadjshfkadsjweriuoqewiursdjkafan,dfadsfnl5798174972",
});
