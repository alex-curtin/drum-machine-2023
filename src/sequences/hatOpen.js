import * as Tone from "tone";

import { emptyPattern } from "./constants";

const hatOpen = new Tone.MetalSynth({
	frequency: 350,
	envelope: {
		attack: 0.001,
		decay: 0.4,
		release: 0.1,
	},
	harmonicity: 3.1,
	modulationIndex: 42,
	resonance: 4000,
	octaves: 1.5,
	volume: -5,
}).toDestination();

export const hatOpenSequence = new Tone.Sequence(
	function (time) {
		hatOpen.triggerAttackRelease("8n", time);
	},
	emptyPattern,
	"16n",
).start(0);
