import styles from './index.module.css';
import Header from '../../src/components/Header';
import ProfileSVG from '../../src/components/Icons/profile';
import Button, { ButtonType } from '../../src/components/ui-kit/Button';
import Image from 'next/image';
import Dreambooth from '../../public/img/home.png';
import { useRouter } from 'next/router';
import Footer from "../../src/components/Footer";

const Start = () => {
  const router = useRouter();

  const onClickGo = () => {
    router.push('/new-collection');
  };

  return (
    <div className={styles.flow_start}>
      <Header>
        <ProfileSVG />
      </Header>
      <div className={styles.flow_start_content}>
        <h1 className={styles.flow_start_title}>
          3 Steps to create your AI photo collection
        </h1>
        <div className={styles.flow_start_list}>
          <span className={styles.flow_start_item}>
            ✅ Create a new collection and select as many categories as you
            want.
          </span>
          <span className={styles.flow_start_item}>
            ✅ Checkout securely with Stripe.
          </span>
          <span className={styles.flow_start_item}>
            ✅ Upload your photos based on the instruction.
          </span>
        </div>
        <Button
          onClick={onClickGo}
          className={styles.flow_start_button}
          type={ButtonType.fade}
        >
          Let’s Go
        </Button>
        <div className={styles.flow_start_examples}>
          <Image layout="fill" src={Dreambooth} alt="Example of result" />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export async function getStaticProps(context: any) {
  return {
    props: {
      protected: true,
    },
  };
}

export default Start;
