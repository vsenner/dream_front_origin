import Header from "../../src/components/Header";
import styles from "./index.module.css";
import Button, { ButtonType } from "../../src/components/ui-kit/Button";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../src/store";
import ResultList from "../../src/components/ResultList";
import Footer from "../../src/components/Footer";
import FooterFade from "../../src/components/FooterFade";
import { MouseEventHandler, useEffect, useState } from "react";
import {isMobile} from 'react-device-detect';


const Result = () => {

  console.log('PRIVATE RENDER');

  //
  // const router = useRouter();
  //
  // const [copy, setCopy] = useState<boolean>(false)
  //
  // const { name, expired, _id, orders } = useAppSelector((state) => state.currentCollection);
  //
  //
  // // if (!name) router.push("/");
  //
  // const onClickAddCategories = () => {
  //   router.push("/add-category");
  // };
  //
  // const onClickDashboard = () => {
  //   router.push("/dashboard");
  // };

  const onClickShare: MouseEventHandler<HTMLSpanElement> = async (e) => {
    if(navigator.share) {
      await navigator.share({
        text: 'Share Collection',
        title: 'Share Collection',
        url: window.location.href + `/${3232}`
      })
    }
    // }else {
    //   setCopy(true);
    //   await navigator.clipboard.writeText(window.location.href + `/${54353}`);
    //   setTimeout(() => {
    //     setCopy(false);
    //   }, 1000);
    // }
  };

  return (
    <div className={styles.result}>
      <Header>
        <span onClick={onClickShare} className={`${styles.result_header}`}>Share collection</span>
      </Header>
      {/*<div className={styles.result_container}>*/}
      {/*  <p onClick={onClickDashboard} className={styles.result_text}>*/}
      {/*    {"<"} Back to Dashboard*/}
      {/*  </p>*/}
      {/*  {!expired && <Button*/}
      {/*    onClick={onClickAddCategories}*/}
      {/*    type={ButtonType.fade}*/}
      {/*    className={styles.result_button}*/}
      {/*  >*/}
      {/*    <span className={styles.result_button_title}>*/}
      {/*      Add Categories*/}
      {/*    </span>*/}
      {/*    <span className={styles.result_button_subtitle}>*/}
      {/*      Available for 10 more days*/}
      {/*    </span>*/}
      {/*  </Button>}*/}

      {/*  <ResultList orders={orders} />*/}
      {/*</div>*/}
      {/*{!expired && <FooterFade onClick={onClickAddCategories}>*/}
      {/*  <div className={styles.result_guest}>*/}
      {/*    <span className={styles.result_guest_text}>Add Categories</span>*/}
      {/*  </div>*/}
      {/*</FooterFade>}*/}
      {/*<Footer />*/}
    </div>
  );
};

export async function getStaticProps(context: any) {
  return {
    props: {
      // protected: false
    }
  };
}

export default Result;
