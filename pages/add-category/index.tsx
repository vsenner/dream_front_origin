import React, { FC, useEffect, useMemo } from "react";
import styles from './index.module.css';
import Header from '../../src/components/Header';
import CategoriesList from '../../src/components/CategoriesList';
import { useAppDispatch, useAppSelector } from "../../src/store";
import CategoriesApi from '../../src/api/categories';
import { removeCollection } from '../../src/store/reducers/current-collection';
import { useRouter } from 'next/router';
import PriceFooter from "../../src/components/FooterFade/PriceFooter";
import { clearState } from "../../src/store/reducers/categories";
import { setPaymentType } from "../../src/store/reducers/payment";

const AddCategory:FC<{data: any[]}> = ({data}) => {

  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(clearState())
    dispatch(setPaymentType('none'))
  },[dispatch])

  const { _id } = useAppSelector((state) => state.currentCollection);

  if(!_id) router.push('/dashboard')


  const onClickDashboard = () => {
    dispatch(removeCollection());
    router.push('/dashboard');
  };

  const memoizedCategories = useMemo(() => {
    return data[0]?.categories;
  }, [data]);

  if (!memoizedCategories.length) return null;

  return (
    <div className={styles.add_category}>
      <Header />
      <div className={styles.add_category_content}>
        <p onClick={onClickDashboard} className={styles.add_category_text}>
          {'<'} Back to Dashboard
        </p>
        <h1 className={styles.add_category_title}>
          Choose more Categories
        </h1>
        <div className={styles.add_category_choose_subtitle}>
          Each category will generate 40 photos in different styles.
          <br />
          <p>
            <b>Choose as many categories as you want.</b>
          </p>
        </div>
        <CategoriesList categories={memoizedCategories} />
      </div>
      <PriceFooter totalCount={memoizedCategories.length} type='add-categories'/>
    </div>
  );
};

export async function getStaticProps(context: any) {
  const data = await CategoriesApi.getCategories();
  return {
    props: {
      data,
      protected: true,
    },
  };
}

export default AddCategory;
