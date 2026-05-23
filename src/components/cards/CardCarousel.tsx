import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import s from "./CardCarousel.module.css";

export type ProjectItem = {
	name: string;
	description?: string;
	image?: string;
	techs?: string[];
	repoUrl?: string;
	prodUrl?: string;
	icon: string;
	alt: string;
	width: number;
	height: number;
};

export function CardCarousel({ itens }: { itens: ProjectItem[] }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(1);
	const [isHovered, setIsHovered] = useState(false);

	const next = useCallback(() => {
		setDirection(1);
		setCurrentIndex((prev) => (prev + 1) % itens.length);
	}, [itens.length]);

	const previous = useCallback(() => {
		setDirection(-1);
		setCurrentIndex((prev) => (prev - 1 + itens.length) % itens.length);
	}, [itens.length]);

	useEffect(() => {
		if (isHovered) return;
		const interval = setInterval(next, 8000);
		return () => clearInterval(interval);
	}, [next, isHovered]);

	const variants = {
		enter: (direction: number) => ({
			x: direction > 0 ? "100%" : "-100%",
			opacity: 0,
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			zIndex: 0,
			x: direction < 0 ? "100%" : "-100%",
			opacity: 0,
		}),
	};

	const item = itens[currentIndex];

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: in this case you can
		<div
			className={s.carouselWrapper}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className={s.sliderContainer}>
				<AnimatePresence mode="popLayout" initial={false} custom={direction}>
					<motion.div
						key={currentIndex}
						custom={direction}
						variants={variants}
						initial="enter"
						animate="center"
						exit="exit"
						transition={{
							x: { type: "spring", stiffness: 300, damping: 30 },
							opacity: { duration: 0.2 },
						}}
						className={s.itemWrapper}
					>
						<div className={s.splitLayout}>
							<div className={s.leftColumn}>
								<img
									src={item.image || "/images/jessicaSite.png"}
									alt={item.name}
									className={s.projectImage}
								/>
							</div>

							<div className={s.rightColumn}>
								<h4 className={s.title}>{item.name}</h4>

								{item.description && (
									<p className={s.description}>{item.description}</p>
								)}

								{item.techs && (
									<div className={s.techRow}>
										{item.techs.map((tech) => (
											<span key={tech} className={s.techBadge}>
												{tech}
											</span>
										))}
									</div>
								)}

								<div className={s.footer}>
									<div className={s.links}>
										{item.repoUrl ? (
											<a href={item.repoUrl} target="_blank" rel="noopener">
												<img
													src="/icons/github.svg"
													alt="GitHub"
													className={s.linkIcon}
												/>
											</a>
										) : null}

										{item.prodUrl ? (
											<a href={item.prodUrl} target="_blank" rel="noopener">
												<img
													src="/icons/visit.svg"
													alt="Visit"
													className={s.linkIcon}
												/>
											</a>
										) : null}
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>

			<div className={s.navigationWrapper}>
				<button type="button" className={s.navBtn} onClick={previous}>
					Anterior
				</button>
				<button type="button" className={s.navBtn} onClick={next}>
					Próximo
				</button>
			</div>
		</div>
	);
}
