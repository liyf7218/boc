import IContainer from '@/containers'
import ErrorPage from '@/components/404'
// 导出路由
export const routes = [
  {
    path: '/',
    name: 'IContainer',
    component: IContainer,
    redirect: '/introduction',
    children: [
      {
        path: '/introduction',
        name: 'Introduction',
        component: resolve => require(['@/views/introduction'], resolve)
      }, {
        path: '*',
        name: 'ErrorPage',
        component: ErrorPage
      }
    ]
  }
]
