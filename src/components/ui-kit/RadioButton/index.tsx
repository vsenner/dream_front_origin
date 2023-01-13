import { FC, memo, MouseEventHandler } from 'react';
import styles from './index.module.css';
import { useAppSelector } from "../../../store";

interface IRadioButton {
  onClick?: (id: string) => void;
  id: string;
}

const RadioButton: FC<IRadioButton> = ({
  onClick,
  id,
}) => {

  const selected = useAppSelector((state) => state.categories.type) === id

  const containerClassNames = [styles.radio_button];

  if (selected) {
    containerClassNames.push(styles.radio_button_active);
  }

  const onClickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!selected) {
      if (onClick) {
        onClick(id);
      }
    }
  };

  return (
    <div
      onClick={onClickHandler}
      className={containerClassNames.join(' ')}
    >
      {selected && (
        <div id={String(id)} className={styles.radio_button_content} />
      )}
    </div>
  );
};

export default memo(RadioButton);
