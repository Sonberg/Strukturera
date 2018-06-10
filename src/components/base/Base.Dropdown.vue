<template>
<div
    class="dropdown"
    v-click-outside="close"
    :class="{ 'is-active' : open }"
>
    <div
        class="dropdown-trigger"
        @click="toggle"
    >
        <slot name="button">
            toggle
        </slot>
        </div>
        <div
            class="dropdown-menu"
            id="dropdown-menu"
            role="menu"
        >
            <div class="dropdown-content">
                <a class="dropdown-item flex flex-center">
                    <zondicons name="view-carousel" class="zondicons m-r-md" />
                    Image
                </a>
                <hr class="dropdown-divider">
                <a class="dropdown-item flex flex-center">
                    <zondicons name="box" class="zondicons m-r-md" />
                    Archive
                </a>
            </div>
            </div>
            </div>
</template>

<script>
export default {
    name: 'base-dropdown',
    props: {
        type: {
            default: 'text'
        }
    },
    data() {
        return {
            open: false
        }
    },
    methods: {
        toggle() {
            this.open = !this.open;
        },
        close() {
            if (this.open) {
                this.open = false;
            }
        }
    }
}
</script>
