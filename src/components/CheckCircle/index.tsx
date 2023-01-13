import { FC } from 'react';
import Check from '../Icons/Check';
import styles from './index.module.css';

interface CheckCircle {
  selected: boolean;
}

const CheckCircle: FC<CheckCircle> = ({ selected = true }) => {

  return (
    <div
      className={`${styles.check_circle} ${
        selected && styles.check_circle_selected
      }`}
    >
      <Check />
    </div>
  );
};

export default CheckCircle;
