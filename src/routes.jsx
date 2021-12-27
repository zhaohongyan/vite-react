import Layout from '@/components/layout'
import Login from '@/page/login'
import Home from '@/page/home'
import Page1 from '@/page/page1/list'
import Page1Detail from '@/page/page1/detail'

import Page2 from '@/page/page2/list'
import Page2Detail from '@/page/page2/detail'

import NoMatch from '@/NoMatch'

/**
 * hidePath 绝对路径，用于计算menu selectedKeys openKeys
 */
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "page1",
        children: [
          {
            path: "list1",
            element: <Page1 />,
          },
          {
            path: "list1/detail/:id",
            element: <Page1Detail />,
            hidePath: '/page1/list1',
          },
          {
            path: 'list1/list1',
            element: <Page2 />,
          },
          {
            path: "list2",
            element: <Page1 />,
          },
          {
            path: "list2/detail/:id",
            element: <Page1Detail />,
            hidePath: '/page1/list2',
          }
        ]
      },
      {
        path: 'page2',
        children: [
          {
            path: "list1",
            element: <Page2 />,
          },
          {
            path: "list1/detail/:id",
            element: <Page2Detail />
          },
          {
            path: "list2",
            element: <Page2 />,
          },
          {
            path: "list2/detail/:id",
            element: <Page2Detail />
          }
        ]
      },
      {
        path: "page3",
        element: <Page2 />,
      },
      { path: "*", element: <NoMatch /> }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
]

export default routes