import {customFetch} from "../index";

const PriceApi = {
  getPrices: async function () {
    try {
      return customFetch(`/api/payment`)
        .then((r) => r.priceModel);
    } catch (e) {
      console.log('ERROR PRICES - ', e)
      return 'Error fetch';
    }
  },
};

export default PriceApi;
