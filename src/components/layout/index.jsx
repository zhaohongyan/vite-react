import { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Layout } from 'antd'

import Menu from '@/components/menu'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import styles from './index.module.less'
const { Header, Footer, Sider, Content } = Layout;

export default () => {
  const na = useNavigate()
  const logout = () => {
    console.log('logout')
    localStorage.removeItem('userInfo')
    na('/login')
  }

  useEffect(() => {
    const { username } = JSON.parse(localStorage.getItem('userInfo')) || {}
    if (!username) {
      na('/login')
    }
  })

  const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {}
  const { username } = userInfo

  return (
    <div className={styles.container}>
      <Layout style={{ height: '100vh' }}>
        <Sider theme="light">
          <div className={styles.logo}>
            logo
          </div>
          <Menu />
        </Sider>
        <Layout>
          <Header className={styles.header}>
            <div className={styles.header_left}></div>
            <div className={styles.header_right}>
              <UserOutlined />
              <span className={styles.user}>{username}</span>
              <span className={styles.logout} onClick={logout}>
                <LogoutOutlined />
              </span>
            </div>
          </Header>
          <Content>
            <section className={styles.content}>
              <Outlet />
            </section>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
