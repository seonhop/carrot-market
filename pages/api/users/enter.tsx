import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { IResponse } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { prisma } from "@prisma/client";
import twilio from "twilio";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

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
	if (phone) {
		const msg = await twilioClient.messages.create({
			messagingServiceSid: process.env.TWILIO_MSG_SID,
			to: process.env.PHONE_NUMBER!,
			body: `Your login token is ${payload}`,
		});
		console.log(msg);
	}

	return res.json({ ok: true });
}

export default withHandler("POST", handler);
