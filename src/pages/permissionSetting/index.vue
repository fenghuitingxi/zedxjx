<template src="./index.html"></template>
<script>
import './index.less';
export default {
    data() {
        return {
            permissionList: [{
                id: '1',
                label: '内容管理',
                children: [
                    {
                        id: '1-1',
                        label: '所有留言',
                        children: [{
                            id: '1-1-1',
                            label: '删除网站留言'
                        }]
                    }, {
                        id: '1-2',
                        label: '评论管理',
                        children: [{
                            id: '1-2-1',
                            label: '删除评论'
                        }, {
                            id: '1-2-2',
                            label: '评论审核'
                        }]
                    }, {
                        id: '1-3',
                        label: '文章管理',
                        children: [{
                            id: '1-3-1',
                            label: '文章排序'
                        }, {
                            id: '1-3-2',
                            label: '文章置顶'
                        }, {
                            id: '1-3-3',
                            label: '文章推荐'
                        }, {
                            id: '1-3-4',
                            label: '批量移动'
                        }, {
                            id: '1-3-5',
                            label: '文章审核'
                        }, {
                            id: '1-3-6',
                            label: '删除文章'
                        }, {
                            id: '1-3-7',
                            label: '编辑文章',
                            children: [{
                                id: '1-3-7-1',
                                label: '提交编辑'
                            }]
                        }, {
                            id: '1-3-8',
                            label: '添加文章',
                            children: [{
                                id: '1-3-8-1',
                                label: '提交添加'
                            }]
                        }]
                    }, {
                        id: '1-4',
                        label: '分类管理',
                        children: [{
                            id: '1-4-1',
                            label: '文章分类排序'
                        }, {
                            id: '1-4-2',
                            label: '删除分类'
                        }, {
                            id: '1-4-3',
                            label: '编辑分类',
                            children: [{
                                id: '1-4-3-1',
                                label: '提交编辑'
                            }]
                        }, {
                            id: '1-4-4',
                            label: '添加分类',
                            children: [{
                                id: '1-4-4-1',
                                label: '提交添加'
                            }]
                        }]
                    }, {
                        id: '1-5',
                        label: '页面管理',
                        children: [{
                            id: '1-5-1',
                            label: '页面排序'
                        }, {
                            id: '1-5-2',
                            label: '删除页面'
                        }, {
                            id: '1-5-3',
                            label: '编辑页面',
                            children: [{
                                id: '1-5-3-1',
                                label: '提交编辑'
                            }]
                        }, {
                            id: '1-5-4',
                            label: '添加页面',
                            children: [{
                                id: '1-5-4-1',
                                label: '提交添加'
                            }]
                        }]
                    }, {
                        id: '1-6',
                        label: '回收站',
                        children: [{
                            id: '1-6-1',
                            label: '文章回收',
                            children: [{
                                id: '1-6-1-1',
                                label: '文章还原'
                            }, {
                                id: '1-6-1-2',
                                label: '彻底删除'
                            }]
                        }, {
                            id: '1-6-2',
                            label: '页面回收',
                            children: [{
                                id: '1-6-2-1',
                                label: '页面还原'
                            }, {
                                id: '1-6-2-2',
                                label: '页面删除'
                            }]
                        }]
                    }
                ]
            }, {
                id: '2',
                label: '扩展工具',
                children: [{
                    id: '2-1',
                    label: '备份管理',
                    children: [{
                        id: '2-1-1',
                        label: '数据还原'
                    }, {
                        id: '2-1-2',
                        label: '数据备份',
                        children: [{
                            id: '2-1-2-1',
                            label: '提交数据备份'
                        }]
                    }, {
                        id: '2-1-3',
                        label: '下载备份'
                    }, {
                        id: '2-1-4',
                        label: '删除备份'
                    }, {
                        id: '2-1-5',
                        label: '数据备份导入'
                    }]
                }, {
                    id: '2-2',
                    label: '插件管理',
                     children: [{
                        id: '2-2-1',
                        label: '插件启用切换'
                    }, {
                        id: '2-2-2',
                        label: '插件设置',
                        children: [{
                            id: '2-2-2-1',
                            label: '插件设置提交'
                        }]
                    }, {
                        id: '2-2-3',
                        label: '插件安装'
                    }, {
                        id: '2-2-4',
                        label: '插件卸载'
                    }, {
                        id: '2-2-5',
                        label: '插件更新'
                    }]
                }, {
                    id: '2-3',
                    label: '幻灯片',
                    children: [{
                        id: '2-3-1',
                        label: '幻灯片管理',
                        children: [{
                            id: '2-3-1-1',
                            label: '幻灯片排序'
                        }, {
                            id: '2-3-1-2',
                            label: '幻灯片显示切换'
                        }, {
                            id: '2-3-1-3',
                            label: '删除幻灯片'
                        }, {
                            id: '2-3-1-4',
                            label: '编辑幻灯片',
                            children: [{
                                id: '2-3-1-4-1',
                                label: '提交编辑'
                            }]
                        }, {
                            id: '2-3-1-5',
                            label: '添加幻灯片',
                            children: [{
                                id: '2-3-1-5-1',
                                label: '提交添加'
                            }]
                        }, {
                            id: '2-3-1-6',
                            label: '禁用幻灯片'
                        }, {
                            id: '2-3-1-7',
                            label: '启用幻灯片'
                        }]
                    }, {
                        id: '2-3-2',
                        label: '幻灯片分类',
                        children: [{
                            id: '2-3-2-1',
                            label: '删除分类'
                        }, {
                            id: '2-3-2-2',
                            label: '编辑分类',
                            children: [{
                                id: '2-3-2-2-1',
                                label: '提交编辑'
                            }]
                        }, {
                            id: '2-3-2-2',
                            label: '添加分类',
                            children: [{
                                id: '2-3-2-2-2',
                                label: '提交添加'
                            }]
                        }]
                    }]
                }, {
                    id: '2-4',
                    label: '网站广告',
                    children: [{
                        id: '2-4-1',
                        label: '广告显示切换'
                    }, {
                        id: '2-4-2',
                        label: '删除广告'
                    }, {
                        id: '2-4-3',
                        label: '编辑广告',
                        children: [{
                            id: '2-4-3-1',
                            label: '提交编辑'
                        }]
                    }, {
                        id: '2-4-4',
                        label: '添加广告',
                        children: [{
                            id: '2-4-4-1',
                            label: '提交添加'
                        }]
                    }]
                }, {
                    id: '2-5',
                    label: '友情链接',
                    children: [{
                        id: '2-5-1',
                        label: '友情链接排序'
                    }, {
                        id: '2-5-2',
                        label: '友链显示切换'
                    }, {
                        id: '2-5-3',
                        label: '删除友情链接'
                    }, {
                        id: '2-5-4',
                        label: '编辑友情链接',
                        children: [{
                            id: '2-5-4-1',
                            label: '提交编辑'
                        }]
                    }, {
                        id: '2-5-5',
                        label: '添加友情链接',
                        children: [{
                            id: '2-5-5-1',
                            label: '提交添加'
                        }]
                    }]
                }, {
                    id: '2-6',
                    label: '第三方登陆',
                    children: [{
                        id: '2-6-1',
                        label: '提交设置'
                    }]
                }, {
                    id: '2-7',
                    label: '文件存储',
                    children: [{
                        id: '2-7-1',
                        label: '文件存储设置提交'
                    }]
                }]
            }, {
                id: '3',
                label: '菜单管理',
                children: [{
                    id: '3-1',
                    label: '前台菜单',
                    children: [{
                        id: '3-1-1',
                        label: '菜单管理',
                        children: [{
                            id: '3-1-1-1',
                            label:'前台导航排序'
                        }, {
                            id: '3-1-1-2',
                            label:'删除菜单'
                        }, {
                            id: '3-1-1-3',
                            label:'编辑菜单',
                            children: [{
                                id: '3-1-1-3-1',
                                label: '提交编辑'
                            }]
                        }, {
                            id: '3-1-1-4',
                            label:'添加菜单',
                            children: [{
                                id: '3-1-1-4-1',
                                label: '提交添加'
                            }]
                        }]
                    }, {
                        id: '3-1-2',
                        label: '菜单分类',
                        children: [{
                            id: '3-1-2-1',
                            label: '删除分类'
                        }, {
                            id: '3-1-2-2',
                            label: '编辑分类',
                            children: [{
                                id: '3-1-2-2-1',
                                label: '提交编辑'
                            }]
                        }, {
                            id: '3-1-2-3',
                            label: '添加分类',
                            children: [{
                                id: '3-1-2-2-2',
                                label: '提交添加'
                            }]
                        }]
                    }]
                }, {
                    id: '3-2',
                    label: '后台菜单',
                    children: [{
                        id: '3-2-1',
                        label: '添加菜单',
                        children: [{
                            id: '3-2-1-1',
                            label: '提交添加'
                        }]
                    }, {
                        id: '3-2-2',
                        label: '后台菜单排序'
                    }, {
                        id: '3-2-3',
                        label: '菜单备份'
                    }, {
                        id: '3-2-4',
                        label: '编辑菜单',
                        children: [{
                            id: '3-2-4-1',
                            label: '提交编辑'
                        }]
                    }, {
                        id: '3-2-5',
                        label: '删除菜单'
                    }, {
                        id: '3-2-6',
                        label: '所有菜单'
                    }]
                }]
            }, {
                id: '4',
                label: '设置',
                children: [{
                    id: '4-1',
                    label: '个人信息',
                    children: [{
                        id: '4-1-1',
                        label: '修改信息',
                        children: [{
                            id: '4-1-1-1',
                            label: '修改信息提交'
                        }]
                    }, {
                        id: '4-1-2',
                        label: '修改密码',
                        children: [{
                            id: '4-1-2-1',
                            label: '提交修改'
                        }]
                    }]
                }, {
                    id: '4-2',
                    label: '网站信息',
                    children: [{
                        id: '4-2-1',
                        label: '提交修改'
                    }, {
                        id: '4-2-2',
                        label: '路由列表'
                    }, {
                        id: '4-2-3',
                        label: '路由添加',
                        children: [{
                            id: '4-2-3-1',
                            label: '路由添加提交'
                        }]
                    }, {
                        id: '4-2-4',
                        label: '路由编辑',
                        children: [{
                            id: '4-2-3-1',
                            label: '路由编辑提交'
                        }]
                    }, {
                        id: '4-2-5',
                        label: '路由删除'
                    }, {
                        id: '4-2-6',
                        label: '路由禁止'
                    }, {
                        id: '4-2-7',
                        label: '路由启用'
                    }, {
                        id: '4-2-8',
                        label: '路由排序'
                    }]
                }, {
                    id: '4-3',
                    label: '邮箱配置'
                }, {
                    id: '4-4',
                    label: '清除缓存'
                }]
            }, {
                id: '5',
                label: '用户管理',
                children: [{
                    id: '5-1',
                    label: '用户组',
                    children: [{
                        id: '5-1-1',
                        label: '本站用户',
                        children: [{
                            id: '5-1-1-1',
                            label: '拉黑会员'
                        }, {
                            id: '5-1-1-2',
                            label: '启用会员'
                        }]
                    }, {
                        id: '5-1-2',
                        label: '第三方用户',
                        children: [{
                            id: '5-1-2-1',
                            label: '第三方用户解绑'
                        }]
                    }]
                }, {
                    id: '5-2',
                    label: '管理组',
                    children: [{
                        id: '5-2-1',
                        label: '角色管理',
                        children: [{
                            id: '5-2-1-1',
                            label: '成员管理'
                        }, {
                            id: '5-2-1-2',
                            label: '权限设置'
                        }, {
                            id: '5-2-1-3',
                            label: '编辑角色',
                            children: [{
                                id: '5-2-1-3-1',
                                label: '提交编辑'
                            }]
                        }, {
                            id: '5-2-1-4',
                            label: '删除角色'
                        }, {
                            id: '5-2-1-5',
                            label: '添加角色',
                            children: [{
                                id: '5-2-1-5-1',
                                label: '提交添加'
                            }]
                        }]
                    }, {
                        id: '5-2-2',
                        label: '管理员',
                        children: [{
                            id: '5-2-2-1',
                            label: '删除管理员'
                        }, {
                            id: '5-2-2-2',
                            label: '管理员编辑',
                            children: [{
                                id: '5-2-2-2-1',
                                label: '提交编辑'
                            }]
                        }, {
                            id: '5-2-2-3',
                            label: '管理员添加',
                            children: [{
                                id: '5-2-2-3-1',
                                label: '提交添加'
                            }]
                        }, {
                            id: '5-2-2-4',
                            label: '禁用管理员'
                        }, {
                            id: '5-2-2-5',
                            label: '启用管理员'
                        }]
                    }]
                }]
            }, {
                id: '6',
                label: '高院提交信息管理',
                children: [{
                    id: '6-1',
                    label: '我要纠错'
                }, {
                    id: '6-2',
                    label: '建议反馈'
                }, {
                    id: '6-3',
                    label: '模块点击管理'
                }]
            }, {
                id: '7',
                label: '图片管理',
                children: [{
                    id: '7-1',
                    label: '律师首页轮播图'
                }, {
                    id: '7-2',
                    label: '律师首页轮播图'
                }, {
                    id: '7-3',
                    label: '应用管理'
                }, {
                    id: '7-4',
                    label: '小程序轮播图'
                }]
            }, {
                id: '8',
                label: '发现管理',
                children: [{
                    id: '8-1',
                    label: '微信网站'
                }, {
                    id: '8-2',
                    label: '发现栏目'
                }, {
                    id: '8-3',
                    label: '发现文章'
                }, {
                    id: '8-4',
                    label: '小程序矩阵'
                }]
            }, {
                id: '9',
                label: '人事部门管理',
                children: [{
                    id: '9-1',
                    label: '工作人员名单'
                }, {
                    id: '9-2',
                    label: ' 部门管理'
                }, {
                    id: '9-3',
                    label: '人员照片管理'
                }, {
                    id: '9-4',
                    label: '签到白名单'
                }]
            }, {
                id: '10',
                label: '内容采集',
                children: [{
                    id: '10-1',
                    label: '法律援助采集'
                }, {
                    id: '10-2',
                    label: '法院概况'
                }]
            }, {
                id: '11',
                label: '消息推送',
                children: [{
                    id: '11-1',
                    label: '通知公告'
                }, {
                    id: '11-2',
                    label: '消息阅读列表'
                }]
            }, {
                id: '12',
                label: '代表委员管理',
                children: [{
                    id: '12-1',
                    label: '人大代表成员',
                    children: [{
                        id: '12-1-1',
                        label: '人大代表委员添加'
                    }, {
                        id: '12-1-2',
                        label: '人大代表修改'
                    }, {
                        id: '12-1-3',
                        label: '人大代表发消息'
                    }, {
                        id: '12-1-4',
                        label: '人大代表删除'
                    }]
                }, {
                    id: '12-2',
                    label: '信息新闻管理',
                    children: [{
                        id: '12-2-1',
                        label: '信息新闻添加'
                    }, {
                        id: '12-2-2',
                        label: '信息新闻修改'
                    }, {
                        id: '12-2-3',
                        label: '信息新闻删除'
                    }]
                }, {
                    id: '12-3',
                    label: '政协委员管理',
                    children: [{
                        id: '12-3-1',
                        label: '政协委员添加'
                    }, {
                        id: '12-3-2',
                        label: '政协委员修改'
                    }]
                }, {
                    id: '12-4',
                    label: '建议列表'
                }]
            }, {
                id: '13',
                label: 'doc文档管理管理',
                children: [{
                    id: '13-1',
                    label: '技能手册管理'
                }, {
                    id: '13-2',
                    label: '法院调研'
                }, {
                    id: '13-3',
                    label: '浙江审判'
                }, {
                    id: '13-4',
                    label: '数据统计管理'
                }, {
                    id: '13-5',
                    label: '文书模板'
                }, {
                    id: '13-6',
                    label: '工作报告管理'
                }]
            }, {
                id: '14',
                label: '问题类管理',
                children: [{
                    id: '14-1',
                    label: '智能问答'
                }, {
                    id: '14-2',
                    label: '诉讼指南'
                }, {
                    id: '14-3',
                    label: '疑难问题解答'
                }]
            }, {
                id: '15',
                label: '版本管理'
            }, {
                id: '16',
                label: '法院自定义功能管理'
            }, {
                id: '17',
                label: '法制地图管理',
                children: [{
                    id: '17-1',
                    label: '协助单位管理'
                }, {
                    id: '17-2',
                    label: '法律援助中心管理'
                }, {
                    id: '17-3',
                    label: '法律服务所管理'
                }, {
                    id: '17-4',
                    label: '看守所管理'
                }, {
                    id: '17-5',
                    label: '法院概况管理'
                }, {
                    id: '17-6',
                    label: '法官信息管理'
                }]
            }, {
                id: '18',
                label: '版本更新说明管理'
            }]
        };
    }
};
</script>


