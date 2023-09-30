import s from "./page.module.css";
import { CARD_THEME, CARD_TYPE, Card } from "./components/Card";
import { ABOUT_ME_CARD, PROJECT_CARD } from "./constants/text";
import { PROJECTS } from "./constants/projects";

export default function Home() {
  return (
    <main className={s.main}>
      <div className={s.container}>
        <div className={s.content}>
          <Card
            title={ABOUT_ME_CARD.TITLE}
            description={ABOUT_ME_CARD.DESCRIPTION}
            type={CARD_TYPE.TEXT}
            theme={CARD_THEME.LIGHT}
          />
          <Card />
          <Card
            title={PROJECT_CARD.TITLE}
            type={CARD_TYPE.CAROUSEL}
            theme={CARD_THEME.DARK}
            itens={PROJECTS}
            icon="./project.svg"
          />
        </div>
      </div>
    </main>
  );
}
