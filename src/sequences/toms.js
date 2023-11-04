import * as Tone from "tone";

import { emptyPattern } from "./constants";

const tom = new Tone.MembraneSynth({
	pitchDecay: 0.05,
	octaves: 1.2,
	oscillator: {
		type: "sine",
	},
	envelope: {
		attack: 0.001,
		decay: 0.5,
		sustain: 0,
		release: 1,
		attackCurve: "exponential",
	},
}).toDestination();

export const loTomSequence = new Tone.Sequence(
	function (time, note) {
		tom.triggerAttackRelease(note, "8n", time);
	},
	emptyPattern,
	"16n",
).start(0);

export const hiTomSequence = new Tone.Sequence(
	function (time, note) {
		tom.triggerAttackRelease(note, "8n", time);
	},
	emptyPattern,
	"16n",
).start(0);
