import * as Tone from "tone";

import { emptyPattern } from "./constants";

const hatOpen = new Tone.MetalSynth({
	frequency: 1200,
	envelope: {
		attack: 0.001,
		decay: 0.3,
		release: 0.3,
		sustain: 0.3,
	},
	harmonicity: 6.1,
	modulationIndex: 42,
	resonance: 6000,
	octaves: 1,
	volume: 1,
}).toDestination();

export const hatOpenSequence = new Tone.Sequence(
	function (time) {
		hatOpen.triggerAttackRelease("8n", time);
	},
	emptyPattern,
	"16n",
).start(0);
