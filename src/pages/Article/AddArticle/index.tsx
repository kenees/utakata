import React, { useState, useEffect } from 'react';
import {
  Form,
  Modal,
  Input,
} from 'antd';
const AddArticle = (props) => {
  const [form] = Form.useForm()
  const [visible, setVisible] = useState(props.visible || false);

  useEffect(() => {
    setVisible(props.visible)
  }, [props.visible])

  const onFinish = values => {
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
  }

  return (
    <Modal
      title='新增文章'
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
              { required: true }
            ]}
          >
            <Input placeholder='请输入标题' />
          </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddArticle;