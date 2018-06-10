<template>
<div class="flex flex-column"  v-click-outside="unfocus" @click="setFocus">
  <vue-markdown
            :html="false"
            :source="text"
            v-if="!focus"
        />
        <textarea v-model="text" v-else/>
        <button
            v-html="'Save'"
            @click="save"
            v-show="value != text"
        />
</div>
</template>

<script lang="js">

import VueMarkdown from 'vue-markdown';

export default {
    name: 'markdown',
    components: {
       'vue-markdown': VueMarkdown
    },
    props: {
     value: {
         default: ''
     }
    },
    data() {
        return {
            text: 'tes',
            focus: false
        }
    },
    methods: {
        setFocus() {
            this.focus = true;
        },
        unfocus() {
            this.focus = false;
        },
        save() {
            
        }
    }
}
</script>
