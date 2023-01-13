import { FC, memo, useState } from "react";
import RadioButton from '../ui-kit/RadioButton';
import styles from './index.module.css';
import {changeType} from "../../store/reducers/categories";
import { useAppDispatch, useAppSelector } from "../../store";

const SubjectList: FC<{subjects: any[]}> = ({subjects}) => {

  const _id = useAppSelector((state) => state.categories.type)

  const dispatch = useAppDispatch();

  if(!_id){
    dispatch(changeType(subjects[0]._id));
  }

  const onChangeHandler = (
    _id: string,
  ) => {
    dispatch(changeType(_id));
  };

  return (
    <div className={styles.subject_list}>
      {subjects.map((sub) => (
        <div key={sub.id} className={styles.subject_item}>
          <span className={styles.subject_item_name}>{sub.name}</span>
          <RadioButton
            onClick={onChangeHandler}
            id={sub._id}
          />
        </div>
      ))}
    </div>
  );
};

export default memo(SubjectList);
