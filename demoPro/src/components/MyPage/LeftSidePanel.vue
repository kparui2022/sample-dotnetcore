<template>
    <div class="mypage-left">
        <div class="flex-wr">
            <div class="image-innr">
                <figure><img src="@/assets/images/profile-pic.png" alt="" /></figure>
            </div>
            <div class="text-innr">
                <p class="usname">Username</p>
                <span class="lv">Lv.2</span>
                <div class="points">
                    <p><span><img src="@/assets/icons/point.svg" alt="" /></span>
                21,234 Points</p>
                </div>
            </div>
        </div>
        <div class="leftpanel-dropdown">
            <a  class="dropdown-toggle" :class="{ contentactive: active }" @click="active = !active" :aria-pressed="active ? 'true' : 'false'">
                <span><img src="@/assets/icons/icon-activity.svg" alt="" /></span>
                Activity
            </a>
            <ul class="mypage-list" :class="{ contentactive: active }">
                <li class="active">
                    <a @click="$router.push('/my-page/activity')">
                        <span><img src="@/assets/icons/icon-activity.svg" alt="" /></span>
                        Activity
                    </a>
                </li>
                <li>
                    <a @click="$router.push('/my-page/message')">
                        <span><img src="@/assets/icons/icon-message.svg" alt="" /></span>
                        Messages
                    </a>
                </li>
                <li>
                    <a @click="$router.push('/my-page/communication')">
                        <span><img src="@/assets/icons/icon-communication.svg" alt="" /></span>
                        Communications
                    </a>
                </li>
                <li>
                    <a @click="$router.push('/my-page/lists')">
                        <span><img src="@/assets/icons/icon-list.svg" alt="" /></span>
                        Lists
                    </a>
                </li>
                <li>
                    <a @click="$router.push('/my-page/media')">
                        <span><img src="@/assets/icons/icon-media.svg" alt="" /></span>
                        Media
                    </a>
                </li>
                <li>
                    <a @click="$router.push('/my-page/settings')">
                        <span><img src="@/assets/icons/icon-settings.svg" alt="" /></span>
                        Settings
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    name: 'LeftSidePanel',
    data() {
        return {
            active: false
        };
    }
};
</script>