import { Form, Input, Select, Button } from 'antd'


export default () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      layout="inline"
      onFinish={onFinish}
      form={form}
    >
      <Form.Item
        label="field1"
        name="field1"
      >
        <Input style={{ width: 150 }} placeholder="请输入" />
      </Form.Item>

      <Form.Item
        label="field2"
        name="field2"
      >
        <Select style={{ width: 150 }} placeholder="请选择">
          <Select.Option value="jack">Jack</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="Yiminghe">yiminghe</Select.Option>
        </Select>
      </Form.Item>


      <Button type="primary" htmlType="submit" style={{ marginRight: 10 }}>
        查询
      </Button>

      <Button onClick={onReset}>
        重置
      </Button>
    </Form>
  )
}