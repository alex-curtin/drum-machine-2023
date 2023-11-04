import * as Tone from "tone";

import { emptyPattern } from "./constants";

export const hatC = new Tone.NoiseSynth({
	noise: {
		type: "white",
	},
	envelope: {
		attack: 0.001,
		decay: 0.08,
		sustain: 0,
	},
	volume: -8,
}).toDestination();

export const hatClosedSequence = new Tone.Sequence(
	function (time) {
		hatC.triggerAttackRelease("8n", time);
	},
	emptyPattern,
	"16n",
).start(0);
