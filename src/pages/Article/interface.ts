export interface IProps {
    user: any,
    dispatch: any,
}

export interface IState {
  visible: boolean,
  total: number,
  current: number,
  dataSource: Array<any>,
}