<template>
    <div class="wrapper">
        <p>{{value}} - {{valid ? 'valid' : 'invalid'}}</p><br>
        
        <mui-input v-model="value"/>
        <mui-input label="Text Input" v-model="value"/>
        <mui-input placeholder="Food, Apples etc" v-model="value"/>
        <mui-input label="Text Input" placeholder="Food, Apples etc" v-model="value"/>
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
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    .wrapper {
        --primary: #005cd4;
        font-size: 16px;
        font-family: 'Inter', 'Roboto', sans-serif;
    }
</style>
