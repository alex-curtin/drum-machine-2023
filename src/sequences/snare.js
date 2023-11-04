import * as Tone from "tone";

import { emptyPattern } from "./constants";

const snare = new Tone.NoiseSynth({
	noise: {
		type: "pink",
		playbackRate: 0.4,
	},
	envelope: {
		attackCurve: "exponential",
		attack: 0.001,
		decay: 0.3,
		sustain: 0,
		release: 0.4,
	},
	volume: 8,
}).toDestination();

export const snareSequence = new Tone.Sequence(
	function (time) {
		snare.triggerAttackRelease("8n", time);
	},
	emptyPattern,
	"16n",
).start(0);
