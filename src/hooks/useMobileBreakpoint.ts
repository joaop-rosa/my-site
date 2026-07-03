import { useEffect, useState } from "react";

export function useBreakpoint() {
	const [matches, setMatches] = useState({
		isMobile: false,
		isTablet: false,
		isDesktop: true,
	});

	useEffect(() => {
		if (typeof window === "undefined") return;

		const mobileQuery = window.matchMedia("(max-width: 767px)");
		const tabletQuery = window.matchMedia(
			"(min-width: 768px) and (max-width: 1179px)",
		);
		const desktopQuery = window.matchMedia("(min-width: 1180px)");

		const updateMatches = () => {
			setMatches({
				isMobile: mobileQuery.matches,
				isTablet: tabletQuery.matches,
				isDesktop: desktopQuery.matches,
			});
		};

		updateMatches();

		mobileQuery.addEventListener("change", updateMatches);
		tabletQuery.addEventListener("change", updateMatches);
		desktopQuery.addEventListener("change", updateMatches);

		return () => {
			mobileQuery.removeEventListener("change", updateMatches);
			tabletQuery.removeEventListener("change", updateMatches);
			desktopQuery.removeEventListener("change", updateMatches);
		};
	}, []);

	return matches;
}
