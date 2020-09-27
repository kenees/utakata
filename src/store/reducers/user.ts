import { SET_USER_INFO } from '../constants/user'
import { storage } from '@/util/util';
export interface IState {
  user_info: any,
}

const INITIAL_STATE: IState = {
  user_info: JSON.parse(storage.get('user_info') || '{}'),
};

export default function counter(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case SET_USER_INFO:
      storage.set('user_info', JSON.stringify(action.data));
      return {
        ...state,
        user_info: action.data,
      };
    default:
      return state
  }
}
