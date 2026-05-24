import cn from "classnames";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import s from "./LanguageSelector.module.css";

type Language = "pt-br" | "en" | "es";

const OPTIONS = [
	{ value: "pt-br", label: "PT-BR", icon: "pt-BR" },
	{ value: "en", label: "EN", icon: "en" },
	{ value: "es", label: "ES", icon: "es" },
];

export function LanguageSelector() {
	const { language, setLanguage } = useLanguage();
	const [isOpen, setIsOpen] = useState(false);

	const activeOption =
		OPTIONS.find((opt) => opt.value === language) || OPTIONS[0];

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: it's just a convenience hover closer
		<div className={s.selectorContainer} onMouseLeave={() => setIsOpen(false)}>
			<button
				type="button"
				className={s.activeLanguage}
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Select language"
			>
				<img
					src={`/icons/${activeOption.icon}.svg`}
					className={s.flag}
					alt={activeOption.label}
				/>
				<span>{activeOption.label}</span>
				<span className={s.arrow}>{isOpen ? "▲" : "▼"}</span>
			</button>

			{isOpen && (
				<ul className={s.dropdownList}>
					{OPTIONS.map((opt) => (
						<li key={opt.value}>
							<button
								type="button"
								className={cn(s.optionBtn, {
									[s.selected]: language === opt.value,
								})}
								onClick={() => {
									setLanguage(opt.value as Language);
									setIsOpen(false);
								}}
							>
								<img
									src={`/icons/${opt.icon}.svg`}
									className={s.flag}
									alt={opt.label}
								/>
								{opt.label}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
