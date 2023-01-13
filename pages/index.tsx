import Header from '../src/components/Header';
import Button, { ButtonType } from '../src/components/ui-kit/Button';
import HomeNew from '../src/components/HomeNew';
import { FC, MouseEventHandler } from 'react';
import ProfileSVG from '../src/components/Icons/profile';
import HomeImg from '../public/img/home.png';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0/client';
import {loadStripe} from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  // @ts-ignore
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Home: FC = () => {
  const { user } = useUser();

  const isAuth = !!user;

  const router = useRouter();

  const onClickLogin = () => {
    router.push('/login');
  };

  const onClickManage = () => {
    router.push('/dashboard');
  };

  const onClickProfile = () => {
    router.push('/dashboard');
  };

  const onClickShare: MouseEventHandler<HTMLSpanElement> = async (e) => {
    console.log('CLICKED');
    if(navigator.share) {
      console.log('INSIDE SHARE');
      await navigator.share({
        text: 'Share Collection',
        title: 'Share Collection',
        url: window.location.href + `/${3232}`
      })
    }else{
      console.log('OUTSIDE SHARE');
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
    <div>
      <div className={styles.home_container}>
        <div className={styles.home_header}>
          <Header withLogo={true}>
            {isAuth && <ProfileSVG onClick={onClickProfile} />}
            {!isAuth && (
              <span className={styles.home_signup} onClick={onClickShare}>
              Sign Up
            </span>
            )}
          </Header>
          <div className={`${styles.home_content} ${styles.home_content_header}`}>

            <div className={styles.home_content_image}>
              <Image
                src={HomeImg}
                className={styles.home_image}
                alt="Home image"
              />

            </div>
            <div className={styles.home_content_info}>
              <h1 className={styles.home_title}>
                Unleash the power of AI
                <br />
                on your photos.
              </h1>
              <h3 className={styles.home_subtitle}>
                Utilizing artificial intelligence, we can create amazing photos
                that everyone&apos;s dreaming about!
              </h3>
              <Button
                onClick={isAuth ? onClickManage : onClickLogin}
                type={ButtonType.fade}
                className={styles.home_button}
              >
                {isAuth && (
                  <span className={styles.home_button_text}>
                Manage your photos
              </span>
                )}
                {!isAuth && (
                  <span className={styles.home_button_text}>
                Create your dream photos
              </span>
                )}
              </Button>
            </div>


          </div>
        </div>
        <div className={styles.home_content}>
          {!isAuth && <HomeNew />}
          {isAuth && (
            <div className={styles.home_content_auth}>
            <span>
              Choose from more than 150 hand-crafted styles and categories!
            </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
