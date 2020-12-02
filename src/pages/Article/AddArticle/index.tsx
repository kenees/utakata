import React, { useState, useEffect } from 'react';
import {
  Form,
  Modal,
  Input,
} from 'antd';
import { Editor } from '@/components';


const AddArticle = (props: any) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(props.visible || false);

  useEffect(() => {
    setVisible(props.visible)
  }, [props.visible]);

  const onFinish = (values: any) => {
    form.validateFields()
    .then(res => {
      console.log(res)
      // props.onFinish(values)

    })
    .catch(err => {
      console.log(err);
    })
  };

  const onReset = () => {
    form.resetFields();
  };

  const onCancel = () => {
    props.onCancel()
  };

  const handleChange = (e: any) => {
    console.log('edit quill', e)
  }

  return (
    <Modal
      title='新增文章'
      width='950px'
      visible={visible}
      onOk={onFinish}
      onCancel={onCancel}
    >
      <Form
          layout='inline'
          form={form}
        >
          <Form.Item
            label='标题'
            name='title'
            rules={[
              { required: true },
              { max: 16 },
            ]}
          >
            <Input placeholder='请输入标题' />
          </Form.Item>
        <Form.Item
          label='内容'
          name='content'
        >
          <Editor 
            onChange={handleChange}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddArticle;