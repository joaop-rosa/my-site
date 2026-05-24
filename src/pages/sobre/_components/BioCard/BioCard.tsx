import { Trans } from "@lingui/react/macro";
import s from "./BioCard.module.css";

export function BioCard() {
	return (
		<div className={s.bioCard}>
			<h2 className={s.title}>
				<Trans>Sobre Mim</Trans>
			</h2>
			<div className={s.content}>
				<p>
					<Trans>
						Sou desenvolvedor front-end formado em Sistemas para Internet pela{" "}
						<span className={s.highlight}>FACCAT</span>. Ao longo da minha
						trajetória, especializei-me na construção de aplicações web
						eficientes e escaláveis, tendo o{" "}
						<span className={s.highlight}>React</span> como minha principal
						tecnologia de atuação. Além do ecossistema JavaScript, possuo
						experiência prática no desenvolvimento e manutenção de plataformas
						utilizando <span className={s.highlight}>PHP</span> e{" "}
						<span className={s.highlight}>WordPress</span>, o que me proporciona
						versatilidade para me adaptar a diferentes requisitos técnicos e
						necessidades de arquitetura.
					</Trans>
				</p>
				<p>
					<Trans>
						Nos últimos quatro anos, atuo na{" "}
						<span className={s.highlight}>CWI Software</span>, alocado de forma
						contínua em projetos para a{" "}
						<span className={s.highlight}>Coca-Cola</span>. Durante esse
						período, fui responsável por desenvolver uma ampla variedade de
						sistemas de alta visibilidade e impacto. Meu histórico inclui a
						entrega de soluções tecnológicas para grandes eventos, como{" "}
						<span className={s.highlight}>Rock in Rio</span> e{" "}
						<span className={s.highlight}>The Town</span>, além da criação de
						sites institucionais, da plataforma de gestão das{" "}
						<span className={s.highlight}>Caravanas de Natal</span> e de
						sistemas corporativos estratégicos utilizados pelas operações da
						Coca-Cola LATAM.
					</Trans>
				</p>
				<p>
					<Trans>
						Minha principal motivação profissional é traduzir regras de negócios
						complexas em interfaces{" "}
						<span className={s.highlight}>
							funcionais, acessíveis e de alto desempenho
						</span>
						. Busco o aprimoramento contínuo através do estudo de novas
						tecnologias e da aplicação das melhores práticas de engenharia de
						software. Meu objetivo é sempre entregar soluções robustas que gerem{" "}
						<span className={s.highlight}>valor real</span> para o cliente e
						garantam a melhor experiência possível para o usuário final.
					</Trans>
				</p>
			</div>
		</div>
	);
}
