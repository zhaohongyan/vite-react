import { matchRoutes } from 'react-router-dom'
import routes from '@/routes'

const getMenuProps = (location, menuData) => {
  const { pathname } = location
  let selectedKeys, openKeys, menuPath
  // 递归函数
  const flat = (list, parentArr = []) => {
    list.forEach(item => {
      item.parentArr = (parentArr || []).concat(item.path)
      if (Array.isArray(item.children) && item.children.length > 0) {
        flat(item.children, item.parentArr)
      }

      if (item.path === menuPath) {
        openKeys = item.parentArr.slice(0, -1)
        selectedKeys = item.parentArr.slice(-1)
      }
    });
  }

  const match = matchRoutes(routes, location)
  const currentRoute = match.slice(-1)[0]
  if (currentRoute.route.hidePath) { // 不在菜单中展示的路由
    menuPath = currentRoute.route.hidePath
    flat(menuData)
  } else {
    menuPath = pathname
    flat(menuData)
  }


  // console.log('menuData', menuData, pathname, openKeys)

  return {
    selectedKeys, // 选中的子菜单
    openKeys // 展开的子菜单
  }
}

export {
  getMenuProps
}