<template>
    <div class="mui-container" :class="classes__">
        
        <input ref="input" class="input"
            :autocomplete="autocomplete"
            :spellcheck="spellcheck"
            :name="name"
            :type="type__"
            v-model="value__"
            @input="input($event.target.value)"
            @focus="inputEvent('focus', $event)"
            @blur="inputEvent('blur', $event)"
            @keydown="inputEvent('keydown', $event)"
            @keyup="inputEvent('keyup', $event)"
            @keypress="inputEvent('keypress', $event)"
            @change="inputEvent('change', $event)"
            @keydown.esc="inputEvent('esc', $event)"
            @keydown.enter="inputEvent('enter', $event)"
            >
        
        <div class="border" v-if="!noBorder"></div>

        <div class="label" v-if="label">{{label}}</div>
        <div class="placeholder" v-if="placeholder">{{placeholder}}</div>

        <div class="chars" v-if="showMax__">{{value__.length}} / {{max__}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: {
                type: [String, Number],
                default: '',
            },

            valid: {
                type: Boolean,
                default: true,
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

            spellcheck: {
                type: Boolean,
                default: false,
            },

            min: {
                type: [Number, String],
                default: null,
            },

            max: {
                type: [Number, String],
                default: null,
            },

            noBorder: {
                type: Boolean,
                default: false,
            },

            hideMax: {
                type: Boolean,
                default: false,
            },
        },

        data() {
            return {
                value__: '',
                valid__: true,
                focus__: false,
                visible__: false,
                score: 0,
                errors: {},
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

            min__() {
                if (isNaN(Number(this.min))) return Number(this.min)

                return null
            },

            max__() {
                if (isNaN(Number(this.max))) return Number(this.max)

                return null
            },

            classes__() {
                return {
                    'focused': this.focus__,
                    'focused-or-filled': this.focusedOrFilled__,
                    'invalid': !this.valid__,
                    'has-label': this.label,
                    'spacer': this.showMax__,
                }
            },

            showMax__() {
                if (this.hideMax) return false

                if (this.max__ === null) return false

                return true
            },

            focusedOrFilled__() {
                return (this.value__.length > 0 || this.focus__)
            }
        },

        methods: {
            input(value) {
                this.$emit('update:modelValue', value)
            },

            inputEvent(type, event) {
                this.$emit(type, event)

                switch (type)
                {
                    case 'focus': this.focus__ = true; break;
                    case 'blur': this.focus__ = false; break;
                }
            },

            inputFocus(event) {
                
                this.$emit('focus', event)
            },

            inputBlur(event) {
                this.focus__ = false
                this.$emit('blur', event)
            },

            validate() {
                this.$emit('update:valid', this.valid__)
            },
        },
    }
</script>

<style lang="sass" scoped>
    .mui-container
        --mui-height: 3rem
        --mui-background: #fff
        --mui-color: #000
        --mui-color-light: #666

        height: var(--mui-height)
        background: var(--mui-background)
        border-radius: .325rem
        position: relative

        *
            box-sizing: border-box

        &.focused
            .border
                border: 1px solid #222

        &.focused-or-filled
            .progress-bar
                transform: scaleY(1)

            .label
                transform: translate(4px, -5px) scale(0.72)

        &.has-label
            .input
                padding-top: 1rem !important

        &.spacer
            margin-bottom: 1rem

        &.invalid
            .border
                border-color: red
            .chars
                color: red

        .border
            height: 100%
            width: 100%
            position: absolute
            top: 0
            left: 0
            border-radius: inherit
            border-width: 1px
            border-style: solid
            border-color: #888
            pointer-events: none

        .label
            font-size: 1rem
            height: var(--mui-height)
            width: 100%
            line-height: calc(var(--mui-height) + 3px)
            position: absolute
            top: 0
            left: 0
            padding: 0 1rem
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            text-align: left
            pointer-events: none
            transition: all 200ms
            color: var(--mui-color-light)
            transform-origin: top left

        .chars
            font-size: 10px
            max-width: 100%
            line-height: 16px
            position: absolute
            right: 11px
            bottom: -1rem
            text-align: right
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            pointer-events: none
            color: var(--mui-color)

        .input
            height: 100%
            width: 100%
            padding: 0 1rem
            border: none
            background: none
            border-radius: inherit
            font-family: inherit
            font-size: 1rem
            color: var(--mui-color)

            &:focus
                outline: none

            &::placeholder
                color: var(--mui-color-light)
                font-size: 1rem
                font-family: inherit
                user-select: none
</style>