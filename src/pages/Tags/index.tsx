import React from 'react';
import {connect} from 'react-redux';
import {
  Button,
  Table,
  Space,
  Form,
  Input,
  message,
  Popconfirm,
} from 'antd';
import AddTag from './AddTag';
import api from '@/api';
import {IProps, IState, EditModel} from './interface';
import styles from './index.module.scss';



@connect(({user}: any) => ({user}))
export default class Tags extends React.Component<IProps, IState> {
  columns = [
    {title: '编号', dataIndex: 'tag_id', key: 'tag_id'},
    {title: '标签名', dataIndex: 'tag_name', key: 'tag_name'},
    {title: '颜色', dataIndex: 'default_color', key: 'default_color'},
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
    {
      title: '操作', key: 'action', render: (text: any, record: any) => (
        <Space size='middle'>
          <a onClick={() => {
            this.handleModal(true);
            this.handleChangeModel(EditModel.EDIT, record)
          }}>Edit</a>
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
    console.log(props.user);
    this.state = {
      total: 0,
      current: 1,
      visible: false,
      model: EditModel.ADD,
      info: {},
      dataSource: []
    };
  };

  componentWillMount() {
    this.getTagList();
  }

  getTagList = () => {
    api.GetTags()
      .then((res: any) => {
        if (res.success) {
          this.setState({
            total: res.data.length,
            dataSource: res.data.tag_list,
          })
        } else {
          message.warning(res.remark);
        }
      })
      .catch(e => {
        message.error(e.describe)
      })
  };

  onDelete = (id: string) => {
    console.log('delete', id)
  };

  onChange = (e: number) => {
    this.setState({
      current: e,
    })
  };

  handleSubmit = (e: any) => {
    console.log(e);
  };

  handleModal = (visible: boolean) => {
    this.setState({
      visible,
    })
  };

  handleChangeModel = (model: any = EditModel.ADD, info: any = {}) => {
    this.setState({
      model,
      info,
    })
  };

  onModalSubmit = (e: any) => {
    console.log('create tag', e);
    api.CreateTag(e)
      .then((res: any) => {
        if (res.success) {
          message.info('创建成功');
          this.handleModal(false);
          this.getTagList();
        } else {
          message.warn(res.remark);
        }
      })
      .catch(e => {
        message.error(e);
      })
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
              name='tag_id'
            >
              <Input
                type='text'
                placeholder='请输入编号'
              />
            </Form.Item>
            <Form.Item
              label='标签名'
              name='title'
            >
              <Input
                type='text'
                placeholder='请输入标签名'
              />
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>查询</Button>
            </Form.Item>
            <Form.Item>
              <Button type='primary' onClick={() => this.handleModal(true)}>新增</Button>
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

        <AddTag
          model={model}
          info={info}
          visible={visible}
          onCancel={() => this.handleModal(false)}
          onFinish={this.onModalSubmit}
        />
      </div>
    )
  }
}
