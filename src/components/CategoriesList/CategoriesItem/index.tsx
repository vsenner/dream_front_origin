import styles from './index.module.css';
import { FC, memo, } from 'react';
import CheckCircle from '../../CheckCircle';
import Image from 'next/image';
import { apiUrl } from '../../../api';
import {
  addCategory,
  removeCategory,
} from '../../../store/reducers/categories';
import { useAppDispatch, useAppSelector } from '../../../store';

interface CategoriesItem {
  _id: string;
  name: string;
  imageUrl: string;
  visible: boolean;
}

const CategoriesItem: FC<CategoriesItem> = ({
  _id = '',
  name = '',
  imageUrl = '',
  visible = false,
}) => {
  const { selectedCategories } = useAppSelector((state) => state.categories);

  const isPurchased = !!useAppSelector(
    (state) => state.currentCollection.orders,
  ).find((c) => _id === c.category._id);

  const selected = selectedCategories.includes(_id);

  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    if (!selected) {
      dispatch(addCategory(_id));
    }
    if (selected) {
      dispatch(removeCategory(_id));
    }
  };

  if (!visible) return null;

  return (
    <div
      onClick={onClickHandler}
      className={`${styles.categories_item} ${
        selected ? styles.categories_item_selected: ''
      } ${isPurchased ? styles.categories_item_purchased: ''}`}
    >
      <div className={styles.categories_item_header}>
        <span className={styles.categories_item_header_name}>{name}</span>

        {isPurchased ? (
          <span className={styles.categories_item_header_purchased}>
            Purchased
          </span>
        ) : (
          <CheckCircle selected={selected} />
        )}
      </div>
      <div className={styles.categories_item_image}>
        <Image fill src={`${apiUrl}/${imageUrl}`} alt={name} />
      </div>
    </div>
  );
};

export async function getStaticProps(context: any) {
  return {
    props: {
      apiUrl: apiUrl
    },
  };
}


export default memo(CategoriesItem);
