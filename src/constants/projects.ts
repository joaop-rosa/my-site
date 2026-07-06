import { msg } from "@lingui/core/macro";

export const PROJECTS = [
	{
		name: msg`Pokedex`,
		description: msg`Uma Pokédex interativa consumindo a PokeAPI para listar e exibir detalhes dos Pokémon.`,
		image: "/images/pokedex.png",
		techs: ["React", "TypeScript", "CSS Modules", "Vite"],
		repoUrl: "https://github.com/joaop-rosa/pokedex",
		prodUrl: "https://pokedex-7zsm.onrender.com/",
	},
	{
		name: msg`Site jurídico`,
		description: msg`Landing page institucional para escritório de advocacia com foco em conversão.`,
		image: "/images/jessicaSite.png",
		techs: ["Next.js", "TypeScript"],
		prodUrl: "https://jessicabirck.adv.br/",
	},
	{
		name: msg`Este site :)`,
		description: msg`Meu portfólio pessoal construído com design Bento Box e foco em UX/UI.`,
		image: "/images/esteSite.png",
		techs: ["React", "TypeScript", "CSS Modules", "Vite"],
		repoUrl: "https://github.com/joaop-rosa/my-site",
	},
];
