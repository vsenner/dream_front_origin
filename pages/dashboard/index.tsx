import styles from './index.module.css';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import RightArrow from '../../src/components/Icons/RightArrow';
import Button, {ButtonType} from '../../src/components/ui-kit/Button';
import {useRouter} from 'next/router';
import {useAppDispatch} from '../../src/store';
import { CollectionState, removeCollection, setCollection } from "../../src/store/reducers/current-collection";
import CollectionApi from "../../src/api/collection";
import { FC, useEffect } from "react";

const Dashboard:FC<{collections: CollectionState[]}> = ({collections}) => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(removeCollection());
  }, [dispatch])

  const onClickLogout = () => {
    router.push('/api/auth/logout');
  };

  const onClickAdd = () => {
    router.push('/start');
  };

  const onClickResult = (col: CollectionState) => {
    dispatch(setCollection(col));
    if (col.upload){
      router.push({
        pathname:  `/upload`,
        query: {
          id: col._id
        }
      });
    }else{
      router.push(`/result`);
    }
  };

  return (
    <div className={styles.dashboard}>
      <div>
        <Header>
          <span
            onClick={onClickLogout}
            className={styles.dashboard_logout}
          >
            Logout
          </span>
        </Header>
        <div className={styles.dashboard_container}>
          <h1 className={styles.dashboard_title}>Dashboard</h1>
          <span className={styles.dashboard_subtitle}>Here you can find your created collections and create new collections </span>
          <div className={styles.dashboard_list}>
            {collections.map((col) => (
              <div
                onClick={() => onClickResult(col)}
                key={col._id}
                className={styles.dashboard_item}
              >
                <span className={styles.dashboard_item_text}>
                  {col.name}
                </span>
                <span className={styles.dashboard_item_text}>
                  View <RightArrow/>
                </span>
              </div>
            ))}
          </div>
          <Button className={styles.dashboard_button} onClick={onClickAdd} type={ButtonType.fade}>
            Add new collection model
          </Button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export async function getStaticProps(context: any) {

  const collections = await CollectionApi.getCollections();

  return {
    props: {
      collections,
      protected: true,
    },
  };
}

export default Dashboard;
