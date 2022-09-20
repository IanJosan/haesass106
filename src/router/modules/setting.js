import Layout from '@/layout'
export default {
  path: '/setting',
  name: 'settings',
  component: Layout,
  children: [{
    path: '',
    component: () => import ('@/views/setting'),
    meta: {
      title: '设置',
      icon: 'dashboard'
    }
  }]
}
