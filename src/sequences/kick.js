import * as Tone from "tone";

import { emptyPattern } from "./constants";

const kick = new Tone.MembraneSynth({
	pitchDecay: 0.05,
	octaves: 10,
	oscillator: {
		type: "sine",
	},
	envelope: {
		attack: 0.001,
		decay: 1,
		sustain: 0.01,
		release: 1.4,
		attackCurve: "cosine",
	},
	volume: 5,
}).toDestination();

export const kickSequence = new Tone.Sequence(
	function (time, note) {
		kick.triggerAttackRelease(note, "8n", time);
	},
	emptyPattern,
	"16n",
).start(0);
