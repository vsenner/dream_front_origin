import { ChangeEventHandler, FC } from 'react';
import styles from './index.module.css';

interface ITextInput {
  placeholder?: string;
  onChange?: (v: string) => void;
  className?: string;
}

const TextInput: FC<ITextInput> = ({
  placeholder,
  onChange,
  className,
}) => {
  const classNames = [styles.text_input];

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  if (className) {
    classNames.push(className);
  }

  return (
    <input
      placeholder={placeholder}
      onChange={onChangeHandler}
      className={classNames.join(' ')}
    />
  );
};

export default TextInput;
