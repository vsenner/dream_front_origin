import styles from './index.module.css';
import { FC, memo } from 'react';
import CategoriesItem from './CategoriesItem';
import { Category } from '../../interfaces';
import { useAppSelector } from "../../store";

interface CategoriesList {
  categories: Category[];
}

const CategoriesList: FC<CategoriesList> = ({ categories }) => {

  return (
    <div className={styles.categories_list}>
      {categories.map((c) => (
        <CategoriesItem
          name={c.name}
          _id={c._id}
          imageUrl={c.imageUrl}
          visible={c.visible}
          key={c._id}
        />
      ))}
    </div>
  );
};

export default memo(CategoriesList);
