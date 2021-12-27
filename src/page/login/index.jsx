import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Checkbox, message } from 'antd'
import styles from './index.module.less'
import imgUrl from '@/assets/psb.jpeg'

export default () => {
  const na = useNavigate()

  const onFinish = (values) => {
    console.log('Success:', values);
    // username: 'zhangsan', password: '123
    const { username, password } = values
    if (username === 'zhangsan' && password === '123') {
      localStorage.setItem('userInfo', JSON.stringify(values))
      na('/', { replace: true })
    } else {
      message.error('username: zhangsan, password: 123')
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input style={{ width: 260 }} placeholder="请输入用户名" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password style={{ width: 260 }} placeholder="请输入密码" />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className={styles.right}>
          <img src={imgUrl} alt="" />
        </div>
      </div>
      <footer>
        <a href="http://beian.miit.gov.cn/" target="_blank">豫ICP备2021036443号-1</a>
      </footer>
    </>
  )
}