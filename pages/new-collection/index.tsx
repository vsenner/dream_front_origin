import { FC, useEffect, useMemo } from "react";
import Header from "../../src/components/Header";
import styles from "./index.module.css";
import TextInput from "../../src/components/ui-kit/TextInput";
import SubjectList from "../../src/components/SubjectList";
import CategoriesList from "../../src/components/CategoriesList";
import CategoriesApi from "../../src/api/categories";
import { debounce } from "debounce";
import { useAppDispatch, useAppSelector } from "../../src/store";
import { changeName, clearState } from "../../src/store/reducers/categories";
import Footer from "../../src/components/Footer";
import PriceFooter from "../../src/components/FooterFade/PriceFooter";
import { setPaymentType } from "../../src/store/reducers/payment";

const NewCollection: FC<{ data: any[]}> = ({ data }) => {
  const { type } = useAppSelector(
    (state) => state.categories
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearState())
    dispatch(setPaymentType('none'))
  },[dispatch])



  const { memoizedCategories, memoizedSubjects } = useMemo(() => {
    return data.reduce((prev, e: any) => {
      if (e._id === type) {
        prev.memoizedCategories = e.categories;
      }
      prev.memoizedSubjects.push({
        name: e.name,
        _id: e._id
      });
      return prev;
    }, {
      memoizedCategories: [],
      memoizedSubjects: []
    });
  }, [data, type]);

  if (!memoizedCategories.length && !memoizedSubjects.length) return null;


  const onChangeName = debounce((v: string) => {
    dispatch(changeName(v));
  }, 500);


  return (
    <div className={styles.new_collection}>
      <Header />
      <div className={styles.new_collection_content}>
        <h1 className={styles.new_collection_title}>
          Create New Collection
        </h1>
        <div className={styles.new_collection_control}>
          <p className={styles.new_collection_subtitle}>Collection Name</p>
          <TextInput
            onChange={onChangeName}
            className={styles.new_collection_input}
            placeholder="This will be the name of your collection"
          />
          <p className={styles.new_collection_subtitle}>Subject:</p>
          <SubjectList subjects={memoizedSubjects} />
        </div>
        <h2
          className={[
            styles.new_collection_choose
          ].join(" ")}
        >
          Choose the categories
        </h2>
        <div className={styles.new_collection_choose_subtitle}>
          Take advantage of our great discounts when you select multiple categories!
          Each category includes 40 photos with different looks
          <br />
          <p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <b>Pick as many categories as you'd like:</b>
          </p>
        </div>
        <CategoriesList categories={memoizedCategories} />
      </div>
      <PriceFooter type='new-collection' totalCount={memoizedCategories.length}/>
      <Footer className={styles.footer_last} />
    </div>
  );
};

export async function getStaticProps(context: any) {
  const data = await CategoriesApi.getCategories();
  return {
    props: {
      data,
      protected: true
    }
  };
}

export default NewCollection;
