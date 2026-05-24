import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import {
	createContext,
	type PropsWithChildren,
	useContext,
	useEffect,
	useState,
} from "react";

type Language = "pt-br" | "en" | "es";

type LanguageContextProps = {
	language: Language;
	setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextProps | null>(null);

async function dynamicActivate(locale: string) {
	try {
		const { messages } = await import(`../locales/${locale}/messages.po`);
		i18n.load(locale, messages);
		i18n.activate(locale);
	} catch (e) {
		console.error("Failed to load messages for", locale, e);
	}
}

export function LanguageProvider({ children }: PropsWithChildren) {
	const [language, setLanguage] = useState<Language>("pt-br");
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const browserLang = navigator.language.toLowerCase();
		let initialLang: Language = "pt-br";

		if (browserLang.startsWith("es")) {
			initialLang = "es";
		} else if (browserLang.startsWith("en")) {
			initialLang = "en";
		}

		setLanguage(initialLang);
	}, []);

	useEffect(() => {
		dynamicActivate(language).then(() => {
			setIsLoaded(true);
		});
	}, [language]);

	if (!isLoaded) {
		return null;
	}

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			<I18nProvider i18n={i18n}>{children}</I18nProvider>
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);

	if (!context) {
		throw new Error("useLanguage must be used within LanguageProvider");
	}

	return context;
}
