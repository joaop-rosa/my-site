import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation, useOutlet } from "react-router";
import { LanguageSelector } from "@/components/LanguageSelector/LanguageSelector";

export default function App() {
	const location = useLocation();
	const outlet = useOutlet();
	const isSobre = location.pathname.includes("/sobre");

	// biome-ignore lint/correctness/useExhaustiveDependencies: we need to run this on every route change
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<>
			<LanguageSelector />
			<AnimatePresence mode="popLayout" initial={false}>
				<motion.div
					key={location.pathname}
					initial={{ x: isSobre ? "100%" : "-100%", opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					exit={{ x: isSobre ? "100%" : "-100%", opacity: 0 }}
					transition={{
						x: { type: "spring", stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					style={{ width: "100%" }}
				>
					{outlet}
				</motion.div>
			</AnimatePresence>
		</>
	);
}
