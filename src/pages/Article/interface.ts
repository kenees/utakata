import {EditModel} from "@/const";

export interface IProps {
    user: any,
    tag: any,
    dispatch: any,
}

export interface IInfo {
  article_id: number,
  article_title: string,
  article_describe: string,
  article_content: string,
  article_tag: string,
  is_valid: boolean,
  create_at: number,
  update_at: number,
  reading_number:number,
  edit_user: string,
  comment_number: string,
}

export interface IState {
  visible: boolean,
  total: number,
  current: number,
  model: EditModel.EDIT | EditModel.ADD,
  info: IInfo | null,
  dataSource: Array<any>,
}