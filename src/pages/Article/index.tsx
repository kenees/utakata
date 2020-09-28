import React from 'react';
import {connect} from 'react-redux';
import {
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
import AddArticle from './AddArticle'
import {IProps, IState} from './interface';
import styles from './index.module.scss';
import {getArticleList} from "@/api/article";

const {RangePicker} = DatePicker;

@connect(({user}: any) => ({user}))
export default class Article extends React.Component<IProps, IState> {
  columns = [
    {title: '序号', dataIndex: 'id', key: 'id'},
    {title: '编号', dataIndex: 'article_id', key: 'article_id'},
    {title: '标题', dataIndex: 'title', key: 'title'},
    {title: '标签', dataIndex: 'tags', key: 'tags'},
    {title: '创建时间', dataIndex: 'create_time', key: 'create_time'},
    {title: '更新时间', dataIndex: 'update_time', key: 'update_time'},
    {title: '阅读数', dataIndex: 'reading_number', key: 'reading_number'},
    {
      title: '操作', key: 'action', render: (text: any, record: any) => (
        <Space size='middle'>
          <a>Edit</a>
          <a>{record.record ? 'Show' : 'Hide'}</a>
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
      dataSource: [
        {
          id: 1,
          article_id: 10001,
          title: '基操',
          tags: [1, 2, 3],
          create_time: 1599378639119,
          update_time: 1599378639119,
          reading_number: 23,
          visible: true,
        },
        {
          id: 1,
          article_id: 10001,
          title: '基操',
          tags: [1, 2, 3],
          create_time: 1599378639119,
          update_time: 1599378639119,
          reading_number: 23,
          visible: true,
        },
        {
          id: 1,
          article_id: 10001,
          title: '基操',
          tags: [1, 2, 3],
          create_time: 1599378639119,
          update_time: 1599378639119,
          reading_number: 23,
          visible: true,
        },
        {
          id: 1,
          article_id: 10001,
          title: '基操',
          tags: [1, 2, 3],
          create_time: 1599378639119,
          update_time: 1599378639119,
          reading_number: 23,
          visible: true,
        },
        {
          id: 1,
          article_id: 10001,
          title: '基操',
          tags: [1, 2, 3],
          create_time: 1599378639119,
          update_time: 1599378639119,
          reading_number: 23,
          visible: true,
        },
        {
          id: 1,
          article_id: 10001,
          title: '基操',
          tags: [1, 2, 3],
          create_time: 1599378639119,
          update_time: 1599378639119,
          reading_number: 23,
          visible: true,
        },
        {
          id: 1,
          article_id: 10001,
          title: '基操',
          tags: [1, 2, 3],
          create_time: 1599378639119,
          update_time: 1599378639119,
          reading_number: 23,
          visible: true,
        },
        {
          id: 1,
          article_id: 10001,
          title: '基操',
          tags: [1, 2, 3],
          create_time: 1599378639119,
          update_time: 1599378639119,
          reading_number: 23,
          visible: true,
        },
        {
          id: 1,
          article_id: 10001,
          title: '基操',
          tags: [1, 2, 3],
          create_time: 1599378639119,
          update_time: 1599378639119,
          reading_number: 23,
          visible: true,
        },
        {
          id: 1,
          article_id: 10001,
          title: '基操',
          tags: [1, 2, 3],
          create_time: 1599378639119,
          update_time: 1599378639119,
          reading_number: 23,
          visible: true,
        },
        {
          id: 2,
          article_id: 10001,
          title: '基操',
          tags: [1, 2],
          create_time: 1599378639119,
          update_time: 1599378639119,
          reading_number: 13,
          visible: true,
        },
        {
          id: 3,
          article_id: 10001,
          title: '基操',
          tags: [1, 2, 3],
          create_time: 1599378639119,
          update_time: 1599378639119,
          reading_number: 1,
          visible: true,
        },
        {
          id: 4,
          article_id: 10001,
          title: '基操',
          tags: [1, 2, 3],
          create_time: 1599378639119,
          update_time: 1599378639119,
          reading_number: 23,
          visible: true,
        }
      ]
    };
  };

  componentDidMount() {
    this.getList()
  }

  getList = () => {
    getArticleList()
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

  handleModal = (visible: boolean, e?: any) => {
    this.setState({
      visible,
    });
    if (e) {
      //  新增
      console.log(e);
    }
  };

  onModalSubmit = (e) => {
    console.log(e)
  };

  render() {
    const {dataSource, total, current, visible} = this.state;
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

        <AddArticle
          visible={visible}
          onCancel={() => this.handleModal(false)}
          onFinish={this.onModalSubmit}
        />
      </div>
    )
  }
}
