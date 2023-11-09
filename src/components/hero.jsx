const Hero = () => {
	return (
		<div className="bg-slate-100 rounded-md shadow-md flex flex-col gap-1 p-4">
			<div className="flex gap-3 items-stretch">
				<div className="flex flex-col justify-center gap-1">
					<div className="border-b-4 border-yellow-300 w-12 h-1" />
					<div className="border-b-4 border-orange-400 w-12 h-1" />
					<div className="border-b-4 border-red-500 w-12 h-1" />
				</div>
				<h1 className="font-bold text-4xl font-display">AC-202</h1>
				<div className="flex flex-col flex-grow py-2 justify-center gap-1">
					<div className="border-b-4 border-yellow-300 h-1" />
					<div className="border-b-4 border-orange-400 h-1" />
					<div className="border-b-4 border-red-500 h-1" />
				</div>
			</div>
			<div>A drum synthesizer inspired by vintage analog drum machines.</div>
		</div>
	);
};

export default Hero;
