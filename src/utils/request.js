import axios from 'axios';
import moment from 'moment';

const reqHeaders = {
  'Content-Type': 'application/json',
  appId: '111',
  appVersion: '2.0.1',
  appType: '0',
};


export default function request(api, params, reqType) {
  let url = baseUrl() + encodeURI(api);
  let method = reqType || 'get';

  return  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      headers: reqHeaders,
      data: method === 'post' ? params : {},
      params: method === 'get' ? params : {},
    })
      .then((response) => response.data)
      .then((data) => {
        console.debug('返回', JSON.stringify(data));
      })
      .catch((error) => {
        console.debug(error);
        reject(error);
      });
  });
}
