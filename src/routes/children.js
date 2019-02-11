import AssistUnitManagePage from './../pages/assistUnitManagePage';
import LegalAidCenterPage from './../pages/legalAidCenterPage';
import LegalServiceHousePage from './../pages/legalServiceHousePage';
import DetentionHousePage from './../pages/detentionHousePage';
import CourtOverviewPage from './../pages/courtOverviewPage';
import JudgeInformationPage from './../pages/judgeInformationPage';

import TemplatePage from './../pages/templatePage';
import ManagePage from './../pages/managePage';
import RoleManage from './../pages/roleManage';
import PermissionSetting from './../pages/permissionSetting';
import VersionUpdate from './../pages/versionUpdate';
import Abstract from './../components/Abstract';
// import HomePage from './../pages/homePage';
const children = [
    {
        path: 'set',
        name: '打包文件',
        iconClass: 'el-icon-setting',
        component: Abstract,
        children: [
            // {
            //     path: 'personalInfo',
            //     name: '个人信息',
            //     component: Abstract,
            //     children: [
            //         {
            //             path: 'modifyInfo',
            //             name: '修改信息',
            //             component: TemplatePage
            //         }, {
            //             path: 'changePassword',
            //             name: '修改密码',
            //             component: TemplatePage
            //         }
            //     ]
            // },
            {
                path: 'packagePage',
                name: '打包页面',
                component: TemplatePage
            }
        ]
    },
    // {
    //     path: 'submit',
    //     name: '高院提交信息管理',
    //     iconClass: 'el-icon-message',
    //     component: Abstract,
    //     children: [
    //         {
    //             path: 'correct',
    //             name: '我要纠错',
    //             component: TemplatePage
    //         }, {
    //             path: 'feedback',
    //             name: '建议反馈',
    //             component: TemplatePage
    //         }, {
    //             path: 'moduleClick',
    //             name: '模块点击管理',
    //             component: TemplatePage
    //         }
    //     ]
    // },
    // {
    //     path: 'img',
    //     name: '图片管理',
    //     iconClass: 'el-icon-picture',
    //     component: Abstract,
    //     children: [
    //         {
    //             path: 'lawyerHome',
    //             name: '律师首页轮播图',
    //             component: TemplatePage
    //         }, {
    //             path: 'boot',
    //             name: '开机广告图',
    //             component: TemplatePage
    //         }, {
    //             path: 'application',
    //             name: '应用管理',
    //             component: TemplatePage
    //         }, {
    //             path: 'applets',
    //             name: '小程序轮播图',
    //             component: TemplatePage
    //         }
    //     ]
    // },
    // {
    //     path: 'found',
    //     name: '发现管理',
    //     iconClass: 'el-icon-view',
    //     component: Abstract,
    //     children: [
    //         {
    //             path: 'wechat',
    //             name: '微信网站',
    //             component: TemplatePage
    //         }, {
    //             path: 'section',
    //             name: '发现栏目',
    //             component: TemplatePage
    //         }, {
    //             path: 'articles',
    //             name: '发现文章',
    //             component: TemplatePage
    //         }, {
    //             path: 'matrix',
    //             name: '小程序矩阵',
    //             component: TemplatePage
    //         }
    //     ]
    // },
    // {
    //     path: 'content ',
    //     name: '内容采集',
    //     iconClass: 'el-icon-star-off',
    //     component: Abstract,
    //     children: [
    //         {
    //             path: 'courtOverview',
    //             name: '法院概况',
    //             component: TemplatePage
    //         }
    //     ]
    // },
    // {
    //     path: 'news ',
    //     name: '消息推送',
    //     iconClass: 'el-icon-bell',
    //     component: Abstract,
    //     children: [
    //         {
    //             path: 'announcement',
    //             name: '通知公告',
    //             component: TemplatePage
    //         }, {
    //             path: 'message',
    //             name: '消息阅读列表',
    //             component: TemplatePage
    //         }
    //     ]
    // },
    // {
    //     path: 'committee',
    //     name: '代表委员管理',
    //     iconClass: 'el-icon-service',
    //     component: Abstract,
    //     children: [
    //         {
    //             path: 'deputy',
    //             name: '人大代表成员',
    //             component: TemplatePage
    //         }, {
    //             path: 'members',
    //             name: '政协委员管理',
    //             component: TemplatePage
    //         }, {
    //             path: 'infoNews',
    //             name: '信息新闻管理',
    //             component: TemplatePage
    //         }, {
    //             path: 'suggestion',
    //             name: '建议列表',
    //             component: TemplatePage
    //         }
    //     ]
    // },
    // {
    //     path: 'doc',
    //     name: 'doc文档管理',
    //     iconClass: 'el-icon-document',
    //     component: Abstract,
    //     children: [
    //         {
    //             path: 'skill',
    //             name: '技能手册管理',
    //             component: TemplatePage
    //         }, {
    //             path: 'investigation',
    //             name: '法院调研',
    //             component: TemplatePage
    //         }, {
    //             path: 'trial',
    //             name: '浙江审判',
    //             component: TemplatePage
    //         }, {
    //             path: 'statistics',
    //             name: '数据统计管理',
    //             component: TemplatePage
    //         }, {
    //             path: 'instrument ',
    //             name: '文书模板',
    //             component: TemplatePage
    //         }, {
    //             path: 'workReport',
    //             name: '工作报告管理',
    //             component: TemplatePage
    //         }
    //     ]
    // },
    // {
    //     path: 'question',
    //     name: '问题类管理',
    //     iconClass: 'el-icon-question',
    //     component: Abstract,
    //     children: [
    //         {
    //             path: 'smart',
    //             name: '智能问答',
    //             component: TemplatePage
    //         }, {
    //             path: 'litigation ',
    //             name: '诉讼指南',
    //             component: TemplatePage
    //         }, {
    //             path: 'trouble',
    //             name: '疑难问题解答',
    //             component: TemplatePage
    //         }
    //     ]
    // },
    // {
    //     path: 'version',
    //     name: '版本管理',
    //     iconClass: 'el-icon-printer',
    //     component: Abstract,
    //     children: [
    //         {
    //             path: 'log',
    //             name: '版本日志管理',
    //             component: TemplatePage
    //         }, {
    //             path: 'update',
    //             name: '版本更新说明管理',
    //             component: VersionUpdate
    //         }
    //     ]
    // },
    // {
    //     path: 'map',
    //     name: '法制地图管理',
    //     iconClass: 'el-icon-location-outline',
    //     component: Abstract,
    //     children: [
    //         {
    //             path: 'assist',
    //             name: '协助单位管理',
    //             component: AssistUnitManagePage
    //         }, {
    //             path: 'aid',
    //             name: '法律援助中心管理',
    //             component: LegalAidCenterPage
    //         }, {
    //             path: 'service',
    //             name: '法律服务所管理',
    //             component: LegalServiceHousePage
    //         }, {
    //             path: 'detention',
    //             name: '看守所管理',
    //             component: DetentionHousePage
    //         }, {
    //             path: 'profile',
    //             name: '法院概况管理',
    //             component: CourtOverviewPage
    //         }, {
    //             path: 'courtInfo',
    //             name: '法院信息管理',
    //             component: JudgeInformationPage
    //         }
    //     ]
    // },
    // {
    //     path: 'user',
    //     name: '用户管理',
    //     iconClass: 'el-icon-share',
    //     component: Abstract,
    //     children: [
    //         {
    //             path: 'manage',
    //             name: '管理组',
    //             component: Abstract,
    //             children: [
    //                 {
    //                     path: 'role',
    //                     name: '角色管理',
    //                     component: RoleManage,
    //                     children: [
    //                         {
    //                             path: 'permission',
    //                             name: '权限管理',
    //                             component: PermissionSetting
    //                         }
    //                     ]
    //                 }, {
    //                     path: 'manager',
    //                     name: '管理员',
    //                     component: ManagePage
    //                 }
    //             ]
    //         }
    //     ]
    // }
];
export default children;