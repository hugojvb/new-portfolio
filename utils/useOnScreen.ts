import { useState, useEffect } from "react";

export function useOnScreen(ref): boolean {
	const [isIntersecting, setIntersecting] = useState<boolean | false>(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));

		observer.observe(ref.current);

		// REMOVE OBSERVER WHEN COMPONENT IS UNMOUNTED
		return () => {
			observer.disconnect();
		};
	}, []);

	return isIntersecting;
}
