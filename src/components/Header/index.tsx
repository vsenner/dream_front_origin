import { FC, ReactNode } from 'react';
import styles from './index.module.css';
import DreamLogo from '../Icons/DreamLogo';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../../store';
import { removeCollection } from '../../store/reducers/current-collection';

const Header: FC<{ children?: ReactNode; withLogo?: boolean }> = ({
  children = '',
  withLogo = false,
}) => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const onClickLogo = () => {
    dispatch(removeCollection());
    router.push('/');
  };

  return (
    <div className={styles.header}>
      <div className={styles.header_logo_container}>
        {withLogo && <DreamLogo className={styles.header_logo} />}
        <span className={styles.header_title} onClick={onClickLogo}>
          TheDream.ai
        </span>
      </div>
      {children}
    </div>
  );
};

export default Header;
