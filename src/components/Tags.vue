<template>
<div>
    <span
        v-for="item in items"
        :key="item.id"
        class="tag m-r-sm is-rounded"
        :style="{ background: item.color, color: 'white',  minWidth: !showText ? '3em' : null , height: !showText ? '0.3em' : null  }"
        @click="toggleText"
    >
        {{ showText ? item.name : '' }}
        </span>
</div>
</template>

<script lang="js">
export default {
    name: 'tags',
    props: {
        tags: {
            required: false,
            default: []

        }
    },
    methods: {
        toggleText() {
            this.$store.commit('setSettings', { showTextOnTags: !this.showText });
        }
    },
    computed: {
        showText() {
            return this.$store.getters.settings.showTextOnTags || false;
        },
        items() {
            return this.$store.getters.tags.filter(x => this.tags.indexOf(x.id) > -1);
        }
    }
}
</script>
