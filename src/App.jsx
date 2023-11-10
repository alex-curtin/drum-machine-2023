import { useCallback, useState } from "react";
import * as Tone from "tone";

import Track from "./components/track";

import {
	snareSequence,
	kickSequence,
	hatClosedSequence,
	hatOpenSequence,
	crashSequence,
	hiTomSequence,
	loTomSequence,
} from "./sequences";
import { emptyPattern } from "./sequences/constants";
import { presets } from "./presets";
import StepCount from "./components/step-count";
import Controls from "./components/controls";
import Hero from "./components/hero";

const App = () => {
	const [closedHatPattern, setClosedHatPattern] = useState(emptyPattern);
	const [crashPattern, setCrashPattern] = useState(emptyPattern);
	const [highTomPattern, setHighTomPattern] = useState(emptyPattern);
	const [lowTomPattern, setLowTomPattern] = useState(emptyPattern);
	const [kickPattern, setKickPattern] = useState(emptyPattern);
	const [openHatPattern, setOpenHatPattern] = useState(emptyPattern);
	const [snarePattern, setSnarePattern] = useState(emptyPattern);
	const [currentBeat, setCurrentBeat] = useState(1);

	const clear = useCallback(() => {
		setClosedHatPattern(emptyPattern);
		setCrashPattern(emptyPattern);
		setHighTomPattern(emptyPattern);
		setKickPattern(emptyPattern);
		setLowTomPattern(emptyPattern);
		setOpenHatPattern(emptyPattern);
		setSnarePattern(emptyPattern);
	}, []);

	const getCurrentBeat = useCallback(() => {
		const position = Tone.Transport.position.split(":");
		const beat = parseInt(position[1]) * 4 + (Math.floor(position[2]) + 1);
		setCurrentBeat(beat);
	}, []);

	const activatePreset = (patterns) => {
		const { kick, snare, closedHat, openHat, crash, highTom, lowTom } =
			patterns;
		setKickPattern(kick);
		setSnarePattern(snare);
		setClosedHatPattern(closedHat);
		setOpenHatPattern(openHat);
		setCrashPattern(crash);
		setHighTomPattern(highTom);
		setLowTomPattern(lowTom);
	};

	return (
		<div className="w-full font-body tracking-wide min-h-screen flex justify-center">
			<div className="p-4 w-fit main flex flex-col gap-2">
				<Hero />
				<Controls clear={clear} setCurrentBeat={setCurrentBeat} />
				<div className="flex flex-col gap-4 p-4 bg-neutral-100 shadow-md rounded-md">
					<div className="flex gap-3 items-center">
						<div className="flex flex-col gap-1">
							<div className="border-b-4 border-green-600 w-12 h-1" />
							<div className="border-b-4 border-green-600 w-12 h-1" />
						</div>
						<h2 className="text-md uppercase tracking-widest">Presets</h2>
						<div className="flex flex-col gap-1 flex-grow">
							<div className="flex-grow border-b-4 border-green-600 h-1" />
							<div className="flex-grow border-b-4 border-green-600 h-1" />
						</div>
					</div>
					<div className="flex gap-2 flex-wrap">
						{presets.map((preset) => (
							<div key={preset.name}>
								<button
									type="button"
									className="bg-green-600 text-white font-semibold uppercase px-2 min-w-[50px] sm:min-w-[80px] h-10 rounded-md hover:bg-green-700 active:bg-green-500"
									onClick={() => activatePreset(preset.patterns)}
								>
									{preset.name}
								</button>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-2 p-4 bg-slate-100 rounded-md shadow-md w-full md:w-fit overflow-hidden">
					<StepCount
						currentBeat={currentBeat}
						getCurrentBeat={getCurrentBeat}
					/>
					<div className="flex flex-col gap-2">
						<Track
							sequence={kickSequence}
							note="C0"
							label="kick"
							pattern={kickPattern}
							setPattern={setKickPattern}
						/>
						<Track
							sequence={snareSequence}
							note={true}
							label="snare"
							pattern={snarePattern}
							setPattern={setSnarePattern}
						/>
						<Track
							sequence={hatClosedSequence}
							note={true}
							label="closed hat"
							pattern={closedHatPattern}
							setPattern={setClosedHatPattern}
						/>
						<Track
							sequence={hatOpenSequence}
							note={true}
							label="open hat"
							pattern={openHatPattern}
							setPattern={setOpenHatPattern}
						/>
						<Track
							sequence={crashSequence}
							note={true}
							label="crash"
							pattern={crashPattern}
							setPattern={setCrashPattern}
						/>
						<Track
							sequence={hiTomSequence}
							note="C3"
							label="high tom"
							pattern={highTomPattern}
							setPattern={setHighTomPattern}
						/>
						<Track
							sequence={loTomSequence}
							note="C2"
							label="low tom"
							pattern={lowTomPattern}
							setPattern={setLowTomPattern}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
