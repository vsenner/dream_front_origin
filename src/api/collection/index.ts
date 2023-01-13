import { customFetch } from "../index";

const CollectionApi = {
  createCollectionPayment: async function(categories: string[]) {
    try {
      return await customFetch("/api/payment", "POST", { categories });
    } catch (e) {
      console.log("HERE ERROR - ", e);
    }
  },
  addCategoryPayment: async function(categories: string[], collection_id: string) {
    try {
      return await customFetch("/api/payment", "POST", { categories, collection: collection_id });
    } catch (e) {
      console.log("HERE ERROR - ", e);
    }
  },
  getCollections: async function() {
    try {
      return await customFetch("/api/collection");
    } catch (e) {
      console.log("HERE ERROR - ", e);
    }
  },
  putPaymentCollection: async function(name: string, subject: string, sid: string) {
    try {
      return await customFetch("/api/payment", "PUT", {
        name,
        subject,
        sid
      });
    } catch (e) {
      console.log("HERE ERROR - ", e);
    }
  },
  putPaymentCategory: async function(sid: string) {
    try {
      return await customFetch("/api/payment", "PUT", {
        sid
      });
    } catch (e) {
      return null;
    }
  },
  getUploadLinks: async function(col_id: string) {
    try {
      return await customFetch(`/api/upload?collection=${col_id}`);
    } catch (e) {
      console.log("HERE ERROR - ", e);
    }
  },
  confirmImageUpload: async function(col_id: string) {
    try {
      return await customFetch(`/api/upload`, "POST", {
        collection: col_id
      });
    } catch (e) {
      console.log("HERE ERROR - ", e);
    }
  },
  getSpecificOne: async function (id: string) {
    try {
      return await customFetch(`/api/collection/share/${id}`);
    } catch (e) {
      throw e
    }
  }
};

export default CollectionApi;