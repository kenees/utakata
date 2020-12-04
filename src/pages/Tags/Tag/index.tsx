import React, {useState, useEffect} from 'react';
import {
  Form,
  Modal,
  Input,
  Radio
} from 'antd';
import {IInfo} from '../interface';
import {EditModel} from '@/const';

const ModelTitle = {
  [EditModel.ADD]: '新增标签',
  [EditModel.EDIT]: '编辑标签',
};

const defaultInfo:IInfo = {
  tag_id: null,
  tag_name: '',
  default_color: '',
  is_valid: true,
};

interface IProps {
  model: EditModel.ADD | EditModel.EDIT,
  visible: boolean,
  info: IInfo | null,
  onFinish: (res: any) => void,
  onCancel: () => void,
}


const Tag = (props: IProps) => {
  const [form] = Form.useForm();
  const initvalValues: IInfo = props.info || defaultInfo;
  const [visible, setVisible] = useState(props.visible || false);

  useEffect(() => {
    form.setFieldsValue({ 
      ...defaultInfo,
      ...props.info
    });
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
        initialValues={initvalValues}
      >
        <Form.Item name='tag_id' hidden />
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
        <Form.Item
          label='是否启用'
          name='is_valid'
        >
          <Radio.Group>
            <Radio value={true}>启用</Radio>
            <Radio value={false}>禁用</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  )
};

export default Tag;