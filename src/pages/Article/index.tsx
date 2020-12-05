import React from 'react';
import {connect} from 'react-redux';
import {
  Tag,
  Button,
  Table,
  Space,
  Form,
  Input,
  Modal,
  message,
  DatePicker,
  Popconfirm,
} from 'antd';
import ConfirmArticle from './ConfirmArticle'
import {IProps, IState} from './interface';
import { setTagInfo } from '@/store/actions';
import styles from './index.module.scss';
import api from '@/api';
import {EditModel} from '@/const';

const {RangePicker} = DatePicker;

@connect(({user, tag}: any) => ({user, tag}))
export default class Article extends React.Component<IProps, IState> {

  columns = [
    {title: '序号', dataIndex: 'article_id', key: 'article_id'},
    {title: '编号', dataIndex: 'article_id', key: 'article_id'},
    {title: '标题', dataIndex: 'article_title', key: 'article_title'},
    {title: '描述', dataIndex: 'article_describe', key: 'article_describe', render: (text: any = '') => <p>
        { text ? text.substr(0, 20) : '' }
      </p>
    },
    {title: '标签', dataIndex: 'article_tag', key: 'article_tag', render: (text: any) => {
     return <>
        {
          text && text.split(',').map((item: any, idx:number) =>{
           const tag_item = this.props.tag.tag_list.filter((t: any) => t.tag_id === Number(item))[0];
           if (!tag_item) return;
           return <Tag color={tag_item.default_color} key={idx}>{tag_item.tag_name}</Tag>
          })
        }
      </>
    }},
    {
      title: '创建时间', dataIndex: 'create_at', key: 'create_at', render: (text: any) => {
        return new Date(text * 1000).format('yyyy-MM-dd hh:mm:ss')
      }
    },
    {
      title: '更新时间', dataIndex: 'update_at', key: 'update_at', render: (text: any) => {
        return new Date(text * 1000).format('yyyy-MM-dd hh:mm:ss')
      }
    },
    {title: '阅读数', dataIndex: 'reading_number', key: 'reading_number'},
    {
      title: '操作', key: 'action', render: (text: any, record: any) => (
        <Space size='middle'>
          <a onClick={() => {
            this.handleModal(true);
            this.handleChangeModel(EditModel.EDIT, record)
          }}>Edit</a>
          <Popconfirm
            title={`Are you sure ${!record.is_valid ? 'Show' : 'Hide'}?`}
            okText='Yes'
            cancelText='No'
            onConfirm={() => this.onArticleUpdate({article_id: record.article_id, is_valid: !record.is_valid})}
          >
            <a>{!record.is_valid ? 'Show' : 'Hide'}</a>
          </Popconfirm>
          <Popconfirm
            title='Are you sure?'
            okText='Yes'
            cancelText='No'
            onConfirm={() => this.onDelete(record.article_id)}
          >
            <a>Delete</a>
          </Popconfirm>
        </Space>)
    }
  ];

  constructor(props: IProps) {
    super(props);
    this.state = {
      visible: false,
      total: 0,
      current: 1,
      model: EditModel.ADD,
      info: null,
      dataSource: []
    };
  };

  componentDidMount() {
    this.getTagList();
    this.getList();
  }

  getTagList = () => {
    api.GetTags()
      .then((res:any) => {
        if (res.success) {
          const { dispatch } = this.props;
          dispatch(setTagInfo(res.data.tag_list || []));
        }
      })
      .catch((e: any) => {
        message.error(e.describe || '获取标签失败');
      })
  };

  getList = (params: any = {}) => {
    api.GetArticleList(params)
      .then((res: any) => {
        if (res.success) {
          this.setState({
            total: res.data.total,
            dataSource: res.data.article_list,
          })
        }

      })
      .catch(e => {
        message.error(e.describe)
      })
  };

  onCreate= () => {
    this.handleModal(true);
    this.handleChangeModel(EditModel.ADD, {});
  };

  onArticleUpdate = (params: any = {}) => {
     api.UpdateArticle (params)
       .then((res:any) => {
         if (res.success) {
           message.success('更新成功');
           this.getList();
         } else {
           message.warn('更新失败');
         }
       })
       .catch((e: any) => {
         message.error(e.describe);
       })
  };

  onDelete = (id: number) => {
    console.log('delete', id);
    if (!id){
      message.warn('参数异常');
      return
    }
    api.DeleteArticle(id)
      .then((res: any) => {
        if (res.success) {
          message.success('删除成功');
          this.getList()
        }
      })
      .catch((e: any) => {
        message.error(e.describe);
      })
  };

  onChange = (e: number) => {
    this.setState({
      current: e,
    })
  };

  handleSubmit = (e: any) => {
    const picker_time = e['range-picker'] || ['',''],
          start_time = picker_time[0] || '',
          end_time = picker_time[1] || '',
          params = {
              article_id: e.article_id,
              article_title: e.title,
              start_time: start_time ? (new Date(start_time).getTime()/1000).toFixed(0) : '',
              end_time: end_time ? (new Date(end_time).getTime()/1000).toFixed(0) : '',
          };
    this.getList(params)
  };

  handleModal = (visible: boolean, e?: any) => {
    this.setState({
      visible,
    });
    if (e) {
      //  新增
      console.log(e);
    }
  };

  handleChangeModel = (model: any = EditModel.ADD, info: any = {}) => {
    this.setState({
      model,
      info,
    })
  };

  onModalSubmit = (e: any) => {
    const { user: { user_info } } = this.props;
    const { model } = this.state;
    if (model === EditModel.ADD) {
      api.CreateArticle({
        ...e,
        article_tag: e.article_tag.toString(),
        edit_user: user_info.user_name || 'kenevy',
      })
        .then((res: any) => {
          if (res.success) {
            message.success('创建成功');
            this.handleModal(false);
            this.getList();
          } else {
            message.error(e.describe);
          }
        })
        .catch((e:any) => {
          message.error(e.describe);
        })
    } else {
      api.UpdateArticle({
        ...e,
        article_tag: e.article_tag.toString(),
        edit_user: e.user_name || 'kenevy',
      })
        .then((res: any) => {
          if (res.success) {
            message.success('更新成功');
            this.handleModal(false);
            this.getList();
          } else {
            message.error(e.describe);
          }
        })
        .catch((e:any) => {
          message.error(e.describe);
        })
    }
  };

  render() {
    const {dataSource, total, current, visible, model, info} = this.state;
    return (
      <div className={styles.page}>
        <div className={styles.form}>
          <Form
            layout='inline'
            onFinish={this.handleSubmit}
          >
            <Form.Item
              label='编号'
              name='article_id'
            >
              <Input
                type='text'
                placeholder='请输入编号'
              />
            </Form.Item>
            <Form.Item
              label='标题'
              name='title'
            >
              <Input
                type='text'
                placeholder='请输入标题'
              />
            </Form.Item>
            <Form.Item 
                name="range-picker" 
                label="时间"
            >
              <RangePicker/>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>查询</Button>
            </Form.Item>
            <Form.Item>
              <Button type='primary' onClick={this.onCreate}>新增</Button>
            </Form.Item>
          </Form>
        </div>
        <Table
          loading={false}
          columns={this.columns}
          dataSource={dataSource}
          pagination={{
            showTotal: total => `共${total}条数据`,
            total,
            pageSize: 10,
            current,
            onChange: e => this.onChange(e)
          }}
        />

        <ConfirmArticle
          visible={visible}
          model={model}
          info={info}
          onCancel={() => this.handleModal(false)}
          onFinish={this.onModalSubmit}
        />
      </div>
    )
  }
}
