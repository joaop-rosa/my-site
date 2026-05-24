import { useEffect, useState } from "react";

export function useDelayedScroll(isHovered: boolean, delay = 500) {
	const [showScroll, setShowScroll] = useState(false);

	useEffect(() => {
		let timeoutId: ReturnType<typeof setTimeout>;
		if (isHovered) {
			timeoutId = setTimeout(() => {
				setShowScroll(true);
			}, delay); // Aguarda a animação do CSS terminar
		} else {
			setShowScroll(false);
		}
		return () => clearTimeout(timeoutId);
	}, [isHovered, delay]);

	return showScroll;
}
