/**
 * @author kenevy
 * @date  20:08
 * @descript  ''
 */
import { SET_TAG_INFO } from '../constants/tag';

const setTagInfo = (data: any) => {
  return {
    type: SET_TAG_INFO,
    data: data || {}
  }
};

export {
  setTagInfo,
}
