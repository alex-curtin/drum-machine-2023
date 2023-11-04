import * as Tone from "tone";

import { emptyPattern } from "./constants";

const crash = new Tone.MetalSynth({
	frequency: 700,
	envelope: {
		attack: 0.001,
		decay: 3,
		release: 3,
	},
	harmonicity: 4.1,
	modulationIndex: 40,
	resonance: 4000,
	octaves: 1,
}).toDestination();

export const crashSequence = new Tone.Sequence(
	function (time) {
		crash.triggerAttackRelease("8n", time);
	},
	emptyPattern,
	"16n",
).start(0);
