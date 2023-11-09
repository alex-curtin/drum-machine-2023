import { useState } from "react";
import * as Tone from "tone";
import { FaQuestion } from "react-icons/fa6";

const swingInstruction =
	'"Swing" adds a slight delay to every other hit, giving the beat a more human feel.';

const bpmInstruction = "Beats per minute. The tempo, or speed.";

const TooltipButton = ({ text = "the tooltip is open" }) => {
	return (
		<div className="relative group">
			<div className="absolute hidden group-hover:block py-2 px-4 bg-white bottom-5 right-0 rounded-sm shadow-md text-sm min-w-[200px] ">
				<p>{text}</p>
			</div>
			<div className="rounded-full border border-neutral-700 bg-white w-4 h-4 text-xs font-bold flex items-center justify-center">
				<FaQuestion size={12} />
			</div>
		</div>
	);
};

const Controls = ({ clear, setCurrentBeat }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [bpm, setBpm] = useState(120);
	const [swing, setSwing] = useState(0);

	const toggleIsPlaying = () => {
		if (Tone.context.data !== "running") {
			Tone.start();
		}
		Tone.Transport.toggle();
		setCurrentBeat(0);
		setIsPlaying(!isPlaying);
	};

	const onBpmChange = (e) => {
		let newBpm = e.target.value;
		if (newBpm > 200) {
			newBpm = 200;
		}
		if (newBpm < 0) {
			newBpm = 0;
		}
		setBpm(newBpm);
		Tone.Transport.bpm.value = newBpm;
	};

	const onSwingChange = (e) => {
		setSwing(e.target.value);
		Tone.Transport.swing = e.target.value / 100;
	};

	return (
		<div className="bg-slate-100 rounded-md shadow-md flex flex-col gap-4 p-4">
			<div className="flex gap-3 items-center">
				<div className="flex flex-col gap-1">
					<div className="border-b-4 border-blue-600 w-12 h-1" />
					<div className="border-b-4 border-blue-600 w-12 h-1" />
				</div>
				<h2 className="text-md uppercase tracking-widest">Controls</h2>
				<div className="flex flex-col gap-1 flex-grow">
					<div className="flex-grow border-b-4 border-blue-600 h-1" />
					<div className="flex-grow border-b-4 border-blue-600 h-1" />
				</div>
			</div>
			<div className="flex gap-4 items-center flex-wrap">
				<button
					type="button"
					onClick={toggleIsPlaying}
					className="bg-blue-600 block text-white rounded-md shadow-sm w-20 h-10 text-lg uppercase font-bold hover:bg-blue-700 active:bg-blue-500"
				>
					{isPlaying ? "stop" : "start"}
				</button>
				<button
					type="button"
					className="bg-blue-600 block text-white rounded-md shadow-sm w-20 h-10 text-lg uppercase font-bold hover:bg-blue-700 active:bg-blue-500"
					onClick={clear}
				>
					clear
				</button>
				<div className="shadow-sm relative mr-5">
					<label
						htmlFor="bpm"
						className="bg-blue-600 p-2 rounded-s-md text-white font-semibold h-10 inline-block"
					>
						BPM
					</label>
					<input
						type="number"
						id="bpm"
						name="bpm"
						className="p-2 rounded-e-md w-20"
						value={bpm}
						onChange={onBpmChange}
					/>
					<div className="absolute top-0 right-[-20px]">
						<TooltipButton text={bpmInstruction} />
					</div>
				</div>
				<div className="flex flex-col items-center bg-white px-2 py-1 rounded-md text-sm shadow-sm relative">
					<label htmlFor="swing">swing</label>
					<input
						type="range"
						id="swing"
						name="swing"
						min="0"
						max="50"
						value={swing}
						onChange={onSwingChange}
					/>
					<div className="absolute top-0 right-[-20px]">
						<TooltipButton text={swingInstruction} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Controls;
