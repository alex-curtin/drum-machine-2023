import * as Tone from "tone";

import { emptyPattern } from "./constants";

const hatC = new Tone.MetalSynth({
	frequency: 1200,
	envelope: {
		attack: 0.001,
		decay: 0.05,
		release: 0.3,
		sustain: 0.1,
	},
	harmonicity: 6.1,
	modulationIndex: 30,
	resonance: 5000,
	octaves: 1,
	volume: 1,
}).toDestination();

export const hatClosedSequence = new Tone.Sequence(
	function (time) {
		hatC.triggerAttackRelease("8n", time);
	},
	emptyPattern,
	"16n",
).start(0);
