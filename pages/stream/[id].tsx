import type { NextPage } from "next";

const StreamDetail: NextPage = () => {
	return (
		<div className="px-4 py-10 ">
			<div className="px-4 pt-4">
				<div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
				<div className="mt-5 ">
					<h1 className="text-3xl font-bold text-gray-900">Galaxy S50</h1>
					<span className="mt-3 block text-3xl text-gray-900">$140</span>
					<p className="my-6 text-base text-gray-700">
						My money&apos;s in that office, right? If she start giving me some
						bullshit about it ain&apos;t there, and we got to go someplace else
						and get it, I&apos;m gonna shoot you in the head then and there.
						Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
						my goddamn money is. She gonna tell me too. Hey, look at me when
						I&apos;m talking to you, motherfucker. You listen: we go in there,
						and that ni**a Winston or anybody else is in there, you the first
						motherfucker to get shot. You understand?
					</p>
				</div>
			</div>
			<div className="mt-10 h-[50vh] space-y-5 overflow-y-scroll px-4 pb-16">
				<h3 className=" text-2xl font-bold text-gray-900">Live Chat</h3>

				<div className="flex items-start space-x-2">
					<div className="h-8 w-8 rounded-full bg-slate-300" />
					<div className="max-w-1/2 rounded-md border border-gray-300 py-2 px-4 text-sm text-gray-700">
						<p>Hi how much are you selling them for?</p>
					</div>
				</div>
				<div className="flex items-start space-x-2">
					<div className="h-8 w-8 rounded-full bg-slate-300" />
					<div className="max-w-1/2 rounded-md border border-gray-300 py-2 px-4 text-sm text-gray-700">
						<p>Hi how much are you selling them for?</p>
					</div>
				</div>
				<div className="flex items-start space-x-2">
					<div className="h-8 w-8 rounded-full bg-slate-300" />
					<div className="max-w-1/2 rounded-md border border-gray-300 py-2 px-4 text-sm text-gray-700">
						<p>Hi how much are you selling them for?</p>
					</div>
				</div>
				<div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
					<div className="h-8 w-8 rounded-full bg-slate-300" />
					<div className="max-w-1/2 rounded-md border border-gray-300 py-2 px-4 text-sm text-gray-700">
						<p>I want $30</p>
					</div>
				</div>
				<div className="flex items-start space-x-2">
					<div className="h-8 w-8 rounded-full bg-slate-300" />
					<div className="max-w-1/2 rounded-md border border-gray-300 py-2 px-4 text-sm text-gray-700">
						<p>Hi how much are you selling them for?</p>
					</div>
				</div>
				<div className="flex items-start space-x-2">
					<div className="h-8 w-8 rounded-full bg-slate-300" />
					<div className="max-w-1/2 rounded-md border border-gray-300 py-2 px-4 text-sm text-gray-700">
						<p>Hi how much are you selling them for?</p>
					</div>
				</div>
				<div className="fixed inset-x-0 bottom-2 left-0 mx-auto w-full max-w-md">
					<div className="relative flex items-center">
						<input
							type="text"
							className="w-full rounded-full border-gray-300 pr-12 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
						/>
						<div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
							<button className="flex items-center rounded-full bg-orange-500 p-3 text-sm text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
								&rarr;
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StreamDetail;
