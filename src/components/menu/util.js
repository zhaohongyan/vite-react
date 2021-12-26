const getMenuProps = (pathname, menuData) => {
  let selectedKeys = pathname
  let openKeys
  const flat = (list, parentArr = []) => {
    list.forEach(item => {
      item.parentArr = (parentArr || []).concat(item.path)
      if (Array.isArray(item.children) && item.children.length > 0) {
        flat(item.children, item.parentArr)
      }

      if (item.path === pathname) {
        openKeys = item.parentArr.slice(0, -1)
      }

    });
  }

  flat(menuData)

  console.log('menuData', menuData, pathname, openKeys)

  // 不在菜单展示的路由
  if (!openKeys) {
    // '/page1/list1/detail/1' ['/page1']  '/page1/list1'
    const arr = pathname.split('/')
    openKeys = '/' + arr[1]
    selectedKeys = '/' + arr[1] + '/' + arr[2]
  }
  return {
    selectedKeys, // 选中的子菜单
    openKeys // 展开的子菜单
  }
}

export {
  getMenuProps
}