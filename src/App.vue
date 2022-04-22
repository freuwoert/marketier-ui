<template>
    <div class="wrapper">
        <!-- <mui-input v-model="value"/>
        <mui-input label="Text Input" disabled v-model="value"/>
        <mui-input label="Email" placeholder="contact@example.com" v-model="value">
            <template v-slot:left>
                <svg xmlns="http://www.w3.org/2000/svg" height="1.25rem" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
            </template>
        </mui-input>
        <mui-input placeholder="Search" icon-left="search" v-model="value"/>
        <mui-input label="Text Input" placeholder="Food, Apples etc" v-model="value"/>
        <mui-input label="Text Input" helper="Helper text" v-model="value"/>
        <mui-input label="Password Input" type="password" v-model="value" icon-right="visibility"/> -->
        <mui-input label="Text Input" helper="Helper text" pattern="[a-z]" icon-left="sort_by_alpha" v-model="value"/>
        <mui-input type="email" label="Email Input" helper="Helper text" min="5" v-model="value"/>
        <!-- <mui-input type="number" label="Number Input" helper="Helper text" max="5" v-model="value"/> -->
    </div>
</template>

<script>
    import MuiInput from '@/components/MuiInput.vue'

    export default {
        data() {
            return {
                value: 'ö',
            }
        },
        components: {
            MuiInput,
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

    html, body
    {
        font-size: 16px;
        margin: 0;
    }

    .wrapper {
        --primary: #005cd4;
        font-size: 16px;
        font-family: 'Inter', 'Roboto', sans-serif;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
    }
</style>
