import { SET_USER_INFO } from '../constants/user';

const setUserInfo = (data: any) => {
  return {
    type: SET_USER_INFO,
    data: data || {}
  }
};

export {
  setUserInfo,
}
