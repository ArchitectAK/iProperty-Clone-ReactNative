import ApiManager, { METHOD_GET, } from "../manager/ApiManager"

export const fetchData = (url) => {
    return new Promise((resolve, reject) => {
      // call api CONTENT_TYPE_APP_JSON
      ApiManager(url, METHOD_GET).then((respone) => {
        resolve(respone);
      }).catch(error => {
        reject(error);
      })
    });
  }

  