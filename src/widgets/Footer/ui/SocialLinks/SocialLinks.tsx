import clsx from "clsx";
import styles from "./SocialLinks.module.css";
import FigmaIcon from "@shared/assets/icons/figma.svg?react";
import TelegramIcon from "@shared/assets/icons/telegram_white.svg?react";
import YoutubeIcon from "@shared/assets/icons/youtube.svg?react";
import TictocIcon from "@shared/assets/icons/tictoc.svg?react";
import GithubIcon from "@shared/assets/icons/github_white.svg?react";

interface SocialLinks {
  className?: string;
}
export const SocialLinks: React.FC<SocialLinks> = ({ className }) => {
  return (
    <ul className={clsx(styles.SocialLinks, className)}>
      <li>
        <a href="/">
          <FigmaIcon className={styles['footer-icon']}/>
        </a>
      </li>
      <li>
        <a href="/">
          <TelegramIcon className={styles['footer-icon']}/>
        </a>
      </li>
      <li>
        <a href="/">
          <YoutubeIcon className={styles['footer-icon']}/>
        </a>
      </li>
      <li>
        <a href="/">
          <TictocIcon className={styles['footer-icon']}/>
        </a>
      </li>
      <li>
        <a href="/">
          <GithubIcon className={styles['footer-icon']}/>
        </a>
      </li>
    </ul>
  );
};
