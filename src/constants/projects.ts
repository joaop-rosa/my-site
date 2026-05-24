import { msg } from "@lingui/core/macro";

export const PROJECTS = [
	// {
	// 	name: "Pokedex",
	// 	description: "Uma Pokédex interativa consumindo a PokeAPI para listar e exibir detalhes dos Pokémon.",
	// 	image: "/images/jessicaSite.png",
	// 	techs: ["Next.js"],
	// 	repoUrl: "https://github.com/joaop-rosa/pokedex",
	// 	prodUrl: "https://joaop-rosa.github.io/pokedex/",
	// 	icon: "/icons/react.svg",
	// 	alt: "Ícone react.",
	// 	width: 95,
	// 	height: 95,
	// },
	{
		name: msg`Site jurídico`,
		description: msg`Landing page institucional para escritório de advocacia com foco em conversão.`,
		image: "/images/jessicaSite.png",
		techs: ["Next.js"],
		prodUrl: "https://jessicabirck.adv.br/",
	},
	{
		name: msg`Este site :)`,
		description: msg`Meu portfólio pessoal construído com design Bento Box e foco em UX/UI.`,
		image: "/images/esteSite.png",
		techs: ["React", "CSS Modules", "Vite"],
		repoUrl: "https://github.com/joaop-rosa/my-site",
	},
];
