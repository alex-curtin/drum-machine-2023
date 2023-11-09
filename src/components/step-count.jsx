import { useEffect, useState, useCallback } from "react";
import * as Tone from "tone";

const StepCount = ({ currentBeat, getCurrentBeat }) => {
	useEffect(() => {
		Tone.Transport.scheduleRepeat(getCurrentBeat, "16n");
	}, [getCurrentBeat]);

	return (
		<div className="flex gap-2 ml-[56px] md:ml-[104px] text-center">
			{Array.from({ length: 16 }).map((_, i) => (
				<div
					key={`beat-${i + 1}`}
					className={`w-6 md:w-8 lg:w-12 h-6 md:h-8 flex items-center justify-center rounded-sm text-neutral-700 font-semibold ${
						currentBeat === i + 1 ? "bg-slate-800 text-white/90" : ""
					}`}
				>
					{i + 1}
				</div>
			))}
		</div>
	);
};

export default StepCount;
