export interface IProps {
    user: any,
    dispatch: any,
}

export interface IState {
  total: number,
  current: number,
  visible: boolean,
  model: EditModel.EDIT | EditModel.ADD,
  info: any,
  dataSource: Array<any>,
}

export enum EditModel {
  EDIT = 'EDIT',
  ADD  = 'ADD'
}