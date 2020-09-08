import React from 'react';
import {connect} from 'react-redux';
import {
  Button,
  Table,
  Space,
  Form,
  Input,
  Popconfirm,
} from 'antd';
import {IProps, IState} from './interface';
import styles from './index.module.scss';

@connect(({user}: any) => ({user}))
export default class Tags extends React.Component<IProps, IState> {
  columns = [
    {title: '序号', dataIndex: 'id', key: 'id'},
    {title: '编号', dataIndex: 'tag_id', key: 'tag_id'},
    {title: '标签名', dataIndex: 'title', key: 'title'},
    {title: '创建时间', dataIndex: 'create_time', key: 'create_time'},
    {title: '更新时间', dataIndex: 'update_time', key: 'update_time'},
    {
      title: '操作', key: 'action', render: (text: any, record: any) => (
        <Space size='middle'>
          <a>Edit</a>
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
      total: 50,
      current: 1,
      dataSource: [
        {
          id: 1,
          tag_id: 10001,
          title: '基操',
          create_time: 1599378639119,
          update_time: 1599378639119,
        },
        {
          id: 1,
          tag_id: 10001,
          title: '基操',
          create_time: 1599378639119,
          update_time: 1599378639119,
        },
        {
          id: 1,
          tag_id: 10001,
          title: '基操',
          create_time: 1599378639119,
          update_time: 1599378639119,
        },
        {
          id: 1,
          tag_id: 10001,
          title: '基操',
          create_time: 1599378639119,
          update_time: 1599378639119,
        },
        {
          id: 1,
          tag_id: 10001,
          title: '基操',
          create_time: 1599378639119,
          update_time: 1599378639119,
        },
        {
          id: 1,
          tag_id: 10001,
          title: '基操',
          create_time: 1599378639119,
          update_time: 1599378639119,
        },
        {
          id: 1,
          tag_id: 10001,
          title: '基操',
          create_time: 1599378639119,
          update_time: 1599378639119,
        },
        {
          id: 1,
          tag_id: 10001,
          title: '基操',
          create_time: 1599378639119,
          update_time: 1599378639119,
        },
        {
          id: 1,
          tag_id: 10001,
          title: '基操',
          create_time: 1599378639119,
          update_time: 1599378639119,
        },
        {
          id: 1,
          tag_id: 10001,
          title: '基操',
          create_time: 1599378639119,
          update_time: 1599378639119,
        },
        {
          id: 2,
          tag_id: 10001,
          title: '基操',
          create_time: 1599378639119,
          update_time: 1599378639119,
        },
        {
          id: 3,
          tag_id: 10001,
          title: '基操',
          create_time: 1599378639119,
          update_time: 1599378639119,
        },
        {
          id: 4,
          tag_id: 10001,
          title: '基操',
          create_time: 1599378639119,
          update_time: 1599378639119,
        }
      ]
    };
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

  render() {
    const {dataSource, total, current} = this.state;
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
              <Button type='primary'>新增</Button>
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
      </div>
    )
  }
}
