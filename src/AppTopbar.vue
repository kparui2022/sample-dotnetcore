<template>
    <div class="layout-topbar">
        <div class="layout-topbar-wrapper">
            <div class="layout-topbar-left">
                <a tabindex="0" class="menu-button" @click="onMenuButtonClick">
                    <i class="pi pi-bars"></i>
                </a>
                <router-link id="logo-link" class="layout-topbar-logo" to="/">
                    <img src="assets/layout/images/wallet2.png" style="height: 40px; margin: -20px 0px 0px -10px" alt="Rai Planner" />

                    <!-- <img :src="'assets/layout/images/logo-' + (topbarTheme === 'dark' ? 'freya-white' : 'freya') + '.svg'" alt="freya-layout" /> -->
                </router-link>
            </div>

            <AppMenu
                @resize="renderModule"
                :layoutMode="layoutMode"
                :sidebarActive="sidebarActive"
                :sidebarStatic="sidebarStatic"
                :menuActive="menuActive"
                :mobileMenuActive="mobileMenuActive"
                @sidebar-mouse-leave="onSidebarMouseLeave"
                @sidebar-mouse-over="onSidebarMouseOver"
                @toggle-menu="onToggleMenu"
                @menu-click="onMenuClick"
                @menuitem-click="onMenuItemClick"
                @root-menuitem-click="onRootMenuItemClick"
            />
            <div v-show="renderModuleName">
                <ul class="layout-topbar-actions">
                    <li style="list-style-type: none; font-weight: bold; font-size: large">
                        <span><i class="pi pi-chevron-left" style="font-weight: bold" @click="$router.go(-1)"></i> {{ topbar($route.name) }} </span>
                    </li>
                </ul>
            </div>

            <div class="layout-topbar-right">
                <ul class="layout-topbar-actions">
                    <!-- <li>
                        <LanguageInput />
                    </li> -->
                    <li>
                        <!-- <h6 style="margin-top: 11px">{{ admin_type }}</h6> -->
                    </li>
                    <!-- <li ref="search" class="topbar-item search-item" :class="{ 'active-topmenuitem': searchActive }">
                        <a tabindex="0" @click="onTopbarSearchToggle">
                            <i class="topbar-icon pi pi-search"></i>
                        </a>

                        <div class="search-input-wrapper" @click="onTopbarSearchClick">
                            <span class="p-input-icon-left">
                                <i class="pi pi-search"></i>
                                <InputText ref="desktopInput" type="text" placeholder="Search..." @keydown="onInputKeydown" />
                            </span>
                        </div>

                        <ul class="fadeInDown">
                            <div class="search-input-wrapper p-fluid" style="width: 100%" @click="onTopbarSearchClick">
                                <span class="p-input-icon-left">
                                    <i class="pi pi-search"></i>
                                    <InputText ref="phoneInput" type="text" placeholder="Search..." @keydown="onInputKeydown" />
                                </span>
                            </div>
                        </ul>
                    </li>-->

                    <li ref="profile" class="topbar-item user-profile" :class="{ 'active-topmenuitem fadeInDown': topbarUserMenuActive }">
                        <a @click="onTopbarUserMenuClick">
                            <img v-bind:src="adminicon" alt="ADMIN"  />
                        </a>

                        <a @click="onTopbarUserMenuClick" style="color: black; font-weight: bold; margin-left: 0px; width: 150%">{{UserName}}</a>
                        <i class="pi pi-angle-down" @click="onTopbarUserMenuClick" style="cursor:pointer;"></i>
                        <ul class="fadeInDown">
                            <!-- <li v-show="render" @click="personalinfo">
                                <div>
                                    <span>{{$t('dfc_user.personal_info')}}</span>
                                </div>
                            </li> -->
                            <li v-show="render" @click="Accountinfo" >
                                <div>
                                    <span>계정 정보</span>
                                </div>
                            </li>
                            <!-- <li @click="changepass">
                                <div>
                                    <span>{{$t('Change Password')}}</span>
                                </div>
                            </li>
                            <li @click="logout">
                                <div>
                                    <span>{{$t('button.logout')}}</span>
                                </div> -->
                            <!-- <li @click="changepass" :style="$route.path == '/change-pass' ? 'background-color: blue;color:#fff;' : 'background-color: none;'">
                                <div>
                                    <span>Change Password</span>
                                </div>
                            </li> -->
                            <!-- <li @click="logout">
                                <div>
                                    <span>{{ $t('logout') }}</span>
                                </div>
                            </li> -->
                        </ul>
                    </li>
                </ul>

                <!-- <a href="#" tabindex="0" class="layout-rightpanel-button" @click="onRightMenuButtonClick($event)">
                    <i class="pi pi-arrow-left"></i>
                </a>-->
            </div>
        </div>
    </div>
