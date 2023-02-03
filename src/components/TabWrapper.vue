<template>
    <div class="tabs">
        <div class="tabs-otr">
            <ul class="tabs-header">
                <li 
                v-for="title in tabTitles" 
                :key="title" 
                :class="{ active: title == selectedTitle }"
                @click="selectedTab(title)">
                    {{ title }}
                </li>
            </ul>
        </div>
        <slot />
    </div>
</template>

<script>
import { ref, provide } from 'vue'

export default {
    name: 'TabWrapper',
    emits: ["selectedTab"],
    setup(props, { slots, emit }){
        const tabTitles = ref(slots.default().map((tab) => tab.props.title))
        const selectedTitle = ref(tabTitles.value[0])

        const selectedTab =(title)=>{
            selectedTitle.value = title
            emit('selectedTab', title)
        }
        provide("selectedTitle", selectedTitle)

        return{
            tabTitles,
            selectedTitle,
            selectedTab
        }
    }
}
</script>