import { useEffect, useState, useRef } from "react";
import { FaVolumeOff } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";
const emptyPattern = Array.from({ length: 16 }).map(() => null);

const padClassName =
	"w-6 h-6 md:w-8 md:h-8 lg:h-12 lg:w-12 border-4 rounded-sm shadow-sm group-first:border-yellow-300 group-[&:nth-of-type(2)]:border-yellow-400 group-[&:nth-of-type(3)]:border-amber-400 group-[&:nth-of-type(4)]:border-amber-500 group-[&:nth-of-type(5)]:border-orange-500 group-[&:nth-of-type(6)]:border-orange-600 group-[&:nth-of-type(7)]:border-red-600";

const padOffClassName =
	"group-first:bg-yellow-300 group-[&:nth-of-type(2)]:bg-yellow-400 group-[&:nth-of-type(3)]:bg-amber-400 group-[&:nth-of-type(4)]:bg-amber-500 group-[&:nth-of-type(5)]:bg-orange-500 group-[&:nth-of-type(6)]:bg-orange-600 group-[&:nth-of-type(7)]:bg-red-600";

const Track = ({ sequence, note, pattern, setPattern, label = "drum" }) => {
	const [muted, setMuted] = useState(false);
	const windowWidth = useRef(window.innerWidth);

	const abbreviateLabel = (str) =>
		str
			.split(" ")
			.map((str) => str[0])
			.join("");

	useEffect(() => {
		sequence.clear();
		sequence.events = pattern;
	}, [pattern, sequence]);

	useEffect(() => {
		if (muted) {
			sequence.clear();
		} else {
			sequence.events = pattern;
		}
	}, [muted, sequence, pattern]);

	const editPattern = (i) => {
		const newPattern = [...pattern];
		newPattern[i] = newPattern[i] ? null : note;
		setPattern(newPattern);
	};

	return (
		<div
			className={`flex gap-2 items-center group ${muted ? "opacity-50" : ""}`}
		>
			<div className="w-12 md:w-24 h-6 md:h-8 lg:h-12 text-sm leading-tight bg-slate-300 p-1 rounded-sm flex items-center justify-between">
				<p className="hidden md:block">{label}</p>
				<p className="uppercase md:hidden">{abbreviateLabel(label)}</p>
				<button
					type="button"
					onClick={() => setMuted(!muted)}
					className="px-1 shrink-0 rounded-md text-slate-700"
				>
					{muted ? <FaVolumeMute /> : <FaVolumeOff />}
				</button>
			</div>
			{pattern.map((beat, i) => (
				<button
					key={`step-${i}`}
					type="button"
					onClick={() => editPattern(i)}
					className={`${padClassName} ${beat ? "" : padOffClassName}`}
				/>
			))}
		</div>
	);
};

export default Track;
