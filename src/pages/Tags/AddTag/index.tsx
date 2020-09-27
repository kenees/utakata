import React, {useState, useEffect} from 'react';
import {
  Form,
  Modal,
  Input,
} from 'antd';
import {EditModel} from '../interface'

const ModelTitle = {
  [EditModel.ADD]: '新增标签',
  [EditModel.EDIT]: '编辑标签',
};

interface IProps {
  model: EditModel.ADD | EditModel.EDIT,
  visible: boolean,
  info: any,
  onFinish: (res: any) => void,
  onCancel: () => void,
}

const AddTag = (props: IProps) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(props.visible || false);

  useEffect(() => {
    setVisible(props.visible)
  }, [props.visible]);

  const onFinish = () => {
    form.validateFields()
      .then(res => {
        props.onFinish(res)
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
  console.log(props.info);
  return (
    <Modal
      title={ModelTitle[props.model]}
      visible={visible}
      onOk={onFinish}
      onCancel={onCancel}
    >
      <Form
        layout='inline'
        form={form}
        initialValues={props.info}
      >
        <Form.Item
          label='标签名称'
          name='tag_name'
          rules={[
            {
              required: true,
              max: 16
            }
          ]}
        >
          <Input placeholder='请输入标签名称'/>
        </Form.Item>
        <Form.Item
          label='标签颜色'
          name='default_color'
          rules={[
            {required: true}
          ]}
        >
          <Input placeholder='请输入标签颜色'/>
        </Form.Item>
      </Form>
    </Modal>
  )
};

export default AddTag;