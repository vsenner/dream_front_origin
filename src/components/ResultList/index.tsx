import React, { FC } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import { Orders } from "../../interfaces";


const ResultList: FC<{ orders?: Orders[] }> = ({
                                                 orders
                                               }) => {

  if (!orders) return null;
  return (
    <div className={styles.result_list}>
      {orders.map((order) => {
        let item;
        const isReady = order.ready ? order.ready : order.category.ready;
        if (!isReady) {
          item = (
            <div className={styles.result_item_content_processing}>
              <span>Processing...</span>
            </div>
          );
        } else {
          item = (
            <div className={styles.result_item_content}>
              {order.images.map((img_array, index) => {
                return img_array.map((img, i) => (
                  <div key={img+`${index}${i}`} className={styles.result_item_image}>
                    <Image fill src={img} alt={`results-${index}${i}`} />
                  </div>
                ));
              })}
            </div>
          );
        }
        return (
          <div key={order.category._id} className={styles.result_item}>
            <p className={styles.result_item_title}>{order.category.name}</p>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default ResultList;
