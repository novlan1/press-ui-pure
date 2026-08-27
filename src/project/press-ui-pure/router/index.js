import { getPressUIPages } from './press-pages';

const getPressPages = (name = 'press') => ({
  path: `/pages/${name}`,
  component: () => import('@/views/press'),
  children: [
    {
      path: '',
      component: () => import('src/pages/index/index.vue'),
      meta: {
        showBack: false,
        title: 'Press UI Vue2 Pure',
      },
    },
    ...getPressUIPages(),
  ],
});

const ROUTER_MAP = [
  {
    path: '/',
    name: 'default',
    redirect: '/pages/press',
  },
  getPressPages(),
  getPressPages('act'),
  {
    path: '/pages/index/help',
    component: () => import('@/views/press'),
    children: [
      {
        path: '',
        component: () => import('src/pages/index/help.vue'),
        meta: {
          hideNavigator: true,
        },
      },
    ],
  },
  {
    path: '/pages/index/introduce',
    component: () => import('@/views/press'),
    children: [
      {
        path: '',
        component: () => import('src/pages/index/introduce.vue'),
        meta: {
          showBack: true,
          title: 'Press UI',
        },
      },
    ],
  },
];

export default ROUTER_MAP;
