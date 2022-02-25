<template>
    <div class="mui-container" :class="[{'focused': isFocused}, {'focused-or-filled': isFocusedOrFilled}, {'invalid': isInvalid}, {'has-label': label}, {'spacer': displayMax}]">
        
        <input ref="input" class="input"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            :name="name"
            v-model="value__"
            :type="type__"
            @input="emit()"
            @focus="isFocused = true; $emit('focus')"
            @blur="isFocused = false; $emit('blur')"
            spellcheck="false">
        
        <div class="border" v-if="hasBorder"></div>
        <div class="label">{{label}}</div>

        <div class="chars" v-if="displayMax">{{value_.length}} / {{max}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: [String, Number],
                default: '',
            },

            type: {
                type: String,
                default: 'text',
            },

            name: {
                type: String,
            },

            label: {
                type: String,
            },

            placeholder: {
                type: String,
            },

            autocomplete: {
                type: String,
                default: 'off',
            },
        },

        data() {
            return {
                value__: '',
                score: 0,
                errors: {},
                hasBorder: true,
                isInvalid: false,
                isVisible: false,
                isFocused: false,
                displayMax: false,
            }
        },
        
        mounted() {

        },

        watch: {
            modelValue: {
                immediate: true,
                handler(newValue) {
                    this.value__ = newValue
                },
            },
        },

        computed: {
            type__() {
                if (['text', 'email', 'number', 'url', 'password'].includes(this.type)) return this.type

                return 'text'
            },

            isFocusedOrFilled() {
                return (this.value__.length > 0 || this.isFocused)
            }
        },

        methods: {
            input(value) {
                this.$emit('input', value)
            },
        },
    }
</script>

<style lang="sass" scoped>
    .mui-container
        --height: 3rem

        height: var(--height)
        width: 100%
        background: var(--bg-primary)
        border-radius: 5px
        position: relative

        &.focused
            .border
                border: var(--focused-input-border)

        &.focused-or-filled
            .progress-bar
                transform: scaleY(1)

            .label
                transform: translate(4px, -5px) scale(0.72)

        &.has-label
            .input
                padding-top: 15px !important

        &.spacer
            margin-bottom: 15px

        &.invalid
            .border
                border-color: var(--error)
            .chars
                color: var(--error)

        .border
            height: 100%
            width: 100%
            position: absolute
            top: 0
            left: 0
            border-radius: 5px
            border: var(--input-border)
            pointer-events: none

        .label
            font-size: 16px
            height: var(--height)
            width: 100%
            line-height: calc(var(--height) + 3px)
            position: absolute
            top: 0
            left: 0
            padding: 0 15px
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            text-align: left
            pointer-events: none
            transition: all 200ms
            color: var(--text-gray)
            transform-origin: top left

        .chars
            font-size: 10px
            max-width: 100%
            line-height: 16px
            position: absolute
            right: 11px
            bottom: -16px
            text-align: right
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            pointer-events: none
            color: var(--text-gray)

        .input
            height: 100%
            width: 100%
            padding: 0 15px
            border: none
            background: none
            border-radius: 3px
            font-family: var(--text-font)
            font-size: 16px
            color: var(--heading-gray)

            &::placeholder
                color: var(--text-gray)
                font-size: 16px
                font-family: var(--text-font)
                user-select: none
</style>