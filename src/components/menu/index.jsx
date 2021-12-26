import { useEffect, useState } from 'react'
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom'
import menuData from './data'
import { getMenuProps } from './util'
const { SubMenu } = Menu;

export default () => {
  const [openKeys, setOpenKeys] = useState([])
  const [selectedKeys, setSelectedKeys] = useState('')
  let navigate = useNavigate();
  const location = useLocation()

  useEffect(() => {
    // console.log(location)
    let { openKeys, selectedKeys } = getMenuProps(location.pathname, menuData)
    setOpenKeys(openKeys)
    setSelectedKeys(selectedKeys)
  }, [])

  const renderMenu = (arr = []) => {
    return arr.map((item, index) => {
      const icon = <i className={`iconfont ${item.icon}`} />
      if (Array.isArray(item.children) && item.children.length > 0) {
        return (
          <SubMenu key={item.path} title={item.title} icon={icon}>
            {renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.path} icon={icon} onClick={() => handleItem(item)}>
          {item.title}
        </Menu.Item>
      )
    })
  }

  const handleItem = (item) => {
    setSelectedKeys(item.path)
    navigate(item.path)
  }

  const handleClick = ({ item, key, keyPath, domEvent }) => {
    setSelectedKeys(key)
  }

  const onOpenChange = (openKeys) => {
    setOpenKeys(openKeys)
  }

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      selectedKeys={selectedKeys}
      onClick={handleClick}
      onOpenChange={onOpenChange}
    >
      {renderMenu(menuData)}
    </Menu>
  )
}