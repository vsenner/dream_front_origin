import { FC, ReactNode } from 'react';
import styles from './index.module.css';

export enum ButtonType {
  primary = 'primary',
  fade = 'fade',
  secondary = 'secondary',
  second_fade = 'second_fade',
}

interface IButton {
  children: ReactNode;
  type?: ButtonType;
  className?: any;
  onClick?: () => void;
}

const getButtonStyles = (
  type: ButtonType | undefined,
  secondClassName: string | undefined,
) => {
  const stylesList = [styles.button];

  if (secondClassName) stylesList.push(secondClassName);

  if (type === ButtonType.primary) stylesList.push(styles.button_primary);

  if (type === ButtonType.fade) stylesList.push(styles.button_fade);

  if (type === ButtonType.second_fade)
    stylesList.push(styles.button_second_fade);

  if (type === ButtonType.secondary)
    stylesList.push(styles.button_secondary);

  return stylesList;
};

const Button: FC<IButton> = ({
  children,
  type = ButtonType.primary,
  className = '',
  onClick,
}) => {
  const buttonClassName = getButtonStyles(type, className);

  return (
    <button onClick={onClick} className={buttonClassName.join(' ')}>
      {children}
    </button>
  );
};

export default Button;
