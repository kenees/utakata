/**
 * @author kenevy
 * @date  20:05
 * @descript  ''
 */

import { SET_TAG_INFO } from '../constants/tag'
import { storage } from '@/util/util';
export interface IState {
  tag_list: any,
}

const INITIAL_STATE: IState = {
  tag_list: []
};

export default function counter(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case SET_TAG_INFO:
      storage.set('tag_list', JSON.stringify(action.data));
      return {
        ...state,
        tag_list: action.data,
      };
    default:
      return state
  }
}
