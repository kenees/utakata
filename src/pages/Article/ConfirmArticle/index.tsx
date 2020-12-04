import React, { useState, useEffect } from 'react';
import {
  Form,
  Modal,
  Input,
  message,
  Select,
} from 'antd';
import api from '@/api';
import { Editor } from '@/components';

const { Option } = Select;

import {EditModel} from '@/const';
import {IInfo} from '../interface'

const defaultInfo:IInfo = {
  article_id: 0,
  article_name: '',
  article_content: '',
  article_tag: '',
  is_valid: true,
  create_at: 0,
  update_at: 0,
  reading_number:0,
  edit_user: '',
  comment_number: '',
};

const ModelTitle = {
  [EditModel.ADD]: '新增标签',
  [EditModel.EDIT]: '编辑标签',
};

interface IProps {
  model: EditModel.ADD | EditModel.EDIT,
  visible: boolean,
  info: IInfo | null,
  onFinish: (res: any) => void,
  onCancel: () => void,
}

const AddArticle = (props: IProps) => {
  const [form] = Form.useForm();
  const initvalValues: IInfo = props.info || defaultInfo;
  const [visible, setVisible] = useState(props.visible || false);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    api.GetTags()
    .then((res:any) => {
      if (res.success) {
        setTags(res.data.tag_list)
      }
    })
    .catch((e: any) => {
      message.error(e.describe || '获取标签失败');
    })
  }, []);

  useEffect(() => {
    let article_tag = props?.info?.article_tag?.split(',') ?? [];

    article_tag.map((item) => parseInt(item));

    form.setFieldsValue({
      ...defaultInfo,
      ...props.info,
      article_tag,
    });
    setVisible(props.visible)
  }, [props.visible]);

  const onFinish = (values: any) => {
    form.validateFields()
    .then(res => {
      console.log(res);
      props.onFinish(res)
    })
    .catch(err => {
      console.log(err);
    })
  };

  const onCancel = () => {
    props.onCancel()
  };

  const handleChange = (e: any) => {
    console.log('edit quill', e)
  };

  const handleSelectChange = (e: any) => {
    console.log('tag change...', e)
  };

  return (
    <Modal
      title={ModelTitle[props.model]}
      width='950px'
      visible={visible}
      onOk={onFinish}
      onCancel={onCancel}
    >
      <Form
          layout='inline'
          form={form}
          initialValues={initvalValues}
        >
          <Form.Item name='article_id' hidden />
          <Form.Item
            label='标题'
            name='article_name'
            rules={[
              { required: true },
              { max: 16 },
            ]}
          >
            <Input placeholder='请输入标题' />
          </Form.Item>
        <Form.Item
          label='内容'
          name='article_content'
          style={{ margin: '30px 0 0 0' }}
          rules={[
            { required: true },
          ]}
        >
          <Editor
            initValue={initvalValues.article_content}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item
          label='标签'
          name='article_tag'
          style={{ margin: '30px 0' }}
          rules={[
            { required: true },
          ]}
        >
          <Select
            mode="multiple"
            allowClear
            style={{ width: '300px' }}
            placeholder="Please select"
            onChange={handleSelectChange}
          >
            {
              tags.map((item: any) => <Option key={item.tag_id}>{item.tag_name}</Option>)
            }
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
};

export default AddArticle;