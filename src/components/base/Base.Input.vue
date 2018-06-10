<template>
<label>
        {{ label }}
        <input 
        class="input"
        v-bind="$attrs"
        :value="value"
        :type="type" 
        v-on="listeners"
        />
    </label>
</template>

<script>
export default {
    name: 'base-input',
    props: {
        type: {
            type: String,
            default: 'text',
        },
        value: {
            type: [String, Number],
            default: '',
        },
        label: {
            type: String,
            default: ''
        }
    },
    computed: {
        listeners() {            
            return {
                ...this.$listeners,
                input: event => this.$emit('input', event.target.value),
            }
        },
    },
}
</script>
