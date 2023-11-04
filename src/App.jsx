import { useState } from "react";
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

const App = () => {
	const [isPlaying, setIsPlaying] = useState(false);

	const toggleIsPlaying = () => {
		if (Tone.context.data !== "running") {
			Tone.start();
		}
		Tone.Transport.toggle();
		setIsPlaying(!isPlaying);
	};

	return (
		<div>
			<div className="flex flex-col gap-2 p-4">
				<Track sequencer={kickSequence} note="C0" />
				<Track sequencer={snareSequence} note={true} />
				<Track sequencer={hatClosedSequence} note={true} />
				<Track sequencer={hatOpenSequence} note={true} />
				<Track sequencer={crashSequence} note={true} />
				<Track sequencer={hiTomSequence} note="C2" />
				<Track sequencer={loTomSequence} note="C3" />
			</div>
			<button type="button" onClick={toggleIsPlaying}>
				{isPlaying ? "stop" : "start"}
			</button>
		</div>
	);
};

export default App;
