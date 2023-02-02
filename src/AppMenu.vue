<template>
    <div class="menu-wrapper" :class="{ 'layout-sidebar-active': sidebarActive }" @click="onMenuClick" @mouseover="onSidebarMouseOver" @mouseleave="onSidebarMouseLeave">
        <div class="sidebar-logo">
            <router-link to="/">
                <!-- <img src="assets/layout/images/Logo.png" style="height:35px;width:auto;" alt="D.A.LAB" /> -->
                <img v-show="rend2" v-bind:src="logo1" style="height: 25px; width: auto" alt="GS Community" />
                <img v-show="rend" v-bind:src="logogscommunity" alt="GS Community" style="width: 150px; height: 35px" />
                <!-- <img src="assets/layout/images/wallet.png" style="height:35px;width:auto;" alt="samsung" />
                <img v-show="rend" src="assets/layout/images/raiPlanner2.png" alt="Account_Book" style="width:auto;height:35px;" /> -->
                <!-- <b style="padding-left: 15px; font-size: 23px;color:#728FCE">{{ title }}</b> -->
            </router-link>
            <a  class="sidebar-pin pin" @click="onToggleMenu($event)" style="color:black;margin-top: -12%;"><i class="pi pi-align-justify" style="font-size: 20px;"></i></a>
            <!-- <a class="sidebar-pin" @click="onToggleMenu($event)">
                <span class="pin"></span>
            </a> -->
        </div>

        <div class="layout-menu-container">
            <AppSubmenu
                class="layout-menu"
                :items="Hanatour"
                :layoutMode="layoutMode"
                :parentMenuItemActive="true"
                :menuActive="menuActive"
                :mobileMenuActive="mobileMenuActive"
                :root="true"
                @menuitem-click="onMenuItemClick"
                @root-menuitem-click="onRootMenuItemClick"
            />
            <div @click="logout">
                <div>
                    <span class="logout-btn">
                        <i class="pi pi-sign-out"></i>
                        {{ mouse_over ? '로그아웃' : '' }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppSubmenu from './AppSubmenu';
export default {
    name: 'AppMenu',
    emits: ['menu-click', 'menuitem-click', 'root-menuitem-click', 'toggle-menu', 'sidebar-mouse-over', 'sidebar-mouse-leave'],
    props: {
        sidebarActive: Boolean,
        sidebarStatic: Boolean,
        layoutMode: String,
        menuActive: Boolean,
        mobileMenuActive: Boolean,
    },
    data() {
        return {
            logo1: '/assets/layout/images/hanatour_logo.png',
            logogscommunity: '/assets/layout/images/Logohanatour.png',
            rend: false,
            rend2: true,
            mouse_over: false,
            adminset: '',
            superadmin: [
                // { label: 'Dashboard', icon: 'pi pi-home', to: '/' },
                // { label: this.$t(`module.title.DFCMangement`), icon: 'pi pi-users', to: '/dfc-management' },
                // { label: this.$t(`module.title.BannerMangement`), icon: 'pi pi-images', to: '/banner-management' },
                // { label: this.$t(`module.title.PopupMangement`), icon: 'pi pi-question-circle', to: '/popup-management' },
                // { label: this.$t(`module.title.NFTMangement`), icon: 'pi pi-bell', to: '/nft-management' },
                // { label: this.$t(`module.title.CardnewsMangement`), icon: 'pi pi-book', to: '/card-news' },
                // { label: this.$t(`module.title.MediaPressMangement`), icon: 'pi pi-bell', to: '/media-press' },
                // { label: this.$t(`module.title.GoogleformsMangement`), icon: 'pi pi-tags', to: '/google-form' },
                // { label: this.$t(`module.title.FrontendPopupManagement`), icon: 'pi pi-desktop', to: '/FrontendPopup-management' },
            ],
            Hanatour: [
            { label: `대시보드`, icon: 'pi pi-list', to: '/Dashboard/Dashboards' },
            // { label: `통계`, icon: 'pi pi-book', to: '/Statistics/Statistics' },
            { label: `사용자 관리`, icon: 'pi pi-users', to: '/UserManagement/UserList' },
            { label: `채팅방 관리`, icon: 'pi pi-comments', to: '/ChatroomManagement/ChatroomList' },
            {
                    label: `채팅방 태그 관리`,
                    icon: 'pi pi-id-card',
                    items: [
                        { label: `관리자 등록 태그 관리`, icon: 'pi pi-user', to: '/ChatroomTagManagement/AdminaddedTaglist/AdmintagList' },
                        { label: `사용자 등록 태그 관리`, icon: 'pi pi-users', to: '/ChatroomTagManagement/UseraddedtagList/UseraddedList' },
                        
                    ],
            },
            { label: `인기 채팅방 목록 관리`, icon: 'pi pi-comment', to: '/PopularChatroomListManagement/PopularChatroomList' },
            { label: `사용자 신고 관리`, icon: 'pi pi-microsoft', to: '/ReportedUsers/ReportedUserslist' },
            { label: `메시지 신고 관리`, icon: 'pi pi-envelope', to: '/ReportedMessages/ReportedMessageslist' },
            
            ],
          
            
          
            menu: [
               
                // onprogress ==> file not ready , when the file ll be ready change the path
                {
                    label: 'UI Kit',
                    icon: 'pi pi-star-o',
                    items: [
                        { label: 'Form Layout', icon: 'pi pi-id-card', to: '/formlayout' },
                        { label: 'Input', icon: 'pi pi-check-square', to: '/input' },
                        { label: 'Float Label', icon: 'pi pi-bookmark', to: '/floatlabel' },
                        { label: 'Invalid State', icon: 'pi pi-exclamation-circle', to: '/invalidstate' },
                        { label: 'Button', icon: 'pi pi-mobile', to: '/button', class: 'rotated-icon' },
                        { label: 'Table', icon: 'pi pi-table', to: '/table' },
                        { label: 'List', icon: 'pi pi-list', to: '/list' },
                        { label: 'Tree', icon: 'pi pi-share-alt', to: '/tree' },
                        { label: 'Panel', icon: 'pi pi-tablet', to: '/panel' },
                        { label: 'Overlay', icon: 'pi pi-clone', to: '/overlay' },
                        { label: 'Media', icon: 'pi pi-image', to: '/media' },
                        { label: 'Menu', icon: 'pi pi-bars', to: '/menu' },
                        { label: 'Message', icon: 'pi pi-comment', to: '/messages' },
                        { label: 'File', icon: 'pi pi-file', to: '/file' },
                        { label: 'Chart', icon: 'pi pi-chart-bar', to: '/chart' },
                        { label: 'Misc', icon: 'pi pi-circle-off', to: '/misc' },
                    ],
                },
                {
                    label: 'Utilities',
                    icon: 'pi pi-compass',
                    items: [
                        { label: 'Display', icon: 'pi pi-desktop', to: '/display' },
                        { label: 'Elevation', icon: 'pi pi-external-link', to: '/elevation' },
                        { label: 'Flexbox', icon: 'pi pi-directions', to: '/flexbox' },
                        { label: 'Icons', icon: 'pi pi-search', to: '/icons' },
                        { label: 'Text', icon: 'pi pi-pencil', to: '/text' },
                        { label: 'Widgets', icon: 'pi pi-star-o', to: '/widgets' },
                        { label: 'Grid System', icon: 'pi pi-th-large', to: '/grid' },
                        { label: 'Spacing', icon: 'pi pi-arrow-right', to: '/spacing' },
                        { label: 'Typography', icon: 'pi pi-align-center', to: '/typography' },
                    ],
                },
                {
                    label: 'Pages',
                    icon: 'pi pi-briefcase',
                    items: [
                        { label: 'Crud', icon: 'pi pi-pencil', to: '/crud' },
                        { label: 'Calendar', icon: 'pi pi-calendar-plus', to: '/calendar' },
                        { label: 'Timeline', icon: 'pi pi-calendar', to: '/timeline' },
                        { label: 'Landing', icon: 'pi pi-globe', url: 'assets/pages/landing.html', target: '_blank' },
                        { label: 'Login', icon: 'pi pi-sign-in', to: '/login' },
                        { label: 'Invoice', icon: 'pi pi-dollar', to: '/invoice' },
                        { label: 'Help', icon: 'pi pi-question-circle', to: '/help' },
                        { label: 'Error', icon: 'pi pi-times-circle', to: '/error' },
                        { label: 'Not Found', icon: 'pi pi-exclamation-circle', to: '/notfound' },
                        { label: 'Access Denied', icon: 'pi pi-lock', to: '/access' },
                        { label: 'Empty', icon: 'pi pi-circle-off', to: '/empty' },
                    ],
                },
                {
                    label: 'Hierarchy',
                    icon: 'pi pi-align-left',
                    items: [
                        {
                            label: 'Submenu 1',
                            icon: 'pi pi-align-left',
                            items: [
                                {
                                    label: 'Submenu 1.1',
                                    icon: 'pi pi-align-left',
                                    items: [
                                        { label: 'Submenu 1.1.1', icon: 'pi pi-align-left' },
                                        { label: 'Submenu 1.1.2', icon: 'pi pi-align-left' },
                                        { label: 'Submenu 1.1.3', icon: 'pi pi-align-left' },
                                    ],
                                },
                                {
                                    label: 'Submenu 1.2',
                                    icon: 'pi pi-align-left',
                                    items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-align-left' }],
                                },
                            ],
                        },
                        {
                            label: 'Submenu 2',
                            icon: 'pi pi-align-left',
                            items: [
                                {
                                    label: 'Submenu 2.1',
                                    icon: 'pi pi-align-left',
                                    items: [
                                        { label: 'Submenu 2.1.1', icon: 'pi pi-align-left' },
                                        { label: 'Submenu 2.1.2', icon: 'pi pi-align-left' },
                                    ],
                                },
                                {
                                    label: 'Submenu 2.2',
                                    icon: 'pi pi-align-left',
                                    items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-align-left' }],
                                },
                            ],
                        },
                    ],
                },
                {
                    label: 'Start',
                    icon: 'pi pi-download',
                    items: [
                        { label: 'Buy Now', icon: 'pi pi-shopping-cart', command: () => window.open('https://www.primefaces.org/store', '_blank') },
                        { label: 'Documentation', icon: 'pi pi-info-circle', to: '/documentation' },
                    ],
                },
            ],
        };
    },
    // mounted() {
    //     if (localStorage.getItem('admin-type') === 'admin') {
    //         this.adminset = this.superadmin;
    //     }else{
    //         this.adminset = this.dfc_user;
    //     }
    // },
    methods: {
        onSidebarMouseOver() {
            if (this.layoutMode === 'sidebar' && !this.sidebarStatic) {
                this.$emit('sidebar-mouse-over');
                this.rend = true;
                this.rend2 = false;
                this.mouse_over = true;
            }
        },
        onSidebarMouseLeave() {
            if (this.layoutMode === 'sidebar' && !this.sidebarStatic) {
                setTimeout(() => {
                    this.$emit('sidebar-mouse-leave');
                    this.rend = false;
                    this.rend2 = true;
                    this.mouse_over = false;
                }, 250);
            }
        },

        logout() {
         
            localStorage.removeItem('UserName');
            localStorage.removeItem('UserEmail');
            localStorage.removeItem('token');
            this.$router.push({ name: 'login' });
        },
        // onSidebarMouseLeave() {
        //     if (this.layoutMode === 'sidebar' && !this.sidebarStatic) {
        //         setTimeout(() => {
        //             this.$emit('sidebar-mouse-leave');
        //             this.rend = false;
        //             this.mouse_over=false;
        //         }, 250);
        //     }
        // },
        onToggleMenu(event) {
            this.$emit('toggle-menu', event);
        },
        onMenuClick(event) {
            this.$emit('menu-click', event);
        },
        onMenuItemClick(event) {
            this.$emit('menuitem-click', event);
        },
        onRootMenuItemClick(event) {
            this.$emit('root-menuitem-click', event);
        },
    },
    components: { AppSubmenu },
};
</script>
<style>
.logout-btn {
    position: absolute;
    bottom: 20px;
    display: block;
    width: 100%;
    padding: 0 20px;
    color: #000;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
}
.logout-btn:hover {
    color: var(--primary-color);
}
.logout-btn i {
    font-size: 24px;
    vertical-align: middle;
}
.p-button2 {
    background: transparent;
    border: none;
    color: #000;
}

.menu-wrapper .sidebar-logo .sidebar-pin {
    display: none;
    height: 0px;
    width: 30px;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    border: 2px solid #dee2e6;
    transition: background-color 0.2s;
    cursor: pointer;
}

@media (min-width: 992px) {
    .layout-wrapper.layout-static .menu-wrapper .sidebar-logo .sidebar-pin {
    display: inline-block;
    border: 0px solid #f3f3f9;
    background-color: rgb(255 255 255 / 10%);
}
}

@media (min-width: 992px) {
.menu-wrapper.layout-sidebar-active .sidebar-logo .sidebar-pin {
                    display: inline-block;
                    border-color: transparent;

                }
}


</style>