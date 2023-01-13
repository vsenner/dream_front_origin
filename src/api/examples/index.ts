import {apiUrl, customFetch} from "../index";

const ExamplesApi = {
  getExamples: async function () {
    try {
      return await customFetch(
        `/storage/assets/mainpage/examples/examples.json`
      ).then((r) => r.subjects);
    } catch (e) {
      return 'Error fetch';
    }
  },
};

export default ExamplesApi;
