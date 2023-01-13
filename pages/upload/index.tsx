import styles from "./index.module.css";
import LinkIcon from "../../src/components/Icons/Link";
import Button, { ButtonType } from "../../src/components/ui-kit/Button";
import Header from "../../src/components/Header";
import { useRouter } from "next/router";
import { ChangeEventHandler, LegacyRef, useCallback, useEffect, useRef, useState } from "react";
import Footer from "../../src/components/Footer";
import CollectionApi from "../../src/api/collection";
import { deleteFromLocalStorage, getLocalStorageItem, setLocalStorage } from "../../src/utils";

const Upload = () => {
  const router = useRouter();

  const id = router?.query?.id as string;

  const [links, setLinks] = useState<{
    expiresIn: number,
    urls: string[]
  } | null>(null);

  const [files, setFiles] = useState<FileList | null>(null);
  const [isEnough, setIsEnough] = useState<boolean | null>(null);

  useEffect(() => {
    if (id) {
      const tempLinks = getLocalStorageItem<{expiresIn: number, urls: string[], startDate: number}>(id);

      const deadline = tempLinks && tempLinks.startDate + tempLinks.expiresIn * 1000 || Date.now();

      if(deadline- Date.now() > 0){
        const links = getLocalStorageItem<{expiresIn: number; urls: string[]} | null>(id);
        setLinks(links);
      }else {
        CollectionApi.getUploadLinks(id).then((r) => {
          setLinks(r)
          setLocalStorage(id , {
            ...r,
            startDate: Date.now(),
          });
        });
      }
    }
  }, [id]);

  const inputRef = useRef<HTMLInputElement>();

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.target.files) {
      const count = e.target.files.length;
      if (count >= 10) {
        setFiles(e.target.files);
        if (count <= 20) {
          setIsEnough(true);
        } else {
          setFiles(null);
          setIsEnough(false);
        }
      } else {
        setFiles(e.target.files);
        if (isEnough === null) {
          setIsEnough(false);
        }
      }
    }
  }, [isEnough]);

  if (!id || !links) return null;


  const onClickTerms = () => {
    router.push("/terms");
  };

  const onClickPrivacy = () => {
    router.push("/privacy");
  };

  const onSubmit = async () => {
    if (files?.length) {
      try {
        const isAllLinksOk = await sendPhotos(files, links.urls);
        if(!isAllLinksOk){
          await CollectionApi.getUploadLinks(id).then(async (r) => {
            await sendPhotos(files, r.urls)
          });
        }
        const confirm = await CollectionApi.confirmImageUpload(id);
        deleteFromLocalStorage(id);
        if(!confirm.error){
          router.push('/dashboard')
        }
      } catch (e) {
      }
    }
  };


  const onClickUpload = () => {
    inputRef.current?.click();
  };

  const correct = files?.length
    ? files?.length >= 10 && files?.length <= 20
    : false;
  return (
    <div className={styles.upload}>
      {!correct && (
        <input
          accept="image/png image/jpg"
          ref={inputRef as LegacyRef<HTMLInputElement>}
          style={{ visibility: "hidden" }}
          onChange={onChange}
          type="file"
          multiple
        />
      )}
      <Header />
      <div className={styles.upload_container}>
        <div className={styles.upload_title}>Upload your photos</div>
        <span className={styles.upload_subtitle}>
          ⚠️ Make sure you read the requirements, if you want to get the
          best possible results.
        </span>
        <div className={styles.upload_rules}>
          <div className={styles.upload_rules_green}>
            ✅ Photos with different expression <br />
            ✅ Photos in different locations, backgrounds and angles <br />
            ✅ Photos at different times of day <br />
            ✅ Look into the camera and also away <br />
            ✅ For Couples- make sure EVERY photo has BOTH of you in it
            <br />✅ Good quality, size of images {">"} 512x512px <br />
          </div>
          <div className={styles.upload_rules_red}>
            ❌ No other people in your photos <br />
            ❌ No duplicate photos <br />
            ❌ No black and white photos <br />
            ❌ Not only selfies <br />
            ❌ Without sunglasses <br />
            ❌ No children <br />
            ❌ No nudes <br />
          </div>
        </div>
        <span className={styles.upload_recommend}>
          For the best results, we recommend you upload a variety of 10
          close-ups, 3 side profiles, 5 chest-ups.
        </span>
        {!isEnough && (
          <>
            <div className={styles.upload_process}>
              <div className={styles.upload_process_rules}>
                <h2>Upload 10-20 photos of your subject</h2>
                <span>JPG/PNG up to 5MB</span>
              </div>
            </div>
            <div onClick={onClickUpload} className={styles.upload_field}>
              <LinkIcon />
              <span className={styles.upload_field_text}>
                Upload photos
              </span>
            </div>
          </>
        )}
        <div
          className={`${styles.upload_process_desc} ${styles.upload_subtitle}`}
        >
          Your photos will be deleted immediately from our severs after the
          results are ready.
        </div>
        {isEnough !== null && !isEnough && (
          <Button
            onClick={onClickUpload}
            className={styles.upload_process_desc}
            type={ButtonType.secondary}
          >
            {files?.length && files?.length < 10
              ? "Upload at least 10 photos"
              : "Upload max 20 photos"}
          </Button>
        )}
        {correct && (
          <Button
            onClick={onSubmit}
            className={styles.upload_process_desc}
            type={ButtonType.fade}
          >
            CREATE
          </Button>
        )}
        <p className={styles.upload_footer_text}>
          By submitting, you agree to the
          <span onClick={onClickTerms}>terms & conditions</span> and
          <span onClick={onClickPrivacy}>Privacy Policy</span> and certify
          that the photos you have provided meet the requirements explained
          above. Models that are trained poorly due to low-quality photos
          are not eligible for a refund.
        </p>
      </div>
      <Footer />
    </div>
  );
};

const sendPhotos = async (files: FileList, urls: string[]) => {
  let isAllLinksOk = true;
  await Promise.allSettled(urls.map(async (url, index) => {
    if(files[index]) {
      const result = await fetch(url, {
        method: "PUT",
        body: files[index]
      });

      if(result.status === 403 && isAllLinksOk){
        isAllLinksOk = false
      }
    }
  }));
  return isAllLinksOk;
}

export async function getStaticProps(context: any) {
  return {
    props: {
      protected: true
    }
  };
}

export default Upload;
