import { WebAPI } from '../configurations';
import { Logger } from '../utils';
import axios from 'axios';

export default store => next => action => {

  const APICallAction = action['API_CALL'];

  if (APICallAction === undefined) {
    return next(action);
  }

  let { endPointURL, requestType = "GET", requestData, actionTypes, contentType = "application/json", authenticationRequired = false } = APICallAction;

  if (typeof (endPointURL) !== "string") {
    Logger.logError("Invalid API Calls");
  }

  if (!Array.isArray(actionTypes) || actionTypes.length !== 3 || !actionTypes.every(actionType => typeof (actionType) === "string")) {
    Logger.logError("Invalid API Actions");
  }

  if (!(requestType === "GET" || requestType === "POST")) {
    Logger.logError("Invalid request type")
  }


  const actionWith = data => {
    const finalAction = Object.assign({}, action, data);
    delete finalAction['API_CALL'];
    return finalAction;
  }

  const [requested, succeed, failed] = actionTypes;
  next(actionWith({ type: requested }));

  return callAPI(endPointURL, requestType, requestData, contentType, authenticationRequired)
    .then(response => {
      next(actionWith({
        type: succeed,
        response: response,
        requestData: requestData
      }))
    })
    .catch(error => {
      next(actionWith({
        type: failed,
        response: error.response
      }))
    });
}

const callAPI = (endPointURL, requestType, requestData, contentType, authenticationRequired) => {
  const webAPIFullURL = WebAPI.ROOT_URL + endPointURL;

  axios.interceptors.response.use(function (response) {
    if (response.data.access_token && response.status === 200) {
      localStorage.setItem("access_token", response.data.access_token);
    }
    return response;
  });

  axios.interceptors.request.use(function (request) {
    return request;
  });


  const headers = {};
  headers['Content-Type'] = contentType;
  if (authenticationRequired) {
    headers['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
  }

  switch (requestType) {
    case 'POST':
      return axios.post(webAPIFullURL, requestData, {
        headers: { ...headers }
      })

    case 'GET':
      return axios.get(webAPIFullURL, {
        headers: { ...headers },
        params: requestData
      })

    default:
      return Promise.reject({ error: "Invalud request type" });

  }

}


