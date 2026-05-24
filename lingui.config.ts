import type { LinguiConfig } from "@lingui/conf";
import { formatter } from "@lingui/format-po";

const config: LinguiConfig = {
	locales: ["pt-br", "en", "es"],
	sourceLocale: "pt-br",
	fallbackLocales: {
		default: "pt-br",
	},
	catalogs: [
		{
			path: "<rootDir>/src/locales/{locale}/messages",
			include: ["src"],
		},
	],
	format: formatter(),
};

export default config;
