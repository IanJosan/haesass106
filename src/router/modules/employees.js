import Layout from '@/layout'
export default {
  path: '/employees',
  name: 'employees',
  component: Layout,
  children: [{
    path: '',
    component: () => import ('@/views/employees'),
    meta: {
      title: '员工管理',
      icon: 'dashboard'
    }
  }, {
    path: 'detail/:id',
    component: () => import ('@/views/employees/detail'),
    hidden: true,
    meta: {
      title: '员工详情'
    }
  }]
}
