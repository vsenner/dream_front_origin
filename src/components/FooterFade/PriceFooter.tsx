import React, { FC, memo, useEffect, useMemo, useState } from "react";
import styles from "../../../pages/new-collection/index.module.css";
import FooterFade from "./index";
import { useAppDispatch, useAppSelector } from "../../store";
import { setPaymentType } from "../../store/reducers/payment";
import { useRouter } from "next/router";
import PriceApi from "../../api/price";

const PriceFooter: FC<{
  totalCount: number,
  type: "new-collection" | "none" | "add-categories"
}> =
  ({
     totalCount,
     type
   }) => {

    const { selectedCategories, name } = useAppSelector(
      (state) => state.categories
    );

    const [prices, setPrices] = useState([]);

    useEffect(() => {
      PriceApi.getPrices().then(res => setPrices(res));
    }, []);

    const pricesMemo = useMemo(() => {
      return prices;
    }, [prices]);

    const dispatch = useAppDispatch();

    const router = useRouter();

    if (!pricesMemo) return null;

    const onSubmit = () => {
      const correct = selectedCount >= 1 && selectedCount <= totalCount ? type === "new-collection" ? name !== "" : type === "add-categories" : false;
      if (correct) {
        dispatch(setPaymentType(type));
        router.push("/checkout");
      }
    };
    const selectedCount = selectedCategories.length;

    console.log("sel -", totalCount);


    // @ts-ignore
    const price = selectedCount === 0 ? 0 : pricesMemo && pricesMemo[selectedCount]?.price;

    return (
      <FooterFade onClick={onSubmit}>
        <div className={styles.footer}>
          <span className={styles.footer_selected}>
            {selectedCount}/{totalCount} Selected (
            {price}$)
          </span>
          <span className={styles.footer_continue}>Click to continue</span>
        </div>
      </FooterFade>
    );
  };

export default memo(PriceFooter);