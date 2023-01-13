import {customFetch} from "../index";

const CategoriesApi = {
  getCategories: async function () {
    try {
      return await customFetch('/api/init')
        .then((r) => r.catalogue.subjects);
    } catch (e) {
      return 'Error fetch';
    }
  },
};

export default CategoriesApi;
