import cn from "classnames";
import s from "./Card.module.css";
import { CardCarousel } from "./cards/CardCarousel";
import Image from "next/image";

export const CARD_TYPE = {
  CAROUSEL: "CAROUSEL",
  TEXT: "TEXT",
};

export const CARD_THEME = {
  DARK: "DARK",
  LIGHT: "LIGHT",
};

//Remover optionals
export function Card(props: {
  title?: any;
  description?: any;
  type?: any;
  theme?: any;
  icon?: any;
  itens?: any;
}) {
  const { title, description, type, theme, icon, itens } = props;

  function renderContent() {
    if (type === CARD_TYPE.TEXT) {
      return (
        <>
          <p className={s.description}>{description}</p>
        </>
      );
    }

    if (type === CARD_TYPE.CAROUSEL) {
      return <CardCarousel itens={itens} />;
    }
  }

  // Renderizar icone
  function renderIcon() {
    if (icon) {
      return (
        <Image
          src={icon}
          alt="Ícone da sessão."
          className={s.icon}
          width={25}
          height={25}
          priority
        />
      );
    }

    return null;
  }

  return (
    <div
      className={cn(s.card, {
        [s.cardLight]: theme === CARD_THEME.LIGHT,
        [s.cardDark]: theme === CARD_THEME.DARK,
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
