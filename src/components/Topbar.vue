<template>
<aside class="menu">
    <router-link :to="{ name: 'projects'}" class="title is-5 is-marginless">Strukturera</router-link>

    <ul class="menu-list">
      <li>
        <zondicons name="cog"/>
      </li>
    </ul>
</aside>
</template>

<script lang="js">
export default {
    name: 'topbar',
    computed: {
        pages() {
            return this.$store.getters.all;
        }
    }
}
</script>
