// import Cookies from 'js-cookie';
import axios from 'axios';

const USER = {
  id: 12,
  username: 'user1',
  role: ['PAGE1', 'PAGE2', 'PAGE3'],
};

export default {
  // login : (payload) => axios.post('http://staging.app.centerpoint.io/ums/api/account/login', payload),
  login(payload) {
    axios.post(
      'http://staging.app.centerpoint.io/ums/api/account/login',
      payload,
    );
  },
  // return new Promise((resolve) => {
  //   const maxInactiveTime = new Date(new Date().getTime() + 30 * 60 * 1000);

  //   Cookies.set('token_pld', '', { secure: true, expires: maxInactiveTime });
  //   Cookies.set('token_sec', '', { secure: true }); // from backend will also be httpOnly
  //   resolve(USER);
  // });

  logout() {},
  register() {},
  getCurrentDetails() {
    return new Promise(resolve => {
      resolve(USER);
    });
  },
};
