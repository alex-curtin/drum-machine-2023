import { useState } from "react";

const emptyPattern = Array.from({ length: 16 }).map(() => null);

const Track = ({ sequencer, note }) => {
	const [pattern, setPattern] = useState(emptyPattern);

	const editPattern = (i) => {
		const newPattern = [...pattern];
		newPattern[i] = newPattern[i] ? null : note;
		sequencer.clear();
		sequencer.events = newPattern;
		setPattern(newPattern);
	};

	return (
		<div className="flex gap-2">
			{pattern.map((beat, i) => (
				<button
					key={`step-${i}`}
					type="button"
					onClick={() => editPattern(i)}
					className="w-8 h-8 bg-blue-400"
				>
					{beat ? "I" : "O"}
				</button>
			))}
		</div>
	);
};

export default Track;
