import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { IResponse } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { prisma } from "@prisma/client";

async function handler(req: NextApiRequest, res: NextApiResponse<IResponse>) {
	const { phone, email } = req.body;
	const user = phone ? { phone: +phone } : email ? { email } : null;
	if (!user) return res.status(400).json({ ok: false });
	const payload = Math.floor(100000 + Math.random() * 900000) + "";
	const token = await client.token.create({
		data: {
			payload,
			user: {
				connectOrCreate: {
					where: {
						...user,
					},
					create: {
						name: "Anonymous",
						...user,
					},
				},
			},
		},
	});
	console.log(token);
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
