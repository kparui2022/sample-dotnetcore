import { createRouter, createWebHistory } from 'vue-router';

function guest(to, from, next) {
    if (localStorage.token) {
        next({ name: 'dashboard' });
    } else next();
}

function guard(to, from, next) {
    if (localStorage.token) {
        next();
    } else {
        next({ name: 'login' });
    }
}



const routes = [
    {
        path: '/',
        name: 'dashboardlogin',
        exact: true,
        component: () => import('./pages/Dashboard/Dashboards.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'dashboardlogin', label: 'dashboardlogin' }],
        },
    },
    {
        path: '/Dashboard/Dashboards',
        name: 'dashboard',
        exact: true,
        component: () => import(`./pages/Dashboard/Dashboards.vue`),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'Dashboard', label: 'Dashboard' }],
        },
    },


    // account information start
    {
        path: '/account-info/:id',
        name: 'AccountInfo',
        component: () => import('./pages/AccountManagement/AccontInfo.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'accountinfo' }],
        },
    },
    {
        path: '/change-pass',
        name: 'ChangePass',
        component: () => import('./pages/AccountManagement/ChangePass.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'ChangePass' }],
        },
    },
    {
        path: '/modify-info/:id',
        name: 'EditInfo',
        component: () => import('./pages/AccountManagement/EditInfo.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'EditInfo' }],
        },
    },
    //account information end

    // Hanatour Statistics Start

    {
        path: '/Statistics/Statistics',
        name: 'Statistics',
        component: () => import('./pages/Statistics/Statistics.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'Statistics' }],
        },
    },

    // Hanatour Statistics End

    // Hanatour User Management Start

    {
        path: '/UserManagement/UserList',
        name: 'UserList',
        component: () => import('./pages/UserManagement/UserList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'UserList' }],
        },
    },

    {
        path: '/UserManagement/UserDetail/:id',
        name: 'UserDetail',
        component: () => import('./pages/UserManagement/UserDetail.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'UserDetail' }],
        },
    },


    // Hanatour User Management End

    //  Hanatour Chatroom Management Start

    {
        path: '/ChatroomManagement/ChatroomList',
        name: 'ChatroomList',
        component: () => import('./pages/ChatroomManagement/ChatroomList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'ChatroomList' }],
        },
    },

    {
        path: '/ChatroomManagement/ChatroomDetails/:id',
        name: 'ChatroomDetails',
        component: () => import('./pages/ChatroomManagement/ChatroomDetails.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'ChatroomDetails' }],
        },
    },

    {
        path: '/ChatroomManagement/ChatroomMessageLogs/:id',
        name: 'ChatroomMessageLogs',
        component: () => import('./pages/ChatroomManagement/ChatroomMessageLogs.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'ChatroomMessageLogs' }],
        },
    },

    //  Hanatour Chatroom Management End

    // Hanatour Chatroom Tag Management Start
    // User Added started
    {
        path: '/ChatroomTagManagement/UseraddedtagList/UseraddedList',
        name: 'UseraddedList',
        component: () => import('./pages/ChatroomTagManagement/UseraddedtagList/UseraddedList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'UseraddedList' }],
        },
    },

    {
        path: '/ChatroomTagManagement/UseraddedtagList/UserDetails/:id',
        name: 'UserDetails',
        component: () => import('./pages/ChatroomTagManagement/UseraddedtagList/UserDetails.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'UserDetails' }],
        },
    },


    // User Added End

    // Admin Added Start

    {
        path: '/ChatroomTagManagement/AdminaddedTaglist/AdmintagList',
        name: 'AdmintagList',
        component: () => import('./pages/ChatroomTagManagement/AdminaddedTaglist/AdmintagList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'AdmintagList' }],
        },
    },

    {
        path: '/ChatroomTagManagement/AdminaddedTaglist/AdmintagAdded',
        name: 'AdmintagAdded',
        component: () => import('./pages/ChatroomTagManagement/AdminaddedTaglist/AdmintagAdded.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'AdmintagAdded' }],
        },
    },
    {
        path: '/ChatroomTagManagement/AdminaddedTaglist/EditAdmintag/:id',
        name: 'EditAdmintag',
        component: () => import('./pages/ChatroomTagManagement/AdminaddedTaglist/EditAdmintag.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'EditAdmintag' }],
        },
    },

    {
        path: '/ChatroomTagManagement/AdminaddedTaglist/AdminDetail/:id',
        name: 'AdminDetail',
        component: () => import('./pages/ChatroomTagManagement/AdminaddedTaglist/AdminDetail.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'AdminDetail' }],
        },
    },

    // Admin Added End

    // Hanatour Chatroom Tag Management End

    // Hanatour Popular Chatroom List Management Start

    {
        path: '/PopularChatroomListManagement/PopularChatroomList',
        name: 'PopularChatroomList',
        component: () => import('./pages/PopularChatroomListManagement/PopularChatroomList.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'PopularChatroomList' }],
        },
    },

    {
        path: '/PopularChatroomListManagement/PopularChatroomDetails/:id',
        name: 'PopularChatroomDetails',
        component: () => import('./pages/PopularChatroomListManagement/PopularChatroomDetails.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'PopularChatroomDetails' }],
        },
    },

    {
        path: '/PopularChatroomListManagement/PopularChatroomMessageLog/:id',
        name: 'PopularChatroomMessageLog',
        component: () => import('./pages/PopularChatroomListManagement/PopularChatroomMessageLog.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'PopularChatroomMessageLog' }],
        },
    },


    // Hanatour Popular Chatroom List Management End

    // Hanatour Reported Users Start

    {
        path: '/ReportedUsers/ReportedUserslist',
        name: 'ReportedUserslist',
        component: () => import('./pages/ReportedUsers/ReportedUserslist.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'ReportedUserslist' }],
        },
    },

    // Hanatour Reported Users End

    // Hanatour Reported Users Start

    {
        path: '/ReportedMessages/ReportedMessageslist',
        name: 'ReportedMessageslist',
        component: () => import('./pages/ReportedMessages/ReportedMessageslist.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'ReportedMessageslist' }],
        },
    },

    {
        path: '/ReportedMessages/ReportedMessageDetails/:id',
        name: 'ReportedMessageDetails',
        component: () => import('./pages/ReportedMessages/ReportedMessageDetails.vue'),
        beforeEnter: guard,
        meta: {
            breadcrumb: [{ parent: 'pages', label: 'ReportedMessageDetails' }],
        },
    },

    // Hanatour Reported Users End


    // {
    //     path: '/inquiry-type',
    //     name: 'InquiryType',
    //     exact: true,
    //     component: () => import('./pages/inquiry/InquiryType.vue'),
    //     beforeEnter: guard,
    //     meta: {
    //         breadcrumb: [{ parent: 'pages', label: 'InquiryType' }],
    //     },
    // },
    // {
    //     path: '/add-inquiry-type',
    //     name: 'AddInquiryType',
    //     exact: true,
    //     component: () => import('./pages/inquiry/AddInquiryType.vue'),
    //     beforeEnter: guard,
    //     meta: {
    //         breadcrumb: [{ parent: 'pages', label: 'AddInquiryType' }],
    //     },
    // },
    // {
    //     path: '/edit-inquiry-type/:id',
    //     name: 'EditInquiryType',
    //     exact: true,
    //     component: () => import('./pages/inquiry/EditInquiryType.vue'),
    //     beforeEnter: guard,
    //     meta: {
    //         breadcrumb: [{ parent: 'pages', label: 'EditInquiryType' }],
    //     },
    // },
    // {
    //     path: '/inquiry',
    //     name: 'Inquiry',
    //     exact: true,
    //     component: () => import('./pages/inquiry/Inquiry.vue'),
    //     beforeEnter: guard,
    //     meta: {
    //         breadcrumb: [{ parent: 'Inuery', label: 'inquiry list' }],
    //     },
    // },
    // {
    //     path: '/edit-inquiry/:id',
    //     name: 'EditInquiry',
    //     exact: true,
    //     component: () => import('./pages/inquiry/EditInquiry.vue'),
    //     beforeEnter: guard,
    //     meta: {
    //         breadcrumb: [{ parent: 'pages', label: 'EditInquiry' }],
    //     },
    // },
    {
        path: '/formlayout',
        name: 'formlayout',
        component: () => import('./components/FormLayoutDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Form Layout' }],
        },
    },
    {
        path: '/input',
        name: 'input',
        component: () => import('./components/InputDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Input' }],
        },
    },
    {
        path: '/floatlabel',
        name: 'floatlabel',
        component: () => import('./components/FloatLabelDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Float Label' }],
        },
    },
    {
        path: '/invalidstate',
        name: 'invalidstate',
        component: () => import('./components/InvalidStateDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Invalid State' }],
        },
    },
    {
        path: '/button',
        name: 'button',
        component: () => import('./components/ButtonDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Button' }],
        },
    },
    {
        path: '/table',
        name: 'table',
        component: () => import('./components/TableDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Table' }],
        },
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('./components/ListDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'List' }],
        },
    },
    {
        path: '/tree',
        name: 'tree',
        component: () => import('./components/TreeDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Tree' }],
        },
    },
    {
        path: '/panel',
        name: 'panel',
        component: () => import('./components/PanelsDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Panel' }],
        },
    },
    {
        path: '/overlay',
        name: 'overlay',
        component: () => import('./components/OverlayDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Overlay' }],
        },
    },
    {
        path: '/media',
        name: 'media',
        component: () => import('./components/MediaDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Media' }],
        },
    },
    {
        path: '/menu',
        component: () => import('./components/MenuDemo.vue'),
        children: [
            {
                path: '',
                component: () => import('./components/menu/PersonalDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
                },
            },
            {
                path: '/menu/seat',
                component: () => import('./components/menu/SeatDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
                },
            },
            {
                path: '/menu/payment',
                component: () => import('./components/menu/PaymentDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
                },
            },
            {
                path: '/menu/confirmation',
                component: () => import('./components/menu/ConfirmationDemo.vue'),
                meta: {
                    breadcrumb: [{ parent: 'UI Kit', label: 'Menu' }],
                },
            },
        ],
    },
    {
        path: '/messages',
        name: 'messages',
        component: () => import('./components/MessagesDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Messages' }],
        },
    },
    {
        path: '/file',
        name: 'file',
        component: () => import('./components/FileDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'File' }],
        },
    },
    {
        path: '/chart',
        name: 'chart',
        component: () => import('./components/ChartDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Charts' }],
        },
    },
    {
        path: '/misc',
        name: 'misc',
        component: () => import('./components/MiscDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'UI Kit', label: 'Misc' }],
        },
    },
    {
        path: '/icons',
        name: 'icons',
        component: () => import('./utilities/Icons.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Icons' }],
        },
    },
    {
        path: '/widgets',
        name: 'widgets',
        component: () => import('./utilities/Widgets.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Widgets' }],
        },
    },
    {
        path: '/grid',
        name: 'grid',
        component: () => import('./utilities/GridDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Grid System' }],
        },
    },
    {
        path: '/spacing',
        name: 'spacing',
        component: () => import('./utilities/SpacingDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Spacing' }],
        },
    },
    {
        path: '/elevation',
        name: 'elevation',
        component: () => import('./utilities/ElevationDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Elevation' }],
        },
    },
    {
        path: '/typography',
        name: 'typography',
        component: () => import('./utilities/Typography.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Typography' }],
        },
    },
    {
        path: '/display',
        name: 'display',
        component: () => import('./utilities/DisplayDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Display' }],
        },
    },
    {
        path: '/flexbox',
        name: 'flexbox',
        component: () => import('./utilities/FlexBoxDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Flexbox' }],
        },
    },
    {
        path: '/text',
        name: 'text',
        component: () => import('./utilities/TextDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Utilities', label: 'Text' }],
        },
    },
    {
        path: '/crud',
        name: 'crud',
        component: () => import('./pages/CrudDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Crud' }],
        },
    },
    {
        path: '/calendar',
        name: 'calendar',
        component: () => import('./pages/CalendarDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Calendar' }],
        },
    },
    {
        path: '/timeline',
        name: 'timeline',
        component: () => import('./pages/TimelineDemo.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Timeline' }],
        },
    },
    {
        path: '/invoice',
        name: 'invoice',
        component: () => import('./pages/Invoice.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Invoice' }],
        },
    },
    {
        path: '/help',
        name: 'help',
        component: () => import('./pages/Help.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Help' }],
        },
    },
    {
        path: '/empty',
        name: 'empty',
        component: () => import('./components/EmptyPage.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Empty Page' }],
        },
    },
    {
        path: '/documentation',
        name: 'documentation',
        component: () => import('./components/Documentation.vue'),
        meta: {
            breadcrumb: [{ parent: 'Pages', label: 'Documentation' }],
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Login.vue'),
        beforeEnter: guest,
    },

    {
        path: '/forgotpassword',
        name: 'forgotpassword',
        component: () => import('./pages/forgotpassword.vue'),
        beforeEnter: guest,
    },
    {
        path: '/OtpEnter',
        name: 'OtpEnter',
        component: () => import('./pages/OtpEnter.vue'),
        beforeEnter: guest,
    },
    {
        path: '/changepassword',
        name: 'changepassword',
        component: () => import('./pages/changepassword.vue'),
        beforeEnter: guest,
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('./pages/Error.vue'),
    },
    {
        path: '/privacy',
        name: 'Privacy',
        component: () => import('./pages/Privacy.vue'),
    },
    {
        path: '/term-conditions',
        name: 'TermCondition',
        component: () => import('./pages/TermCondition.vue'),
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: () => import('./pages/NotFound.vue'),
    },
    {
        path: '/access',
        name: 'access',
        component: () => import('./pages/Access.vue'),
    },

];

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { left: 0, top: 0 };
    },
});

export default router;
