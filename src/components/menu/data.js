// 后端返回的菜单
const menuData = [
  {
    icon: 'iconsetting',
    title: '一级菜单1-1',
    path: '/page1',
    children: [
      {
        title: '二级菜单1-1-1',
        path: '/page1/list1',
        children: [{
          title: '三级菜单',
          path: '/page1/list1/list1'
        }]
      },
      {
        title: '二级菜单1-1-2',
        path: '/page1/list2'
      }
    ]
  },
  {
    icon: 'iconsetting',
    title: '一级菜单1-2',
    path: '/page2',
    children: [
      {
        title: '二级菜单1-2-1',
        path: '/page2/list1'
      },
      {
        title: '二级菜单1-2-2',
        path: '/page2/list2'
      }
    ]
  },
  {
    icon: 'iconsetting',
    title: '一级菜单1-3',
    path: '/page3',
  }
]

export default menuData