import cn from "classnames";
import s from "./Card.module.css";
import type { ProjectItem } from "./CardCarousel";
import { CardCarousel } from "./CardCarousel";

import { CARD_THEME, CARD_TYPE } from "./constants";

//Remover optionals
export function Card(props: {
	title?: React.ReactNode;
	description?: React.ReactNode;
	type?: string;
	theme?: string;
	icon?: string;
	itens?: ProjectItem[];
	children?: React.ReactNode;
	className?: string;
}) {
	const { title, description, type, theme, icon, itens, children, className } =
		props;

	function renderContent() {
		if (type === CARD_TYPE.TEXT) {
			return <p className={s.description}>{description}</p>;
		}

		if (type === CARD_TYPE.CAROUSEL) {
			return <CardCarousel itens={itens || []} />;
		}
	}

	// Renderizar icone
	function renderIcon() {
		if (icon) {
			return (
				<img
					src={icon}
					alt="Ícone da sessão."
					className={s.icon}
					width={25}
					height={25}
				/>
			);
		}

		return null;
	}

	if (type === CARD_TYPE.CUSTOM) {
		return children;
	}

	return (
		<div
			className={cn(s.card, className, {
				[s.cardLight]: theme === CARD_THEME.LIGHT,
				[s.cardDark]: theme === CARD_THEME.DARK,
				[s.cardCarousel]: type === CARD_TYPE.CAROUSEL,
			})}
		>
			<div className={s.titleWrapper}>
				<h2>{title}</h2>
				{renderIcon()}
			</div>

			{renderContent()}
		</div>
	);
}
