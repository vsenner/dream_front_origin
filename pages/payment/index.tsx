import styles from "./index.module.css";
import Header from "../../src/components/Header";
import SuccessPayment from "../../src/components/Icons/SuccessPayment";
import Button, { ButtonType } from "../../src/components/ui-kit/Button";
import { useRouter } from "next/router";
import CollectionApi from "../../src/api/collection";
import { deleteFromLocalStorage, getLocalStorageItem } from "../../src/utils";

const Payment = () => {
  const router = useRouter();

  const { success, sid, canceled }: {
    success?: boolean,
    sid?: string,
    canceled?: boolean
  } = router.query;

  const data = getLocalStorageItem<{
    type: string,
    name: string,
    paymentType: string
  }>("purchase_info");

  if (!success && !sid && !canceled) return router.push("/");
  if (!data) return  router.push("/");

  const isAddCategories = data.paymentType !== "add-categories";

  const onClickDashboard = () => {
    router.push("/dashboard");
  };

  const onEnd = () => {
    setTimeout(() => {
      deleteFromLocalStorage("purchase_info")
      router.push( '/dashboard')
    }, 2000)
  }


  if (success && sid) {
    console.log('DATA - ' ,data);
    if (data && data.paymentType === 'new-collection') {
      CollectionApi.putPaymentCollection(data.name, data.type, sid).then((r) => {
        setTimeout(() => {
          deleteFromLocalStorage("purchase_info")
          router.push( {
            pathname: '/upload',
            query: {
              id: r.collection
            }
          })
        }, 2000)
      });
    }else{
      if(data.paymentType === 'add-categories'){
        CollectionApi.putPaymentCategory(sid).then((r) => {
          setTimeout(() => {
            onEnd()
          }, 2000)
        });
      }
    }
  }else {
    onEnd();
  }


  return (
    <div className={styles.payment}>
      <Header />
      <div className={styles.payment_container}>
        {success && (
          <div
            className={`${styles.payment_success} ${
              !isAddCategories && styles.payment_success_fill
            }`}
          >
            {isAddCategories && <SuccessPayment />}
            <h1 className={styles.payment_status}>Payment Success</h1>
            {isAddCategories && (
              <span className={styles.payment_action}>
                Redirecting you...
              </span>
            )}
          </div>
        )}
        {!success && (
          <div className={styles.payment_failed}>
            <h1 className={styles.payment_status}>Payment Failed</h1>
            <span className={styles.payment_action}>
              Redirecting you...
            </span>
          </div>
        )}

        {success && !isAddCategories && (
          <div className={styles.payment_new_category}>
            <h2 className={styles.payment_new_category_title}>
              Artificial intelligence is working on your images...
            </h2>
            <span className={styles.payment_new_category_subtitle}>
              This will take a few minutes to generate. we will send you an
              email once the results are ready to your registered email.
            </span>
            <Button onClick={onClickDashboard} type={ButtonType.primary}>
              Your Dashboard
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export async function getStaticProps(context: any) {
  return {
    props: {
      protected: true
    }
  };
}

export default Payment;
