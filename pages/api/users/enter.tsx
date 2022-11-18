import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../libs/server/withHandler";
import client from "../../../libs/server/client";
import { prisma } from "@prisma/client";

async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { phone, email } = req.body;
	const payLoad = phone ? { phone: +phone } : { email };
	const user = await client.user.upsert({
		where: {
			...payLoad,
		},
		create: {
			name: "Anonymous",
			...payLoad,
		},
		update: {},
	});
	console.log(user);
	/* 	if (email) {
		user = await client.user.findUnique({
			where: {
				email,
			},
		});
		if (!user) {
			console.log("Did not find; will create");
			user = await client.user.create({
				data: {
					name: "Anonymous",
					email,
				},
			});
		}
		console.log(user);
	} */
	return res.json({ ok: true });
}

export default withHandler("POST", handler);
