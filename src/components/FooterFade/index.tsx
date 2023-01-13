import styles from './index.module.css';
import { FC, ReactNode } from 'react';

interface FooterFade {
  children: ReactNode;
  onClick: () => void;
}

const FooterFade: FC<FooterFade> = ({ children, onClick }) => {
  return (
    <div className={styles.footer_fade_container}>
      <div onClick={onClick} className={styles.footer_fade}>
        {children}
      </div>
    </div>
  );
};

export default FooterFade;
