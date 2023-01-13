import Header from '../../../src/components/Header';
import styles from '../index.module.css';
import Button, { ButtonType } from '../../../src/components/ui-kit/Button';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../../../src/store';
import ResultList from '../../../src/components/ResultList';
import FooterFade from '../../../src/components/FooterFade';
import { useEffect, useState } from "react";
import { CollectionState, setCollection } from "../../../src/store/reducers/current-collection";
import CollectionApi from "../../../src/api/collection";
import { useUser } from '@auth0/nextjs-auth0/client';
import { Orders } from "../../../src/interfaces";

const ResultGuest = () => {

  const router = useRouter();

  const dispatch = useAppDispatch();

  const {user} = useUser();

  const id = router?.query?.id as string;

  const [data, setData] = useState<CollectionState>({
    _id: "",
    expired: false,
    name: "",
    orders: [],
    type: "",
    upload: false
  })



  useEffect(() => {
    CollectionApi.getSpecificOne(id).then((r: CollectionState) => {

      console.log('R - ', r);
      console.log('USER - ', user);
      if(user){
        dispatch(setCollection(r))
        router.push('/result')
      }else{
        setData(r)
      }
    }).catch(e => {
      router.push('/error')
    })
  }, [dispatch, id, router, user]);

  if(!data?.orders?.length) return null;

  const onClickCreate = () => {
    router.push('/login');
  };

  return (
    <div className={styles.result}>
      <Header>
        <span
          onClick={onClickCreate}
          className={styles.result_guest_header}
        >
          Sign up
        </span>
      </Header>
      <div
        className={`${styles.result_container} ${styles.result_container_guest}`}
      >
        <Button
          onClick={onClickCreate}
          type={ButtonType.fade}
          className={styles.result_button}
        >
          Create your Own
        </Button>
        <ResultList orders={data.orders} />
      </div>
      <FooterFade onClick={onClickCreate}>
        <div className={styles.result_guest}>
          <span className={styles.result_guest_text}>Create your Own</span>
        </div>
      </FooterFade>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      protected: false,
    },
  };
}

export default ResultGuest;
