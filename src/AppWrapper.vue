<template>
    <Login v-if="$route.path === '/login'" />
    <Error v-else-if="$route.path === '/error'" />
    <Privacy v-else-if="$route.path === '/privacy'" />
    <TermCondition v-else-if="$route.path === '/term-conditions'" />
    <Access v-else-if="$route.path === '/access'" />
    <NotFound v-else-if="$route.path === '/notfound'" />
    <Forgotpassword v-else-if="$route.path === '/forgotpassword'" />
    <Changepassword v-else-if="$route.path === '/changepassword'" />
    <OtpEnter v-else-if="$route.path === '/OtpEnter'" />
    <App v-else :topbarTheme="topbarTheme" :menuTheme="menuTheme" @change-component-theme="changeComponentTheme" @change-color-scheme="changeColorScheme" 
        @topbar-theme="onTopbarThemeChange" @menu-theme="onMenuThemeChange" />
</template>

<script>
    import App from './App.vue';
    import Error from './pages/Error';
    import Access from './pages/Access';
    import Privacy from './pages/Privacy';
    import TermCondition from './pages/TermCondition';
    import Login from './pages/Login';
    import Forgotpassword from './pages/forgotpassword.vue';
    import Changepassword from './pages/changepassword.vue';
    import OtpEnter from './pages/OtpEnter.vue';
    import NotFound from './pages/NotFound';

	export default {
        data() {
            return {
                topbarTheme: "light",
                menuTheme: "light",
            }
        },
        methods: {
            onTopbarThemeChange(theme) {
                this.topbarTheme = theme;
            },
            onMenuThemeChange(theme) {
                this.menuTheme = theme;
            },
            changeComponentTheme(theme) {
                this.changeStyleSheetUrl("theme-css", theme, 3);
            },
            changeColorScheme(scheme) {
                this.topbarTheme = scheme;
                this.menuTheme = scheme;

                this.changeStyleSheetUrl("layout-css", "layout-" + scheme + ".css", 1);
                this.changeStyleSheetUrl("theme-css", "theme-" + scheme + ".css", 1);
            },
            changeStyleSheetUrl(id, value, from) {
                const element = document.getElementById(id);
                const urlTokens = element.getAttribute("href").split("/");

                if (from === 1) {
                    // which function invoked this function
                    urlTokens[urlTokens.length - 1] = value;
                } else if (from === 2) {
                    // which function invoked this function
                    if (value !== null) {
                        urlTokens[urlTokens.length - 2] = value;
                    }
                } else if (from === 3) {
                    // which function invoked this function
                    urlTokens[urlTokens.length - 2] = value;
                }

                const newURL = urlTokens.join("/");

                this.replaceLink(element, newURL, () => {
                    this.$appState.isNewThemeLoaded = true;
                });
            },
            replaceLink(linkElement, href, callback) {
                if (this.isIE()) {
                    linkElement.setAttribute("href", href);
                } else {
                    const id = linkElement.getAttribute("id");
                    const cloneLinkElement = linkElement.cloneNode(true);

                    cloneLinkElement.setAttribute("href", href);
                    cloneLinkElement.setAttribute("id", id + "-clone");

                    linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

                    cloneLinkElement.addEventListener("load", () => {
                        linkElement.remove();
                        cloneLinkElement.setAttribute("id", id);

                        if(callback) {
                            callback();
                        }
                    });
                }
            },
            isIE() {
                return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
            },
        },
        components: {
            "App": App,
            "Error": Error,
            "Access": Access,
            "Login": Login,
            "NotFound": NotFound,
            "Privacy":Privacy,
            "TermCondition":TermCondition,
            "Forgotpassword": Forgotpassword,
            "Changepassword": Changepassword,
            "OtpEnter": OtpEnter,
        }
	}
</script>

<style scoped>
</style>