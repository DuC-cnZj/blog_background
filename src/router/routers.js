import Main from '@/components/main'
import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: false,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          icon: 'ios-home',
          hideInMenu: false,
          title: '首页',
          notCache: true
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  // {
  //   path: '',
  //   name: 'doc',
  //   meta: {
  //     title: '文档',
  //     href: 'https://lison16.github.io/iview-admin-doc/#/',
  //     icon: 'ios-book'
  //   }
  // },
  // {
  //   path: '/join',
  //   name: 'join',
  //   component: Main,
  //   children: [
  //     {
  //       path: 'join_page',
  //       name: 'join_page',
  //       meta: {
  //         icon: '_qq',
  //         title: 'QQ群'
  //       },
  //       component: () => import('@/view/join-page.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/components',
  //   name: 'components',
  //   meta: {
  //     icon: 'logo-buffer',
  //     title: '组件'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'count_to_page',
  //       name: 'count_to_page',
  //       meta: {
  //         icon: 'md-trending-up',
  //         title: '数字渐变'
  //       },
  //       component: () => import('@/view/components/count-to/count-to.vue')
  //     },
  //     {
  //       path: 'drag_list_page',
  //       name: 'drag_list_page',
  //       meta: {
  //         icon: 'ios-infinite',
  //         title: '拖拽列表'
  //       },
  //       component: () => import('@/view/components/drag-list/drag-list.vue')
  //     },
  //     {
  //       path: 'tables_page',
  //       name: 'tables_page',
  //       meta: {
  //         icon: 'md-grid',
  //         title: '多功能表格'
  //       },
  //       component: () => import('@/view/components/tables/tables.vue')
  //     },
  //     {
  //       path: 'split_pane_page',
  //       name: 'split_pane_page',
  //       meta: {
  //         icon: 'md-pause',
  //         title: '分割窗口'
  //       },
  //       component: () => import('@/view/components/split-pane/split-pane.vue')
  //     },
  //     {
  //       path: 'markdown_page',
  //       name: 'markdown_page',
  //       meta: {
  //         icon: 'logo-markdown',
  //         title: 'Markdown编辑器'
  //       },
  //       component: () => import('@/view/components/markdown/markdown.vue')
  //     },
  //     {
  //       path: 'editor_page',
  //       name: 'editor_page',
  //       meta: {
  //         icon: 'ios-create',
  //         title: '富文本编辑器'
  //       },
  //       component: () => import('@/view/components/editor/editor.vue')
  //     },
  //     {
  //       path: 'icons_page',
  //       name: 'icons_page',
  //       meta: {
  //         icon: '_bear',
  //         title: '自定义图标'
  //       },
  //       component: () => import('@/view/components/icons/icons.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/update',
  //   name: 'update',
  //   meta: {
  //     icon: 'md-cloud-upload',
  //     title: '数据上传'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'update_table_page',
  //       name: 'update_table_page',
  //       meta: {
  //         icon: 'ios-document',
  //         title: '上传Csv'
  //       },
  //       component: () => import('@/view/update/update-table.vue')
  //     },
  //     {
  //       path: 'update_paste_page',
  //       name: 'update_paste_page',
  //       meta: {
  //         icon: 'md-clipboard',
  //         title: '粘贴表格数据'
  //       },
  //       component: () => import('@/view/update/update-paste.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/excel',
  //   name: 'excel',
  //   meta: {
  //     icon: 'ios-stats',
  //     title: 'EXCEL导入导出'
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'upload-excel',
  //       name: 'upload-excel',
  //       meta: {
  //         icon: 'md-add',
  //         title: '导入EXCEL'
  //       },
  //       component: () => import('@/view/excel/upload-excel.vue')
  //     },
  //     {
  //       path: 'export-excel',
  //       name: 'export-excel',
  //       meta: {
  //         icon: 'md-download',
  //         title: '导出EXCEL'
  //       },
  //       component: () => import('@/view/excel/export-excel.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/tools_methods',
  //   name: 'tools_methods',
  //   meta: {
  //     hide: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'tools_methods_page',
  //       name: 'tools_methods_page',
  //       meta: {
  //         icon: 'ios-hammer',
  //         title: '工具方法',
  //         beforeCloseName: 'before_close_normal'
  //       },
  //       component: () => import('@/view/tools-methods/tools-methods.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/directive',
  //   name: 'directive',
  //   meta: {
  //     hide: true
  //   },
  //   component: Main,
  //   children: [
  //     {
  //       path: 'directive_page',
  //       name: 'directive_page',
  //       meta: {
  //         icon: 'ios-navigate',
  //         title: '指令'
  //       },
  //       component: () => import('@/view/directive/directive.vue')
  //     }
  //   ]
  // },
  {
    path: '/user',
    name: 'user',
    meta: {
      icon: 'md-menu',
      title: '个人页'
    },
    redirect: '/user/center',
    component: Main,
    children: [
      {
        path: 'center',
        name: 'user_center',
        meta: {
          access: ['super_admin'],
          icon: 'ios-bookmarks',
          title: '个人中心'
        },
        component: () => import('@/view/user/UserCenter.vue')
      },
      {
        path: 'setting',
        name: 'user_setting',
        meta: {
          access: ['super_admin'],
          icon: 'ios-bookmarks',
          title: '个人设置'
        },
        component: () => import('@/view/user/UserSetting.vue')
      }
    ]
  },

  {
    path: '/authors',
    name: 'authors',
    meta: {
      icon: 'md-menu',
      title: '用户中心'
    },
    redirect: '/authors/center',
    component: Main,
    children: [
      {
        path: 'center',
        name: 'author_center',
        meta: {
          access: ['super_admin'],
          icon: 'ios-bookmarks',
          title: '用户列表'
        },
        component: () => import('@/view/author/AuthorList.vue')
      },
      {
        path: 'add_author',
        name: 'author_create_edit',
        meta: {
          access: ['super_admin'],
          icon: 'ios-bookmarks',
          title: '添加用户'
        },
        component: () => import('@/view/author/AuthorCreateEdit.vue')
      }
    ]
  },

  {
    path: '/article',
    name: 'article',
    meta: {
      icon: 'md-menu',
      title: '文章管理'
    },
    component: Main,
    children: [
      {
        path: 'article_list',
        name: 'article_list',
        meta: {
          access: ['super_admin'],
          icon: 'ios-bookmarks',
          title: '文章列表'
        },
        component: () => import('@/view/article/home.vue')
      },
      {
        path: 'create_edit',
        name: 'article_create_edit',
        meta: {
          access: ['super_admin'],
          icon: 'ios-bookmarks',
          title: '发布文章'
        },
        component: () => import('@/view/article/CreateEdit.vue')
      },
      {
        path: 'article_rule',
        name: 'article_rule',
        meta: {
          access: ['super_admin'],
          icon: 'ios-bookmarks',
          title: '转换'
        },
        component: () => import('@/view/article/Rule.vue')
      }
    ]
  },
  {
    path: '/history',
    name: 'history',
    meta: {
      icon: 'ios-bookmarks',
      title: '访问历史'
    },
    component: Main,
    children: [
      {
        path: '/history_index',
        name: 'history_index',
        meta: {
          access: ['super_admin'],
          icon: 'ios-bookmarks',
          title: '访问历史'
        },
        component: () => import('@/view/history/Index.vue')
      },
      {
        path: '/history_white_list',
        name: 'history_white_list',
        meta: {
          access: ['super_admin'],
          icon: 'ios-bookmarks',
          title: '白名单'
        },
        component: () => import('@/view/history/WhiteList.vue')
      },
    ]
  },
  {
    path: '/socialite',
    name: 'socialite',
    meta: {
      icon: 'ios-bookmarks',
      title: '第三方用户'
    },
    component: Main,
    children: [
      {
        path: '/socialite_index',
        name: 'socialite_index',
        meta: {
          icon: 'ios-bookmarks',
          title: '第三方用户'
        },
        component: () => import('@/view/socialite/Index.vue')
      }
    ]
  },

  {
    path: '/argu',
    name: 'argu',
    meta: {
      hideInMenu: true
    },
    component: Main,
    children: [
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          icon: 'md-flower',
          title: route => `动态路由-${route.params.id}`,
          notCache: true,
          beforeCloseName: 'before_close_normal'
        },
        component: () => import('@/view/argu-page/params.vue')
      },
      {
        path: 'query',
        name: 'query',
        meta: {
          icon: 'md-flower',
          title: route => `带参路由-${route.query.id}`,
          notCache: true
        },
        component: () => import('@/view/argu-page/query.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]
