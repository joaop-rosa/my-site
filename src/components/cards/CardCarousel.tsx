import classNames from "classnames";
import Slider, { type CustomArrowProps } from "react-slick";
import s from "./CardCarousel.module.css";

export type ProjectItem = {
	name: string;
	repoUrl?: string;
	prodUrl?: string;
	icon: string;
	alt: string;
	width: number;
	height: number;
};

function PrevArrow(props: CustomArrowProps) {
	const { className, onClick } = props;
	return (
		<img
			src="/icons/arrow-left.svg"
			alt="Flecha para esquerda."
			width={50}
			className={classNames(className, s.arrow, s.arrowLeft)}
			height={60}
			onClick={onClick}
		/>
	);
}

function NextArrow(props: CustomArrowProps) {
	const { className, onClick } = props;
	return (
		<img
			src="/icons/arrow-right.svg"
			alt="Flecha para direira."
			width={50}
			className={classNames(className, s.arrow, s.arrowRight)}
			height={60}
			onClick={onClick}
		/>
	);
}

export function CardCarousel({ itens }: { itens: ProjectItem[] }) {
	return (
		<div className={s.carouselWrapper}>
			<Slider
				nextArrow={
					<NextArrow
						className={undefined}
						style={undefined}
						onClick={undefined}
					/>
				}
				prevArrow={
					<PrevArrow
						className={undefined}
						style={undefined}
						onClick={undefined}
					/>
				}
				className={s.carousel}
				infinite
				slidesToShow={1}
				slidesToScroll={1}
				autoplay
				autoplaySpeed={8000}
			>
				{itens.map((item) => {
					return (
						<div className={s.item} key={item.name}>
							<img
								src={item.icon}
								alt={item.alt}
								className={s.icon}
								width={100}
								height={100}
							/>

							<h4 className={s.title}>{item.name}</h4>
							<div className={s.links}>
								{item.repoUrl ? (
									<a href={item.repoUrl} target="_blank" rel="noopener">
										<img
											src="/icons/github.svg"
											alt="/github.svg"
											className={s.link}
											width={30}
											height={30}
										/>
									</a>
								) : null}

								{item.prodUrl ? (
									<a href={item.prodUrl} target="_blank" rel="noopener">
										<img
											src="/icons/visit.svg"
											alt="/visit.svg"
											className={s.link}
											width={40}
											height={40}
										/>
									</a>
								) : null}
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
}
