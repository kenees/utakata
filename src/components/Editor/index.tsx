import React  from 'react';
import E from 'wangeditor';

interface IProps {
  initValue: string,
  onChange: (val: any) => void,
}

interface IState {

}


export default class Editor extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      editorContent: ''
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    const { onChange, initValue } = this.props;
    const elemMenu = this.refs.editorElemMenu;
    const elemBody = this.refs.editorElemBody;
    const editor = new E(elemMenu,elemBody)
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = (html: any) => {
      console.log(editor.txt.html())
      this.setState({
        // editorContent: editor.txt.text()
        editorContent: editor.txt.html()
      })
      onChange && onChange(editor.txt.html())
    }
    editor.customConfig.menus = [
      'head',  // 标题
      'bold',  // 粗体
      'fontSize',  // 字号
      'fontName',  // 字体
      'italic',  // 斜体
      'underline',  // 下划线
      'strikeThrough',  // 删除线
      'foreColor',  // 文字颜色
      'backColor',  // 背景颜色
      'link',  // 插入链接
      'list',  // 列表
      'justify',  // 对齐方式
      'quote',  // 引用
      'emoticon',  // 表情
      'image',  // 插入图片
      'table',  // 表格
      'video',  // 插入视频
      'code',  // 插入代码
      'undo',  // 撤销
      'redo'  // 重复
    ]
    editor.customConfig.uploadImgShowBase64 = true
    editor.create()

    editor.txt.html(initValue)
  };

  render() {
    return (
      <div className="shop">
        <div className="text-area" >
          <div ref="editorElemMenu"
               style={{backgroundColor:'#f1f1f1',border:"1px solid #ccc"}}
               className="editorElem-menu">

          </div>
          <div
            style={{
              padding:"0 10px",
              overflowY:"scroll",
              height:300,
              border:"1px solid #ccc",
              borderTop:"none"
            }}
            ref="editorElemBody" className="editorElem-body">
          </div>
        </div>
      </div>
    );
  }
}