</template>

<script>
import AppMenu from './AppMenu';
// import LanguageInput from './components/LanguageInput.vue';
export default {
    name: 'AppTopbar',
    data() {
        return {
            adminicon: '/assets/layout/images/user.png',
            name: localStorage.getItem('UserName'),
            email: localStorage.getItem('UserEmail'),
            Userid: localStorage.getItem('Userid'),
            UserName: localStorage.getItem('Username'),
            render: false,
            renderModuleName: false,
            id:'',
        };
    },
    emits: [
        'menu-click',
        'menuitem-click',
        'root-menuitem-click',
        'menu-button-click',
        'toggle-menu',
        'right-menubutton-click',
        'sidebar-mouse-over',
        'sidebar-mouse-leave',
        'topbar-search-toggle',
        'topbar-search-click',
        'topbar-search-hide',
        'topbar-usermenu-click',
        'update:searchClick',
    ],
    props: {
        searchActive: Boolean,
        searchClick: Boolean,
        topbarItemClick: Boolean,
        topbarUserMenuActive: Boolean,
        topbarUserMenuClick: Boolean,
        activeTopbarItem: String,
        sidebarActive: Boolean,
        sidebarStatic: Boolean,
        layoutMode: String,
        topbarTheme: String,
        menuActive: Boolean,
        mobileMenuActive: Boolean,
    },
    unmounted() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    },
    mounted() {
        this.renderModule()
        window.addEventListener('resize', this.renderModule);
    },
    methods: {
        renderModule() {
            if (window.innerWidth < 1000) {
                this.renderModuleName = false;
            } else {
                this.renderModuleName = true;
            }
        },
        topbar(name) {
            return this.$t(String(name));
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
        onMenuButtonClick(event) {
            this.$emit('menu-button-click', event);
        },
        onToggleMenu(event) {
            this.$emit('toggle-menu', event);
        },
        onTopbarSearchToggle(event) {
            this.$emit('topbar-search-toggle', event);
            this.onSearchFocus();
        },
        onTopbarSearchClick(event) {
            this.$emit('topbar-search-click', event);
        },
        onInputKeydown(event) {
            const key = event.which;

            //escape, tab and enter
            if (key === 27 || key === 9 || key === 13) {
                this.$emit('topbar-search-hide', event);
            }
        },
        onTopbarUserMenuClick(event) {
            this.render = this.admin == 'admin' ? false : true;
            this.$emit('topbar-usermenu-click', event);
        },
        onRightMenuButtonClick(event) {
            this.$emit('right-menubutton-click', event);
        },
        onSidebarMouseOver() {
            this.$emit('sidebar-mouse-over');
        },
        onSidebarMouseLeave() {
            this.$emit('sidebar-mouse-leave');
        },
        logout() {
            localStorage.removeItem('UserName');
            localStorage.removeItem('UserEmail');
            localStorage.removeItem('token');
            this.$router.push({ name: 'login' });
        },
        changepass() {
            this.$router.push({ name: 'ChangePass' });
        },
        personalinfo() {
            this.$router.push({ name: 'AccountInfo' });
        },
        uploadDoc() {
            this.$router.push({ name: 'UploadedDoclist' });
        },

        Accountinfo() {
            this.$router.push({ path: '/account-info/' + this.Userid });
        },
        onSearchFocus() {
            if (window.innerWidth >= 576) {
                this.$refs.desktopInput.$el.focus();
            } else {
                this.$nextTick(function () {
                    this.$refs.phoneInput.$el.focus();
                });
            }
        },
    },
    components: {
        AppMenu,
        // LanguageInput,
    },
};
</script>
<style scoped>
.flow {
    background-color: blue;
    color: #fff;
}
.pi-chevron-left:hover{
    background-color:#464DF2;
    transition: 400ms;
    color: #fff;
}
.pi-chevron-left{
 border-radius: 50%;
 padding: 5px;
 background-color: rgb(218, 219, 223);
}
</style>
