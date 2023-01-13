export const apiUrl = process.env.BASE_API_URL;
type RequestType = "GET" | "POST" | "PUT" | "DELETE"


const postConfig = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const customFetch = async (url: string, type?: RequestType, body?: any, customLink?: boolean) => {
  let config: {
    method?: RequestType,
    body?: any
  } = {
    method: type || "GET"
  };

  if (type === "POST" || "PUT") config = {
    ...config,
    ...postConfig
  };

  if (body) config.body = JSON.stringify(body);

  return await fetch(customLink ? url : apiUrl + url, config).then(r => {
    return r.json();
  }).catch(e => {
    throw {
      error: e,
    };
  });
};
