import { useEffect, useState, useCallback } from "react";
import * as Tone from "tone";

const StepCount = ({ currentBeat, getCurrentBeat }) => {
	useEffect(() => {
		Tone.Transport.scheduleRepeat(getCurrentBeat, "16n");
	}, [getCurrentBeat]);

	return (
		<div className="flex gap-1 sm:gap-2 ml-[44px] sm:ml-[56px] md:ml-[104px] text-center">
			{Array.from({ length: 16 }).map((_, i) => (
				<div
					key={`beat-${i + 1}`}
					className={`w-4 sm:w-6 md:w-8 lg:w-12 h-6 md:h-8 text-xs sm:text-sm md:text-medium flex items-center justify-center rounded-sm text-neutral-700 sm:font-semibold ${
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
