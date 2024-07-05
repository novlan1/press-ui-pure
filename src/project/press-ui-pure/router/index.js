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
        title: 'Press UI Pure',
      },
    },
    {
      path: 'share/share',
      component: () => import('src/pages/share/share.vue'),
      meta: {
        showBack: true,
        title: 'Share',
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
];

export default ROUTER_MAP;
