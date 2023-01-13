import styles from "./index.module.css";
import Header from "../../src/components/Header";
import Clock from "../../src/components/Icons/Clock";
import StripeCheck from "../../src/components/Icons/StripeCheck";
import Button, { ButtonType } from "../../src/components/ui-kit/Button";
import { useAppDispatch, useAppSelector } from "../../src/store";
import { useRouter } from "next/router";
import { setPaymentStatus } from "../../src/store/reducers/payment";
import Footer from "../../src/components/Footer";
import { FC, useEffect, useState } from "react";
import CollectionApi from "../../src/api/collection";
import PriceApi from "../../src/api/price";
import { setLocalStorage } from "../../src/utils";

const addCategory =
  "we will send you an email with your result when they are ready.";
const newCollection =
  "After you have made the payment for model training, you will be able to upload your photos. Our team will then train the model, create your photos, and do the post-processing. As soon as the result are ready, we will send you an email.";

const Checkout: FC<{ prices: any }> = ({ prices }) => {

  const [session, setSession] = useState<string>("");
  const router = useRouter();

  const { paymentType } = useAppSelector(
    (state) => state.payment
  );
  const { selectedCategories, name, type } = useAppSelector(
    (state) => state.categories
  );

  const id = useAppSelector(
    (state) => state.currentCollection._id
  );

  // @ts-ignore
  const price = selectedCategories.length === 0 ? 0 : prices && prices[selectedCategories.length]?.price;

  useEffect(() => {
    if (selectedCategories.length) {
      if (paymentType === "new-collection") {
        CollectionApi.createCollectionPayment(selectedCategories).then((r: any) => {
          setSession(r.url);
        });
      } else {
        CollectionApi.addCategoryPayment(selectedCategories, id).then((r: any) => {
          setSession(r.url);
        });
      }
    }
  }, [id, paymentType, selectedCategories, setSession]);

  const isAddCategories = paymentType === "add-categories";

  if (paymentType === "none") {
    router.push("/");
  }


  const onCheckout = () => {
    setLocalStorage("purchase_info", {
      selectedCategories,
      name,
      type,
      paymentType
    });
    window.location.href = session;
  };

  if (!session || !prices) return null;

  return (
    <div className={styles.checkout}>
      <Header />
      <div className={styles.checkout_container}>
        <div className={styles.checkout_container_content}>
          <h1 className={styles.checkout_title}>What to expect?</h1>
          <span className={styles.checkout_subtitle}>
          {isAddCategories ? addCategory : newCollection}
        </span>
          <div className={styles.checkout_info}>
            <div className={styles.checkout_list}>
              <div className={styles.checkout_item}>
                <Clock />
                <p className={styles.checkout_time}>
                  Current processing time: {"< "}90 minutes
                </p>
              </div>
              <div className={styles.checkout_item}>
                <StripeCheck />
                <span>{selectedCategories.length} Categories, {selectedCategories.length * 40} photos</span>
              </div>
              <div className={styles.checkout_item}>
                <StripeCheck />
                <span>One time payment. No subscription. </span>
              </div>
            </div>
          </div>
          <Button onClick={onCheckout} type={ButtonType.second_fade}>
          <span className={styles.checkout_button_text}>
            Stripe Checkout ({price}$)
          </span>
          </Button>
        </div>
        <Footer />
      </div>

    </div>
  );
};

export async function getStaticProps(context: any) {
  const prices = await PriceApi.getPrices();
  return {
    props: {
      prices,
      protected: true
    }
  };
}

export default Checkout;
