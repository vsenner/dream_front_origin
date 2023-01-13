import styles from './index.module.css';
import { useRouter } from 'next/router';
import {FC} from "react";

const Footer:FC<{className?: string}> = ({className = ''}) => {
  const router = useRouter();

  const onClickTerms = () => {
    router.push('/terms');
  };

  const onClickPrivacy = () => {
    router.push('/privacy');
  };

  return (
    <div className={`${styles.footer} ${className}`}>
      <h4 className={styles.footer_title}>TheDream.ai</h4>
      <p className={styles.footer_subtitle}>
        @ 2022 TheDream.AI All rights reserved.
      </p>
      <p onClick={onClickTerms} className={styles.footer_terms}>
        Terms and conditions
      </p>
      <p
        onClick={onClickPrivacy}
        className={styles.footer_privacy + ' ' + styles.footer_terms}
      >
        Privacy Policy
      </p>
    </div>
  );
};

export default Footer;
