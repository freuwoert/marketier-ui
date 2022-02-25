<template>
    <div class="wrapper">
        <button>Test Before</button>
        <mui-input v-model="value"/>
        <button>Test After</button>
    </div>
</template>

<script>
    import MuiInput from '@/components/MuiInput.vue'

    export default {
        data() {
            return {
                value: '',
                valid: true,
            }
        },
        components: {
            MuiInput,
        },
    }
</script>

<style>
    .wrapper {
        --primary: #005cd4;
    }
</style>
