<template>
    <div class="lang-dropdown">
        <select v-model="$i18n.locale">
            <option v-for="lang in langs" :key="lang.code" :value="lang.code">{{ lang.name }}</option>
        </select>
    </div>
</template>
<script>
export default {
    name: 'LanguageInput',
    data() {
        return {
            langs: [
                {
                    code: 'en',
                    name: 'English',
                },
                {
                    code: 'kr',
                    name: 'Korean',
                },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
.lang-dropdown {
    select {
        border: none;
        font-size: 14px;
        font-weight: 400;
        color: rgba(41, 50, 65, 0.8);
        &:focus {
            border: none;
            outline: 0;
        }
    }
}
</style>
