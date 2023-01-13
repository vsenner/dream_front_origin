/* eslint-disable react/no-unescaped-entities */
import styles from './index.module.css';
import DreamboothImage from '../../../public/img/dreambooth_example.png';
import Footer from '../Footer';
import Button, {ButtonType} from '../ui-kit/Button';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import ExamplesApi from '../../api/examples';
import {apiUrl} from '../../api';
import {useRouter} from "next/router";

type Selected = { type: string; list: { name: string; image: string }[] };

type Data = {
  name: 'Female' | 'Male' | 'Couple';
  categories: [];
  image: string;
}[];

const HomeNew = () => {
  const [data, setData] = useState<Data>([]);



  const [selected, setSelected] = useState<Selected>({
    type: 'Male',
    list: [],
  });

  useEffect(() => {
    ExamplesApi.getExamples().then((r: Data) => {
      setData(r);
      setSelected({
        type: 'Male',
        list: r.find((e) => e.name === 'Male')?.categories || [],
      });
    });
  }, [setData]);

  const router = useRouter();

  if (!data.length) return null;

  const onClickCreate = () => {
    router.push('/login')
  }

  const setExamplesHandler = (type: 'Male' | 'Female' | 'Couple') => {
    const list = data.find((e) => e.name === type)?.categories || [];
    setSelected({
      type,
      list,
    });
  };

  return (
    <div className={styles.home_new}>
      <div className={styles.home_new_title}>
        Discover a vast selection of &nbsp;
        <span className={styles.home_new_title_fade}>150+</span>
        hand-crafted styles from different categories!
      </div>
      <div className={styles.home_new_examples}>
        <span className={styles.home_new_examples_title}>
          Check out some examples of the category by clicking <br/> on the
          subject!
        </span>
        <div className={styles.home_new_examples_container}>
          <div className={styles.home_new_examples_photos}>
            {data.map((e) => (
              <div
                key={e.name}
                onClick={() => setExamplesHandler(e.name)}
                className={`${styles.home_new_examples_img} ${
                  selected.type === e.name &&
                  styles.home_new_examples_img_selected
                }`}
              >
                <div className={styles.home_new_examples_item}>
                  <Image
                    src={`${apiUrl}/${e.image}`}
                    alt=""
                    fill
                    objectFit="contain"
                  />
                </div>
                <span>{e.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.examples_result}>
          {selected.list.map((c) => (
            <div key={c.name} className={styles.examples_item}>
              <span className={styles.examples_item_header}>{c.name}</span>
              <div className={styles.examples_item_image}>
                <Image
                  fill
                  objectFit="contain"
                  src={`${apiUrl}/${c.image}`}
                  alt={c.name}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.home_new_button}>
          <Button onClick={onClickCreate} type={ButtonType.fade}>
            <span>Create your dream photos</span>
          </Button>
        </div>
        <div className={styles.dreambooth}>
          <div>
            <h2 className={styles.dreambooth_title}>
              Using state-of-the-art <br/> Dreambooth technology
            </h2>
            <p className={styles.dreambooth_subtitle}>
              Dreambooth is the revolutionary open-source deep learning
              generation model that has been developed in 2022. With
              Dreambooth, you can teach artificial intelligence imaging
              models who you are simply by training them on your photos!
              Unlock the power of AI and generate any image in any style you
              desire, with yourself in it! Dreambooth allows us to experience
              the future of artificial intelligence imaging today.
            </p>
          </div>
          <div
            style={{position: 'relative'}}
            className={styles.dreambooth_img}
          >
            <Image
              layout="fill"
              objectFit="contain"
              src={DreamboothImage}
              alt="Dreambooth example"
            />
          </div>
        </div>
        <div className={styles.questions}>
          <h3 className={styles.questions_title}>Questions & Answers</h3>
          <div className={styles.questions_list}>
            <div className={styles.questions_item}>
              <div className={styles.questions_item_title}>
                What type of photos should I upload?
              </div>
              <div className={styles.questions_item_subtitle}>
                We recommend that you take 10 close-ups of your face, 3 side
                profile photos, 5 photos of yourself from the chest up and 3
                full body photos. It's best to have a variety of photos that
                are different from one another. Only the main subject should
                be in the photos. Photos with multiple facial expressions,
                different locations, backdrops and viewpoints are ideal.
                Also, don't just look directly into the camera, try looking
                away too! High quality photos are best. If you choose to wear
                makeup, make sure it's minimal in the photos, otherwise it
                can be exaggerated in the results. Nudity is not allowed.
              </div>
            </div>
            <div className={styles.questions_item}>
              <div className={styles.questions_item_title}>
                What do we do with the input photos?
              </div>
              <div className={styles.questions_item_subtitle}>
                The <b>ONLY</b> purpose of the photos you upload is to teach the AI
                model and create your AI pictures collection, after which
                they are erased from our and the GPU API's servers after 24
                hours. The AI model itself is being deleted after 10 days,
                giving you a period of time to play around with more
                categories and download or share your results.
              </div>
            </div>
            <div className={styles.questions_item}>
              <div className={styles.questions_item_title}>
                What do we do with the input photos?
              </div>
              <div className={styles.questions_item_subtitle}>
                The <b>ONLY</b> purpose of the photos you upload is to teach the AI model and create your AI pictures
                collection, after which they are erased from our and the GPU API's servers after 24 hours.
                The AI model itself is being deleted after 10 days, giving you a period of time to play around with more
                categories and download or share you results.
              </div>
            </div>
            <div className={styles.questions_item}>
              <div className={styles.questions_item_title}>
                What type of photos should I upload?
              </div>
              <div className={styles.questions_item_subtitle}>
                We recommend that you take 10 close-ups of your face, 3 side profile photos, 5 photos of yourself from
                the chest up and 3 full body photos. It's best to have a variety of photos that are different from one
                another. Only the main subject should be in the photos. Photos with multiple facial expressions,
                different locations, backdrops and viewpoints are ideal. Also, don't just look directly into the camera,
                try looking away too! High quality photos are best. If you choose to wear makeup, make sure it's minimal
                in the photos, otherwise it can be exaggerated in the results. Nudity is not allowed.
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};
export default HomeNew;
