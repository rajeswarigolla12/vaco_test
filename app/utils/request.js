import axios from 'axios';

// TODO(@vedha) add auth token to every api call automatically
function wrap(axiosCall) {
  return (...args) => axiosCall(...args).then(response => response);
}

export default {
  get: wrap(axios.get),
  post: wrap(axios.post),
  put: wrap(axios.put),
  patch: wrap(axios.patch),
  delete: wrap(axios.delete),
};
