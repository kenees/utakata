import {EditModel} from '@/const';

export interface IProps {
    user: any,
    dispatch: any,
}

export interface IInfo {
  tag_id: number | null,
  tag_name: string,
  default_color: string,
  is_valid: boolean,
}

export interface IState {
  total: number,
  current: number,
  visible: boolean,
  model: EditModel.EDIT | EditModel.ADD,
  info: IInfo | null,
  dataSource: Array<any>,
}


