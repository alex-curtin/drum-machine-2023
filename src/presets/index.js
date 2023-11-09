import { emptyPattern } from "../sequences/constants";

const getPattern = (beats, note = true) => {
	return Array.from({ length: 16 }).map((_, i) =>
		beats.includes(i) ? note : null,
	);
};

export const presets = [
	{
		name: "I",
		patterns: {
			kick: getPattern([0, 2, 6, 8, 10, 14], "C0"),
			snare: getPattern([4, 12]),
			closedHat: getPattern([0, 2, 4, 6, 8, 10, 12, 14]),
			openHat: emptyPattern,
			crash: emptyPattern,
			highTom: emptyPattern,
			lowTom: emptyPattern,
		},
	},
	{
		name: "II",
		patterns: {
			kick: getPattern([0, 2, 6, 10, 13], "C0"),
			snare: getPattern([4, 7, 9, 11, 12, 15]),
			closedHat: getPattern([0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 15]),
			openHat: getPattern([7, 12]),
			crash: emptyPattern,
			highTom: emptyPattern,
			lowTom: emptyPattern,
		},
	},
	{
		name: "III",
		patterns: {
			kick: getPattern([0, 10], "C0"),
			snare: getPattern([4, 9, 12, 15]),
			closedHat: getPattern([0, 2, 4, 6, 8, 10, 12, 14]),
			openHat: emptyPattern,
			crash: emptyPattern,
			highTom: getPattern([4, 7, 9, 12, 15], "C2"),
			lowTom: getPattern([0, 10], "C3"),
		},
	},
	{
		name: "IV",
		patterns: {
			kick: getPattern([0, 4, 8, 12, 14], "C0"),
			snare: getPattern([4, 12]),
			closedHat: getPattern([9]),
			openHat: getPattern([2, 6, 10, 14]),
			crash: emptyPattern,
			highTom: emptyPattern,
			lowTom: emptyPattern,
		},
	},
	{
		name: "V",
		patterns: {
			kick: getPattern([0, 7, 10, 13, 15], "C0"),
			snare: getPattern([4, 12]),
			closedHat: getPattern([0, 2, 4, 6, 8, 10, 12, 14]),
			openHat: emptyPattern,
			crash: emptyPattern,
			highTom: getPattern([5, 11, 13], "C2"),
			lowTom: getPattern([4, 6, 12], "C3"),
		},
	},
];
